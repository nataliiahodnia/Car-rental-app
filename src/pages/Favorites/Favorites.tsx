// src/pages/Favorites/Favorites.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redax/store';
import CarList from '../../components/CarList/CarList';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Favorites.module.css';

const FavoritesPage: React.FC = () => {
  const favoriteCars = useSelector((state: RootState) => state.favorites.favoriteCars);

  return (
    <div className={styles.favoritesPage}>
      <Navbar />
      <h1>Favorite Cars</h1>
      {favoriteCars.length > 0 ? (
        <CarList adverts={favoriteCars} />
      ) : (
        <p className={styles.noFavorites}>No favorite cars selected.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
