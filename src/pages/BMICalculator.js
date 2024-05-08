import React, { useEffect, useState } from "react";
import styles from "./BMICalculator.module.css";

function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [bmi, setBmi] = useState(0);
  const [bmiCategory, setBmiCategory] = useState("");

  useEffect(
    function () {
      if (bmi > 0) {
        if (bmi <= 18.4) {
          setBmiCategory("Underwight");
        } else if (bmi <= 24.9) {
          setBmiCategory("Normal");
        } else if (bmi <= 29.9) {
          setBmiCategory("Overweight");
        } else {
          setBmiCategory("Obese");
        }
      }
    },
    [bmi]
  );

  function handleBMICalculation(e) {
    e.preventDefault();

    if (!weight && !height && !age) return;

    const heightInMeter = height / 100;
    const heightInMeter2 = heightInMeter * heightInMeter;
    const calculatedBMI = weight / heightInMeter2;

    setBmi(calculatedBMI);
  }

  return (
    <div className={styles.bmiCalculatorContainer} id="bmi">
      {/* <img src="1.jpg" alt="Lady training" className={styles.image} /> */}
      <div className={styles.image}></div>

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

          <form className={styles.inputs}>
            <input
              type="number"
              placeholder="Weight (KG)"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Height (CM)"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            <select>
              <option value="">Choose Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={handleBMICalculation}>Calculate Now</button>
          </form>
          {bmi > 0 && (
            <p
              style={{ marginTop: "1.2rem", color: "#fff", fontSize: "1.6rem" }}
            >
              {`Your BMI is: ${bmi.toFixed(2)}`}
            </p>
          )}
          {bmiCategory && (
            <p
              style={{ marginTop: "0.8rem", color: "red", fontSize: "1.6rem" }}
            >
              {`You are: ${bmiCategory}`}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BMICalculator;
