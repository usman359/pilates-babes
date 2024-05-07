import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialGrid}>
        <div className={styles.grid1}>
          <div className={styles.photoAndTextBox}>
            <div className={styles.imageBox}>
              <img src="hero-1.jpg" alt="man" className={styles.image} />
            </div>
            <div className={styles.textBox}>
              <h3>Client Name</h3>
              <span>Profession</span>
            </div>
          </div>
          <p className={styles.paragraph}>
            Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo
            elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus
            clita
          </p>
          <div className={styles.sliderBox}>
            <hr className={`${styles.slider} ${styles.active}`} />
            <hr className={styles.slider} />
            <hr className={styles.slider} />
          </div>
        </div>

        <div className={styles.grid2}>
          <img src="hero-1.jpg" alt="Lady" className={styles.image2} />
          <div className={styles.textBox2}>
            <h3>Testimonial</h3>
            <span>What Our Clients Say?</span>
            <p>
              Vero elitr lorem magna justo magna justo at justo est ipsum sed
              clita lorem dolor ipsum sed. Lorem sea lorem vero. Sanct dolor
              clita clita rebum kasd magna erat diam
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Testimonials;
