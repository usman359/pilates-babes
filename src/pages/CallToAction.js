import React from "react";
import styles from "./CallToAction.module.css";

function CallToAction() {
  return (
    <div className={styles.callToActionContainer} id="callToAction">
        <h1>Subscribe To Our Newsletter</h1>
        <p>Be the first to know about new collections and exclusive offers.</p>
        <input type="email" placeholder="Your Email"></input>
        <button>Subscribe</button>
    </div>
  );
}

export default CallToAction;
