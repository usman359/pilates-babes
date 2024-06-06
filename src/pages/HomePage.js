import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import Nav1 from "../components/Nav1";
import styles from "./Homepage.module.css";
import TimeTable from "./TimeTable";
import Courses from "./Courses";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Benefits from "./Benefits";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { handleScrollTo } from "../helpers/scroll";
import Nav2 from "../components/Nav2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const images = ["1-min.png", "2-min.jpg", "3-min.jpg"];

export default function HomePage() {
  const navigate = useNavigate();

  const [image, setImage] = useState(images.at(0));
  const [navBox, setNavBox] = useState(false);
  const counter = useRef(0);

  useEffect(function () {
    const intervalId = setInterval(() => {
      slideToNextImage();
    }, 6000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  function slideToPreviousImage() {
    if (counter.current <= 0) {
      counter.current = images.length - 1;
    } else {
      counter.current -= 1;
    }
    setImage(images.at(counter.current));
  }

  function slideToNextImage() {
    if (counter.current >= images.length - 1) {
      counter.current = 0;
    } else {
      counter.current += 1;
    }
    setImage(images.at(counter.current));
  }

  function handleToggleNavBox() {
    setNavBox((open) => !open);
  }

  return (
    <div className={styles.homePageContainer} id="home">
      <img
        src={image}
        alt="Lady telling about fitness"
        className={`${styles.heroImg}`}
      />

      <div className={`${styles.header}`}>
        <div>
          <Nav1 />
        </div>
        <Logo />
        <div>
          <Nav2 />
        </div>
      </div>
      <div className={`${styles.hamburgerBox}`}>
        <div className={`${styles.hamburger}`}>
          <img src="logo.png" alt="Logo" className={styles.logo} />
          <RxHamburgerMenu
            className={styles.hamburgerIcon}
            onClick={handleToggleNavBox}
          />
        </div>
        {navBox && (
          <div id="navBox" className={`${styles.navBox}`}>
            <ul className={`${styles.navBoxUl}`}>
              <li onClick={() => handleScrollTo("home")}>Home</li>
              <li onClick={() => handleScrollTo("aboutUs")}>About Us</li>
              <li onClick={() => handleScrollTo("features")}>Features</li>
              <li onClick={() => navigate("products")}>Products</li>
              <li onClick={() => navigate("classes")}>Classes</li>
            </ul>
          </div>
        )}
      </div>

      <div className={styles.textBox}>
        <span>Gym & Fitness Center</span>
        <h1 className="tracking-tighter">Get Body in Shape</h1>
        <button onClick={() => navigate("classes")}>Book your class</button>
      </div>

      <div className={styles.leftArrowBox} onClick={slideToPreviousImage}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>

      <div className={styles.rightArrowBox} onClick={slideToNextImage}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>

      <AboutUs />
      <Courses />
      <Features />
      <Benefits />
      <TimeTable />
      {/* <Experts /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}
