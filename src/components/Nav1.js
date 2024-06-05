import React from "react";
import styles from "./Nav1.module.css";
import { useNavigate } from "react-router-dom";
import { handleScrollTo } from "../helpers/scroll";

export default function Nav1() {
  const navigate = useNavigate();

  return (
    <ul className={styles.navbar}>
      <li onClick={() => navigate("classes")}>Classes</li>
      <li onClick={() => handleScrollTo("aboutUs")}>About Us</li>
      <li onClick={() => handleScrollTo("features")}>Features</li>
    </ul>
  );
}
