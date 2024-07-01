import React from "react";
import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <div className={styles.aboutUsContainer} id="aboutUs">
      <div className="absolute top-[20%] flex flex-col gap-12">
        <div className="flex justify-center">
          <img
            src="hero-img.jpg"
            alt="Body mirror by sema"
            className={styles.image}
          />
        </div>
        <div className={styles.textBox}>
          <h1>10 Years Experience</h1>
          <p>Labore vero lorem eos sed aliquy ipsum aliquy sed.</p>

          <div className={styles.accomplishment}>
            <div className="text-center">
              <div className={styles.icon}>
                <ion-icon name="barbell-outline"></ion-icon>
              </div>
              <h3>Certified GYM Center</h3>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>

            <div className="text-center">
              <div className={styles.icon}>
                <ion-icon name="trophy-outline"></ion-icon>
              </div>
              <h3>Award Winning</h3>
              <p>Ipsum sanctu dolor ipsum dolore sit et kasd duo</p>
            </div>
          </div>
        </div>
        <button className="flex justify-center">Learn More</button>
      </div>
    </div>
  );
}

export default AboutUs;
