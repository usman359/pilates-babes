import React from "react";
import styles from "./Blog.module.css";

function Blog() {
  return (
    <div className={styles.blogContainer}>
      <h3>Our Blog</h3>
      <h1>Latest Article From Blog</h1>
      <div className={styles.blogGrid}>
        <div className={styles.grid}>
          <img src="hero-1.jpg" alt="Lady training" className={styles.image} />
          <div className={styles.dateAndText}>
            <div className={styles.dates}>
              <span>01</span>
              <strong>JAN</strong>
              <span>2045</span>
            </div>
            <div>
              <strong>Lorem ipsum dolor sit amet</strong>
              <div>
                <div>
                  <ion-icon name="person-outline"></ion-icon>
                  <span>Admin</span>
                </div>
                <div>
                  <ion-icon name="person-outline"></ion-icon>
                  <span>Web Designer</span>
                </div>
                <div>
                  <ion-icon name="person-outline"></ion-icon>
                  <span>15 Comments</span>
                </div>
              </div>
              <p className={styles.paragraph}>
                Eos kasd et sea labore. Et sed amet magna elitr amet, stet et
                amet erat nonumy labore lorem ut eos, sed ut at tempor diam no.
                Kasd sit ea amet lorem et sea, ipsum sed dolor dolores sed
                dolore eirmod vero dolor sed kasd accusam
              </p>
              <button>Read More &left;</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Blog;
