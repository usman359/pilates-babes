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

  function handleOutsideInputClick(e) {
    if (
      e.target.nodeName === "BUTTON" ||
      e.target.nodeName === "INPUT" ||
      e.target.nodeName === "SELECT"
    ) {
      return;
    }
    setWeight("");
    setHeight("");
    setAge("");
    setBmi(0);
    setBmiCategory("");
  }

  return (
    <div
      className={styles.bmiCalculatorContainer}
      id="bmi"
      onClick={handleOutsideInputClick}
    >
      <div className={styles.bmiBox}>
        <div className={styles.bmiTextBox}>
          <h3>Body Mass Index</h3>
          <h1>What is BMI?</h1>
          <p>
            Body Mass Index (BMI) is a person's weight in kg's divided by the
            square of height in meters.
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
