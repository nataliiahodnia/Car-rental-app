import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./SupportUkraine.module.css";
import image from "../../images/solidarni-z-ukraina-serce-dlonie.png"; // Додано правильний шлях до зображення

const SupportUkraine: React.FC = () => {
  return (
    <div className={styles.supportSection}>
      <img src={image} alt="ukraina" width={"60px"} />{" "}
      <h2 className={styles.title}>Support for Ukrainian Military</h2>
      <p className={styles.description}>
      We support the military and stand with Ukraine. You can also join our initiative and help those in need.
      </p>
      <a
        href="https://prytulafoundation.org/"
        className={styles.donationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
      <Marquee gradient={false} className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <p className={styles.marqueeItem}>
            <span className={styles.support}>&nbsp;We will donate 10%</span> to the
            army for every rented car!{" "}
            <span className={styles.support}>Support our military</span>{" "}
            together with us!{" "}
            <span className={styles.support}>#StandWithUkraine</span>
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default SupportUkraine;
