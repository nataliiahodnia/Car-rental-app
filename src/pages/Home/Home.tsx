import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice'; // Виправлений імпорт
import { RootState, AppDispatch } from '../../redux/store'; // Виправлений імпорт
import styles from './Home.module.css';
import CarList from '../../components/CarList/CarList';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const adverts = useSelector((state: RootState) => selectAllAdverts(state)); // Використання RootState

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className={styles.homePage}>
      <h1>Welcome to Car Rental Service</h1>
      <CarList adverts={adverts} />
    </div>
  );
};

export default HomePage;
