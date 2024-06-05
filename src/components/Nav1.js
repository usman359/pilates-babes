import React from "react";
import styles from "./Nav1.module.css";
import { useNavigate } from "react-router-dom";

export default function Nav1() {
  const navigate = useNavigate();

  return (
    <ul className={styles.navbar}>
      {/* <li className={styles.active}>Home</li> */}
      <li onClick={() => navigate("classes")}>Classes</li>
      {/* <li onClick={() => handleScrollTo("aboutUs")}>About Us</li> */}
    </ul>
  );
}
