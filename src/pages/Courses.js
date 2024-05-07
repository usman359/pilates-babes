import React from "react";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <div className={styles.coursesBox} id="courses">
      <div className={styles.courseContent}>
        <h1>Single Class</h1>
        <p>
          Get to know the Classic Pilates method on the mat or deepen your
          practice. As always, you don't have to be a professional. I look
          forward to you. You can but don't have to turn on your camera.
        </p>
        <button>Join Now</button>
      </div>

      <div className={styles.courseContent}>
        <h1>Private Class</h1>
        <p>
          Individual session tailored to your needs. To make an appointment,
          please contact me by email at hi@pilatesbabes.com. If you have health
          problems or are pregnant, please contact me in advance.
        </p>
        <button>Join Now</button>
      </div>
    </div>
  );
}
