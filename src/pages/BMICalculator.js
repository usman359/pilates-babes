import React from "react";
import styles from "./BMICalculator.module.css";

function BMICalculator() {
  return (
    <div className={styles.bmiCalculatorContainer}>
      <img src="3.jpg" alt="Lady training" className={styles.image} />

      <div className={styles.bmiGrid}>
        <div className={styles.bmiBox}>
          <h3>Body Mass Index</h3>
          <h1>What is BMI?</h1>
          <p>
            Vero elitr lorem magna justo magna justo at justo est ipsum sed
            clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor clita
            clita rebum kasd magna erat diam
          </p>
        </div>

        <div className={styles.calculateBmiBox}>
          <h2>Calculate your BMI</h2>
          <div className={styles.inputs}>
            <input type="number" placeholder="Weight (KG)" />
            <input type="number" placeholder="Height (CM)" />
            <input type="number" placeholder="Age" />
            <select>
              <option value="">Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button>Calculate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
