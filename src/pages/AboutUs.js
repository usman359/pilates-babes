import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutUsContainer} id="aboutUs">
      <div>
        <img src="hero-img.jpg" alt="Hello" className={styles.image} />
      </div>
      <div className={styles.textBox}>
        <h1>10 Years Experience</h1>
        <p>Labore vero lorem eos sed aliquy ipsum aliquy sed.</p>

        <div className={styles.accomplishment}>
          <div>
            <div className={styles.icon}>
              <ion-icon name="barbell-outline"></ion-icon>
            </div>
            <h3>Certified GYM Center</h3>
            <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            <button>Learn More</button>
          </div>

          <div>
            <div className={styles.icon}>
              <ion-icon name="trophy-outline"></ion-icon>
            </div>
            <h3>Award Winning</h3>
            <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
