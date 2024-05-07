import React from "react";
import styles from "./Experts.module.css";

function Experts() {
  return (
    <div className={styles.expertsContainer}>
      <strong>Our Trainers</strong>
      <h1>Meet Our Export Trainers</h1>
      <div className={styles.expertsGrid}>
        <div className={styles.imageBox}>
          <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
        </div>
        <div className={styles.imageBox}>
          <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
        </div>
        <div className={styles.imageBox}>
          <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
        </div>
        <div className={styles.imageBox}>
          <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
        </div>
      </div>
    </div>
  );
}

export default Experts;
