import React from "react";
import styles from "./Home.module.css";
import SupportUkraine from "../../components/SupportUkraine/SupportUkraine";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import Footer from "../../components/Footer/Footer";
import PromotionsSection from "../../components/PromotionsSection/PromotionsSection";

const HomePage: React.FC = () => {

  return (
    <div className={styles.container}>
      <SupportUkraine />
      <h1 className={styles.titleHome}>
        Welcome <span className={styles.titleAcent}>to Car Rental</span> Service
      </h1>
      <PromotionsSection />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
