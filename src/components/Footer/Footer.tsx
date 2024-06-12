import React, { useState } from 'react';
import styles from './Footer.module.css';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import Map from '../Map/Map';
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const Footer: React.FC = () => {
  const [showMap] = useState(true);

  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <h3>Contact Information</h3>
        <p>Email: carrentua@plt.com</p>
        <p>Phone: +38066000000</p>
        <p>Address: 123 Peremogy Street, Poltava, Ukraine</p>
      </div>
      <div className={styles.additionalInfo}>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icons}>
            <FaFacebookSquare className={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
            <FaSquareTwitter className={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icons}>
            <FaSquareInstagram className={styles.icon} />
          </a>
        </div>
      </div>
      {showMap && <Map />}
      <FeedbackButton />
    </footer>
  );
};

export default Footer;
