import React from "react";
import styles from "./about.module.css";
import aboutImg from "../../assets/backgrounds/hero_bg1.jpg"; // Replace with your campsite image

const AboutCampsite = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>

        {/* Left Text Section */}
        <div className={styles.textSection}>
          <p className={styles.welcomeText}>Welcome to</p>
          <p className={styles.subtitletwo}>NaturalCampsite</p>
          <p className={styles.description}>
            <span className={styles.highlight}>
              Escape the city and immerse yourself in the beauty of nature.
              At NaturalCampsite, we provide a serene and safe environment for adventurers, families, and nature lovers.
            </span>
          </p>
          <p className={styles.description}>
            Experience cozy tents, lakeside relaxation, guided nature trails, and evening bonfires under the stars.
            Whether you're seeking adventure, tranquility, or quality time with loved ones, NaturalCampsite is your perfect getaway.
            We focus on comfort, safety, and a truly immersive outdoor experience.
          </p>
        </div>

        {/* Right Image Section */}
        <div className={styles.imageSection}>
          <img src='https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870' alt="Beautiful Campsite" className={styles.image} />
        </div>

      </div>
    </section>
  );
};

export default AboutCampsite;
