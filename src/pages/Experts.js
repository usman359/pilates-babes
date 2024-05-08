import React from "react";
import styles from "./Experts.module.css";

function Experts() {
  return (
    <div className={styles.expertsContainer}>
      <strong>Retreats & Events 2024</strong>
      <h1>Meet Our Expert Trainers</h1>
      <div className={styles.expertsGrid}>
        <div className={styles.imageAndTextBox}>
          <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
          <div>
            <h3>Upper Austria</h3>
            <p>Bad Leonfelden</p>
          </div>
        </div>
        <div className={styles.imageBox}>
          <div className={styles.imageAndTextBox}>
            <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
            <div>
              <h3>Styria</h3>
              <p>Schladming </p>
            </div>
          </div>
        </div>
        <div className={styles.imageBox}>
          <div className={styles.imageAndTextBox}>
            <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
            <div>
              <h3>Carinthia</h3>
              <p>Nassfeld </p>
            </div>
          </div>
        </div>
        <div className={styles.imageBox}>
          <div className={styles.imageAndTextBox}>
            <img src="hero-img.jpg" alt="Trainer" className={styles.image} />
            <div>
              <h3>Styria</h3>
              <p>Schladming </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
