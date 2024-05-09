import React, { useEffect, useRef, useState } from "react";
import Logo from "../components/Logo";
import Nav1 from "../components/Nav1";
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
import { handleScrollTo } from "../helpers/scroll";
import Nav2 from "../components/Nav2";
import { RxHamburgerMenu } from "react-icons/rx";

const images = ["1.png", "2.jpg", "3.jpg"];

export default function HomePage() {
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
        {/* <Navbar /> */}
        {/* <img
          src="germany-flag.svg"
          alt="Germany flag"
          className={styles.img}
          onClick={handleTranslateToGermany}
        /> */}
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
              <li onClick={() => handleScrollTo("courses")}>Courses</li>
              <li onClick={() => handleScrollTo("aboutUs")}>About Us</li>
              <li onClick={() => handleScrollTo("features")}>Features</li>
              {/* <li onClick={() => handleScrollTo("calendar")}>Calendar</li> */}
              <li onClick={() => handleScrollTo("bmi")}>BMI</li>
            </ul>
          </div>
        )}
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
    </div>
  );
}
