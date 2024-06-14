import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Map from "../Map/Map";
// import FeedbackButton from "../FeedbackButton/FeedbackButton";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";

const Footer: React.FC = () => {
  const [showMap] = useState(true);

  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        {/* <h3>Contact us!</h3> */}
        <p>
          <MdEmail className={styles.iconFooter}/> carrentua@plt.com
        </p>
        <p>
          <FaSquarePhone className={styles.iconFooter}/> +38066000000
        </p>
        <p>
          <GoHomeFill className={styles.iconFooter}/> 33 Peremogy, Poltava, Ukraine
        </p>
      </div>
      {showMap && <Map />}
      {/* <FeedbackButton /> */}
      <div className={styles.additionalInfo}>
        <div className={styles.socialIcons}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icons}
          >
            <FaFacebookSquare className={styles.icon} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareTwitter className={styles.icon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icons}
          >
            <FaSquareInstagram className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
