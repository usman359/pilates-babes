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
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
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
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
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
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
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
              Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et
              lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima
              erat tempor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
