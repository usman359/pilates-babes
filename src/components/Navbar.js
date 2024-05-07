import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>Home</li>
      <li>About Us</li>
      <li>Courses</li>
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
