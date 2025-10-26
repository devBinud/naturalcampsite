import styles from "./herosection.module.css";
import { Tent, Leaf } from "lucide-react";
import heroImg from "../../assets/backgrounds/hero_bg1.jpg";

const HeroSection = () => {
  return (
    <section className={styles.heroSection_wrapper}>
      <div className={styles.heroSection_inner}>
        {/* Left Content */}
        <div className={styles.heroSection_left}>
          <h1 className={styles.heroSection_heading}>
            Welcome to{" "}
            <span className={styles.heroSection_gradientText}>
              NaturalCampsite
            </span>
          </h1>

          <p className={styles.heroSection_paragraph}>
            Discover the beauty of nature with NaturalCampsite — your perfect
            escape from city life. From lush green forests to peaceful lakeside
            tents, we bring you closer to the wilderness with comfort and safety.
            Experience adventure, relaxation, and pure nature all in one place.
          </p>

          <a href="tel:+911234567890">
            <button className={styles.heroSection_button}>
              <Tent className={styles.arrowIcon} /> Book Your Camp Now
            </button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
