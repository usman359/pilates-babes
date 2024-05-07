import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };

  return (
    <ul className={styles.navbar}>
      <li className={styles.active}>Home</li>
      <li onClick={() => handleScrollTo("courses")}>Courses</li>
      <li onClick={() => handleScrollTo("aboutUs")}>About Us</li>
      <li onClick={() => handleScrollTo("features")}>Features</li>
      <li onClick={() => handleScrollTo("calendar")}>Calendar</li>
      <li onClick={() => handleScrollTo("bmi")}>BMI</li>
    </ul>
  );
}
