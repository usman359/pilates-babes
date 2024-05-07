import React from "react";
import styles from "./Courses.module.css";

export default function Courses() {
  return (
    <div className={styles.coursesBox}>
      <div className={styles.courseContent}>
        <h1>Body Building</h1>
        <p>
          Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut
          diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy sanctus
          takimata. Kasd amet sit sadipscing at..
        </p>
        <button>Join Now</button>
      </div>

      <div className={styles.courseContent}>
        <h1>Muscle Building</h1>
        <p>
          Lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum ut
          diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy sanctus
          takimata. Kasd amet sit sadipscing at..
        </p>
        <button>Join Now</button>
      </div>
    </div>
  );
}
