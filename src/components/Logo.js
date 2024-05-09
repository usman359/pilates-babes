import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logoBox}>
      <Link to="/">
        <img src="logo-new.jpg" alt="Logo" className={styles.logo} />
      </Link>
    </div>
  );
}
