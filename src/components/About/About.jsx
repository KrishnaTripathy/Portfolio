import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {/* MCA Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/mca.jpg")} alt="MCA icon" />
            <div className={styles.aboutItemText}>
              <h3>Master of Computer Applications (MCA)</h3>
              <p>
                Completed MCA with a focus on advanced software development and
                systems design.
              </p>
              <div className={styles.extraDetails}>
                <span className={styles.percentage}>Percentage: 77%</span>
                <span className={styles.passout}>Year of Passout: 2023</span>
              </div>
            </div>
          </li>

          {/* BSc Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/bsc-.jpg")} alt="BSc icon" />
            <div className={styles.aboutItemText}>
              <h3>Bachelor of Science (B.Sc.)</h3>
              <p>
                Graduated with a B.Sc. degree, specializing in Computer Science
                and Mathematics.
              </p>
              <div className={styles.extraDetails}>
                <span className={styles.percentage}>Percentage: 75.5%</span>
                <span className={styles.passout}>Year of Passout: 2021</span>
              </div>
            </div>
          </li>

          {/* +2 Section */}
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/higher-secondary.jpg")} alt="+2 icon" />
            <div className={styles.aboutItemText}>
              <h3>Higher Secondary Education (+2)</h3>
              <p>
                Completed Higher Secondary Education with a major in Science,
                focusing on Physics, Chemistry, and Mathematics.
              </p>
              <div className={styles.extraDetails}>
                <span className={styles.percentage}>Percentage: 60.5%</span>
                <span className={styles.passout}>Year of Passout: 2018</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
