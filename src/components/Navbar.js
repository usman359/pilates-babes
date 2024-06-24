import React from "react";
import styles from "./Navbar.module.css";
import { handleScrollTo } from "../helpers/scroll";

export default function Navbar() {
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
