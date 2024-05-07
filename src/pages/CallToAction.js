import React from "react";
import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <div className={styles.callToActionContainer}>
      <div>
        <h1>Subscribe Our Newsletter</h1>
        <p>Subscribe and get Our latest article in your inbox</p>
        <input type="email" placeholder="Your Email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default CallToAction;
