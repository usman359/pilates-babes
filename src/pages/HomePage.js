import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import TimeTable from "./TimeTable";
import Courses from "./Courses";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { handleScrollTo } from "../helpers/scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

// const images = ["hero.jpeg", "2-min.jpg", "3-min.jpg"];
const images = ["hero.jpeg"];

const navItemsLeft = ["Home", "Courses", "About"];
const navItemsRight = ["Benefits", "Calendar", "Products"];

export default function HomePage() {
  const navigate = useNavigate();
  const [image, setImage] = useState(images[0]);
  const [navBox, setNavBox] = useState(false);
  const counter = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      slideToNextImage();
    }, 6000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const slideToPreviousImage = () => {
    counter.current =
      counter.current <= 0 ? images.length - 1 : counter.current - 1;
    setImage(images[counter.current]);
  };

  const slideToNextImage = () => {
    counter.current =
      counter.current >= images.length - 1 ? 0 : counter.current + 1;
    setImage(images[counter.current]);
  };

  const handleToggleNavBox = () => {
    setNavBox((open) => !open);
  };

  return (
    <div className="relative" id="home">
      <img
        src={image}
        alt="Lady telling about fitness"
        className="duration-400 block h-[100vh] w-full object-cover object-center transition-all ease-in-out"
      />

      {/* Header with navigation */}
      <div className="absolute left-0 top-0 w-full">
        <div className="hidden bg-gray-700 bg-opacity-80 px-4 py-2 md:flex md:justify-between">
          <Navbar navItems={navItemsLeft} />
          <Logo className="absolute left-1/2 top-0 h-40 -translate-x-1/2 transform cursor-pointer" />
          <Navbar navItems={navItemsRight} />
        </div>

        {/* Hamburger menu and icon for small screens */}
        <div className="relative flex h-32 items-center justify-center bg-gray-700 bg-opacity-60 p-4 md:hidden">
          <img
            src="logo.png"
            alt="Logo"
            className="absolute left-1/2 top-0 w-36 -translate-x-1/2 transform cursor-pointer"
          />
          <RxHamburgerMenu
            className="ml-auto cursor-pointer text-7xl text-white"
            onClick={handleToggleNavBox}
          />
        </div>

        {/* Navigation box */}
        {navBox && (
          <div className="absolute left-0 w-full bg-gray-700 bg-opacity-60 p-4 text-white">
            <ul className="flex list-none flex-col gap-14 px-8 py-5">
              <li
                className="cursor-pointer transition-colors duration-300 hover:text-pink-500"
                onClick={() => handleScrollTo("home")}
              >
                Home
              </li>
              <li
                className="cursor-pointer transition-colors duration-300 hover:text-pink-500"
                onClick={() => handleScrollTo("aboutUs")}
              >
                About Us
              </li>
              <li
                className="cursor-pointer transition-colors duration-300 hover:text-pink-500"
                onClick={() => handleScrollTo("features")}
              >
                Features
              </li>
              <li
                className="cursor-pointer transition-colors duration-300 hover:text-pink-500"
                onClick={() => navigate("products")}
              >
                Products
              </li>
              <li
                className="cursor-pointer transition-colors duration-300 hover:text-pink-500"
                onClick={() => navigate("classes")}
              >
                Classes
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Text box */}
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform text-center text-white md:w-auto">
        <span className="mb-10 block text-4xl font-bold text-pink-500">
          Gym & Fitness Center
        </span>
        <h1 className="mb-16 text-6xl font-semibold tracking-tighter">
          Get Body in Shape
        </h1>
        <button className="duration-400 cursor-pointer border-2 border-white bg-transparent px-12 py-3 text-lg text-white shadow-lg transition-all hover:bg-pink-500 hover:text-white">
          Book your class
        </button>
      </div>

      {/* Slide navigation arrows */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 transform cursor-pointer text-4xl text-white hover:text-gray-400"
        onClick={slideToPreviousImage}
      >
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>

      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 transform cursor-pointer text-4xl text-white hover:text-gray-400"
        onClick={slideToNextImage}
      >
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>

      {/* Components */}
      <AboutUs />
      <Courses />
      <Features />
      <Benefits />
      <TimeTable />
      <Testimonials />
      <Footer />
    </div>
  );
}
