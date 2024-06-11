// src/pages/Home/Home.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, selectAllAdverts } from '../../redax/slices/advertsSlice';
import { Advert } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import styles from './Home.module.css';
import CarList from '../../components/CarList/CarList';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAllAdverts);

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
