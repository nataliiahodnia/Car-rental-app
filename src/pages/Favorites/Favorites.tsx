// src/pages/Favorites/Favorites.tsx

import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllFavoriteCars } from '../../redux/slices/favoritesSlice'; // Оновлено імпорт
import { RootState } from '../../redux/store';
import styles from './Favorites.module.css';
import CarList from '../../components/CarList/CarList';
import { Advert } from '../../redux/slices/advertsSlice'; // Додано імпорт

const FavoritesPage: React.FC = () => {
  const favoriteCars = useSelector((state: RootState) => selectAllFavoriteCars(state)); // Використання RootState

  return (
    <div className={styles.favoritesPage}>
      <h1>My Favorite Cars</h1>
      <CarList adverts={favoriteCars as Advert[]} /> {/* Використання правильного типу даних */}
    </div>
  );
};

export default FavoritesPage;