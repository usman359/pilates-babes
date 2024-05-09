import React from "react";
import styles from "./Benefits.module.css";

function Benefits() {
  return (
    <div className={styles.benefitsContainer}>
      <h3>Why Choose Us?</h3>
      <h1>Benefits of Joining Our GYM</h1>

      <div className={styles.benefitsGridContainer}>
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitIcon}>
            <ion-icon name="barbell-outline"></ion-icon>
          </div>
          <div className={styles.benefitText}>
            <h3>Videos Instruction</h3>
            <p>
              Video introduction is a concise presentation that offers an
              overview of the content, purpose, and highlights of the upcoming
              video.
            </p>
          </div>
        </div>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitIcon}>
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div className={styles.benefitText}>
            <h3>Training Calendar</h3>
            <p>
              A training calendar provides a structured plan outlining workout
              sessions, rest days, and specific exercises tailored to individual
              fitness goals over a designated period.
            </p>
          </div>
        </div>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitIcon}>
            <ion-icon name="wifi-outline"></ion-icon>
          </div>
          <div className={styles.benefitText}>
            <h3>Free Apps & Wifi</h3>
            <p>
              Free apps and WiFi are invaluable resources for staying connected
              and accessing a wide range of digital services and content without
              any cost.
            </p>
          </div>
        </div>

        <div className={styles.benefitsGrid}>
          <div className={styles.benefitIcon}>
            <ion-icon name="hand-right-outline"></ion-icon>
          </div>
          <div className={styles.benefitText}>
            <h3>Community Support</h3>
            <p>
              Community support fosters a sense of belonging, provides
              encouragement, and facilitates shared learning experiences among
              individuals pursuing common goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
