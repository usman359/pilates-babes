import React from "react";
import styles from "./Footer.module.css";
import FooterNav from "../components/FooterNav";

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
            <a
              href="https://www.youtube.com/channel/UCPLFNJnvveD4BpvzVB-clrg"
              target="_blank"
              rel="noreferrer"
              className={styles.logos}
            >
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            <a
              href="https://www.instagram.com/bodymirror_bysema?igsh=cmw2ZXIwamllY2Fj&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className={styles.logos}
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </div>
        </div>

        <div>
          <h1>Quick Links</h1>
          <FooterNav />
        </div>

        <div>
          <h1>Regular Links</h1>
          <FooterNav />
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
          &copy; Body mirror by Sema. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
