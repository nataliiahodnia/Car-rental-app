import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllFavoriteCars } from '../../redux/slices/favoritesSlice';
import { RootState } from '../../redux/store';
import styles from './Favorites.module.css';
import CarList from '../../components/CarList/CarList';
import { Advert } from '../../redux/slices/advertsSlice';

const FavoritesPage: React.FC = () => {
  const favoriteCars = useSelector((state: RootState) => selectAllFavoriteCars(state));

  return (
    <div className={styles.favoritesPage}>
      <h1>My Favorite Cars</h1>
      <CarList filteredAdverts={favoriteCars as Advert[]} pageSize={12} />
    </div>
  );
};

export default FavoritesPage;
