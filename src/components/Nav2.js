import React from "react";
import styles from "./Nav2.module.css";
// import { handleScrollTo } from "../helpers/scroll";
import { useNavigate } from "react-router-dom";
import { handleScrollTo } from "../helpers/scroll";

export default function Nav2() {
  const navigate = useNavigate();

  return (
    <ul className={styles.navbar}>
      <li onClick={() => handleScrollTo("benefits")}>Benefits</li>
      <li onClick={() => handleScrollTo("calendar")}>Calendar</li>
      <li onClick={() => navigate("products")}>Products</li>
    </ul>
  );
}
