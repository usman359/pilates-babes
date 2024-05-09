import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";

const clientInformation = [
  {
    picture: "ui-face1.jpg",
    name: "Michaela",
    description:
      "It's an indescribable feeling to exercise with Elvira and the other 'Pilates Babes' early in the morning. Elvira's Pilates style is wonderfully dynamic and energetic.",
  },
  {
    picture: "ui-face2.jpg",
    name: "Verena",
    description:
      "You can just tell that she loves what she does and that every 'Pilates babe' is important to her.",
  },
  {
    picture: "ui-face3.jpg",
    name: "Melanie",
    description:
      "Elvi's positive and motivating nature gets the best out of the participants: she pushes and cheers you on, so that at the end you are exhausted, but at the same time you have recharged your strength and energy.",
  },
  {
    picture: "ui-face4.jpg",
    name: "Heike",
    description:
      "I felt comfortable with Elvira and the community right from the start. I never had the feeling that you were being compared or judged, but that everyone was doing the best for themselves at their own pace.",
  },
];

function Testimonials() {
  const [currentClient, setCurrentClient] = useState(0);

  useEffect(function () {
    const intervalId = setInterval(function () {
      setCurrentClient((prevClient) =>
        prevClient >= clientInformation.length - 1 ? 0 : prevClient + 1
      );
    }, 3000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  function handleSliderClick(index) {
    setCurrentClient(index);
  }

  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialContentContainer}>
        <div className={styles.content1Box}>
          <div className={styles.photoAndTextBox}>
            <div className={styles.imageBox}>
              <img
                src={`${clientInformation[currentClient].picture}`}
                alt="man"
                className={styles.image}
              />
            </div>
            <div className={styles.textBox}>
              <h3>{`${clientInformation[currentClient].name}`}</h3>
              <span>Profession</span>
            </div>
          </div>
          <p className={styles.paragraph}>
            {`${clientInformation[currentClient].description}`}
          </p>
          <div className={styles.sliderBox}>
            {clientInformation.map((_, index) => (
              <hr
                key={index}
                className={`${styles.slider} ${
                  currentClient === index && styles.active
                }`}
                onClick={() => handleSliderClick(index)}
              />
            ))}
          </div>
        </div>
        <div className={styles.content2Box}>
          {/* <img src="hero-1.jpg" alt="Lady" className={styles.image2} /> */}
          <div className={styles.textBox2}>
            <h3>Testimonial</h3>
            <span>What Our Clients Say?</span>
            <p>{`${clientInformation[currentClient].description}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
