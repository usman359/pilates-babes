import React from "react";
import styles from "./Flag.module.css";

function Flag() {
  return (
    <div className={styles.flagContainer}>
      <img src="germany.png" alt="Germany flag" className={styles.img} />
    </div>
  );
}

export default Flag;
