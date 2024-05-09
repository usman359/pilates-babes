import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={styles.featuresContainer} id="features">
      <div className={styles.feature1}>
        <div className={styles.featureicon}>
          <ion-icon name="calendar-outline"></ion-icon>
        </div>
        <div className={styles.featureText}>
          <h4>Progression</h4>
          <p>
            Progression is the journey towards improvement and growth, marked by
            continuous advancement and development.
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
            Workout involves physical activity designed to improve strength,
            endurance, flexibility, or overall fitness levels.
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
            Nutrition is the process of providing or obtaining the necessary
            food and nutrients for health, growth, and vitality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
