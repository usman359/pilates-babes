import React from "react";
import styles from "./Courses.module.css";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const navigate = useNavigate();

  return (
    <div className={styles.coursesBox} id="courses">
      <div className={styles.courseContent}>
        <h1>Single Class</h1>
        <p>
          Get to know the Body mirror by sema method on the mat or deepen your
          practice. As always, you don't have to be a professional. I look
          forward to you. You can but don't have to turn on your camera.
        </p>
        <button onClick={() => navigate("classes")}>Join The Class</button>
      </div>

      <div className={styles.courseContent}>
        <h1>Private Class</h1>
        <p>
          Individual session tailored to your needs. To make an appointment,
          please contact me by email at hi@pilatesbabes.com. If you have health
          problems or are pregnant, please contact me in advance.
        </p>
        <button onClick={() => navigate("classes")}>Private Class</button>
      </div>
    </div>
  );
}
