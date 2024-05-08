import React from "react";
import styles from "./Nav1.module.css";
import { handleScrollTo } from "../helpers/scroll";

export default function Nav1() {
  return (
    <ul className={styles.navbar}>
      <li className={styles.active}>Home</li>
      <li onClick={() => handleScrollTo("courses")}>Courses</li>
      <li onClick={() => handleScrollTo("aboutUs")}>About Us</li>
    </ul>
  );
}
