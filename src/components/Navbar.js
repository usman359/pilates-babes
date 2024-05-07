import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <ul className={styles.navbar}>
      <li>Home</li>
      <li onClick={() => navigate("about-us")}>About Us</li>
      <li onClick={() => navigate("courses")}>Courses</li>
      <li>Schedule</li>
      <li>Events</li>
      <li>Testimonials</li>
      {/* <li>Home Workouts</li>
      <li>Credentials</li>
      <li>Products</li>
      <li>Contact</li> */}
    </ul>
  );
}
