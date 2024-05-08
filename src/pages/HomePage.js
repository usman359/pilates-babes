import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import styles from "./Homepage.module.css";
import Courses from "./Courses";
import TimeTable from "./TimeTable";
import AboutUs from "./AboutUs";
import Features from "./Features";
import Benefits from "./Benefits";
import CallToAction from "./CallToAction";
import BMICalculator from "./BMICalculator";
import Experts from "./Experts";
import Testimonials from "./Testimonials";
// import Blog from "./Blog";
import Footer from "./Footer";
import Flag from "../components/Flag";

const images = ["1.png", "2.jpg", "3.jpg"];

export default function HomePage() {
  const [image, setImage] = useState(images.at(0));
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

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  // function handleTranslateToGermany() {

  // }

  return (
    <>
      <img
        src={image}
        alt="Lady telling about fitness"
        className={`${styles.heroImg}`}
      />

      <div className={styles.header}>
        <Logo />
        <Navbar />
        {/* <img
          src="germany-flag.svg"
          alt="Germany flag"
          className={styles.img}
          onClick={handleTranslateToGermany}
        /> */}
      </div>

      <div className={styles.textBox}>
        <span>Gym & Fitness Center</span>
        <h1>Get Body in Shape</h1>
        <button onClick={() => handleScrollTo("callToAction")}>
          Join Us Now
        </button>
      </div>

      <div className={styles.leftArrowBox} onClick={slideToPreviousImage}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </div>

      <div className={styles.rightArrowBox} onClick={slideToNextImage}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>

      <Courses />
      <AboutUs />
      <Features />
      <Benefits />
      <CallToAction />
      <TimeTable />
      <BMICalculator />
      <Experts />
      <Testimonials />
      {/* <Blog /> */}
      <Footer />
    </>
  );
}
