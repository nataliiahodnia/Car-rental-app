import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAdverts } from "../../redux/slices/advertsSlice"; // Виправлений імпорт
import { AppDispatch } from "../../redux/store"; // Виправлений імпорт
import styles from "./Home.module.css";
import SupportUkraine from "../../components/SupportUkraine/SupportUkraine";
import TestimonialCarousel from "../../components/TestimonialCarousel/TestimonialCarousel";
import Footer from "../../components/Footer/Footer";
import PromotionsSection from "../../components/PromotionsSection/PromotionsSection";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

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
