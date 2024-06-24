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
            continuous advancement and development. It's the steady climb up the
            ladder of success, fueled by determination and perseverance. With
            each step forward, new horizons emerge, revealing opportunities for
            further expansion and evolution.
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
            endurance, flexibility, or overall fitness levels. It's a dynamic
            process that challenges the body and mind, pushing individuals to
            surpass their previous limits and reach new heights of performance.
            Whether it's lifting weights, or any other form of exercise, the
            goal remains the same.
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
            food and nutrients for health, growth, and vitality. It's about
            nourishing the body with the essential building blocks it needs to
            function optimally. This includes not only macronutrients like
            carbohydrates, proteins, and fats but also micronutrients such as
            vitamins and minerals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
