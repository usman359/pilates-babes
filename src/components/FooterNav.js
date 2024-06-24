import React from "react";
import styles from "./Footer.module.css";
import { handleScrollTo } from "../helpers/scroll";

function FooterNav() {
  return (
    <>
      <div className={styles.linkBox}>
        <span>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </span>
        <span onClick={() => handleScrollTo("home")}>Home</span>
      </div>
      <div className={styles.linkBox}>
        <span>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </span>
        <span onClick={() => handleScrollTo("courses")}>Courses</span>
      </div>
      <div className={styles.linkBox}>
        <span>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </span>
        <span onClick={() => handleScrollTo("aboutUs")}>About Us</span>
      </div>
      <div className={styles.linkBox}>
        <span>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </span>
        <span onClick={() => handleScrollTo("features")}>Features</span>
      </div>
      <div className={styles.linkBox}>
        <span>
          <ion-icon name="caret-forward-outline"></ion-icon>
        </span>
        <span onClick={() => handleScrollTo("calendar")}>Calendar</span>
      </div>
    </>
  );
}

export default FooterNav;
