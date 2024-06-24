import React from "react";
import styles from "./TimeTable.module.css";

export default function TimeTable() {
  return (
    <div className={styles.timeTableContainer} id="calendar">
      <h3>Class Timetable</h3>

      <h1>Working Hours and Class Time</h1>

      <div className={styles.tabContainer}>
        <span className={styles.bgColor}>All Classes</span>
        <span>Cardio</span>
        <span>Crossfit</span>
        <span>Powerlifting</span>
      </div>

      <table className={styles.scheduleContainer}>
        <thead className={styles.days}>
          <th>Time</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </thead>

        <tbody className={styles.exercises}>
          <th className={styles.exerciseTime}>
            <span>6.00am</span>
            <span>-</span>
            <span>8.00am</span>
          </th>
          <td>
            <strong>Cardio</strong>
            <span>John Deo</span>
          </td>
          <td></td>
          <td>
            <strong>Crossfit</strong>
            <span>Adam Phillips</span>
          </td>
          <td></td>
          <td>
            <strong>Power Lifting</strong>
            <span>James Alien</span>
          </td>
          <td></td>
          <td>
            <strong>Cardio</strong>
            <span>John Deo</span>
          </td>
        </tbody>

        <tbody className={styles.exercises}>
          <th className={styles.exerciseTime}>
            <span>10.00am</span>
            <span>-</span>
            <span>12.00am</span>
          </th>
          <td></td>
          <td>
            <strong>Power Lifting</strong>
            <span>James Alien</span>
          </td>
          <td></td>
          <td>
            <strong>Cardio</strong>
            <span>John Deo</span>
          </td>
          <td></td>
          <td></td>
          <td>
            <strong>Crossfit</strong>
            <span>Adam Phillips</span>
          </td>
        </tbody>

        <tbody className={styles.exercises}>
          <th className={styles.exerciseTime}>
            <span>5.00pm</span>
            <span>-</span>
            <span>7.00pm</span>
          </th>
          <td></td>
          <td>
            <strong>Power Lifting</strong>
            <span>James Alien</span>
          </td>
          <td></td>
          <td>
            <strong>Cardio</strong>
            <span>John Deo</span>
          </td>
          <td></td>
          <td>
            <strong>Crossfit</strong>
            <span>Adam Phillips</span>
          </td>
          <td></td>
        </tbody>

        <tbody className={styles.exercises}>
          <th className={styles.exerciseTime}>
            <span>7.00pm</span>
            <span>-</span>
            <span>9.00pm</span>
          </th>
          <td></td>
          <td>
            <strong>Cardio</strong>
            <span>John Deo</span>
          </td>
          <td></td>
          <td>
            <strong>Crossfit</strong>
            <span>Adam Phillips</span>
          </td>
          <td></td>
          <td>
            <strong>Power Lifting</strong>
            <span>James Alien</span>
          </td>
          <td></td>
        </tbody>
      </table>
    </div>
  );
}
