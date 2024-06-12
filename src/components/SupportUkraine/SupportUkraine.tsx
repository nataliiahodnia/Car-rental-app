// src/components/SupportUkraine/SupportUkraine.tsx

import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./SupportUkraine.module.css";

const SupportUkraine: React.FC = () => {
  return (
    <div className={styles.supportSection}>
      <h2 className={styles.title}>Підтримка Військових</h2>
      <p className={styles.description}>
        Ми допомагаємо військовим та підтримуємо Україну. Ви також можете
        долучитися до нашої ініціативи та допомогти тим, хто цього потребує.
      </p>
      <a
        href="https://prytulafoundation.org/"
        className={styles.donationLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Збір
      </a>

      <Marquee gradient={false} className={styles.marquee}>
        <div className={styles.marqueeContent}>
          <p className={styles.marqueeItem}>
            {" "}
            Ми донатимо 10% на армію від кожної орендованої машини! Підтримуйте
            наших військових разом з нами! #StandWithUkraine
          </p>
        </div>
      </Marquee>
    </div>
  );
};

export default SupportUkraine;
