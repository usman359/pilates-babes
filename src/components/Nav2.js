import React from "react";
import styles from "./Nav2.module.css";
import { handleScrollTo } from "../helpers/scroll";

export default function Nav2() {
  return (
    <ul className={styles.navbar}>
      <li onClick={() => handleScrollTo("features")}>Features</li>
      <li onClick={() => handleScrollTo("calendar")}>Calendar</li>
      <li onClick={() => handleScrollTo("bmi")}>BMI</li>
    </ul>
  );
}
