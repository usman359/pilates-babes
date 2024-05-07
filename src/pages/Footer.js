import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerGrid}>
        <div>
          <h1>Get In Touch</h1>
          <div className={styles.addressBox}>
            <span>
              <ion-icon name="location-outline"></ion-icon>
            </span>
            <span>123 Street, New York, USA</span>
          </div>
          <div className={styles.addressBox}>
            <span>
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <span>+012 345 67890</span>
          </div>
          <div className={styles.addressBox}>
            <span>
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span>info@gmail.com</span>
          </div>
          <div className={styles.addressBox}>
            <span className={styles.logos}>
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span className={styles.logos}>
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
            <span className={styles.logos}>
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span className={styles.logos}>
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>
        </div>

        <div>
          <h1>Quick Links</h1>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Home</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>About Us</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Our Features</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Classes</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Contact Us</span>
          </div>
        </div>

        <div>
          <h1>Regular Links</h1>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Home</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>About Us</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Our Features</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Classes</span>
          </div>
          <div className={styles.linkBox}>
            <span>
              <ion-icon name="caret-forward-outline"></ion-icon>
            </span>
            <span>Contact Us</span>
          </div>
        </div>

        <div>
          <h1>Opening Hours</h1>
          <div className={styles.timeContainer}>
            <strong>Monday - Friday</strong>
            <time>8.00 AM - 8.00 PM</time>
          </div>
          <div className={styles.timeContainer}>
            <strong>Saturday - Sunday</strong>
            <time>2.00 PM - 8.00 PM</time>
          </div>
        </div>
      </div>

      <div className={styles.lineAndPara}>
        <hr className={styles.horizontalLine} />
        <p className={styles.footerParagraph}>
          &copy; Your Site Name. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
