import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.feature1}>
        <div className={styles.featureicon}>
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div className={styles.featureText}>
          <h4>Progression</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            suscipit orci velit id libero
          </p>
        </div>
      </div>

      <div className={styles.feature2}>
        <div className={styles.featureicon}>
          <ion-icon name="barbell-outline"></ion-icon>
        </div>
        <div className={styles.featureText}>
          <h4>Workout</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            suscipit orci velit id libero
          </p>
        </div>
      </div>

      <div className={styles.feature3}>
        <div className={styles.featureicon}>
          <ion-icon name="nutrition-outline"></ion-icon>
        </div>
        <div className={styles.featureText}>
          <h4>Nutrition</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            suscipit orci velit id libero
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
