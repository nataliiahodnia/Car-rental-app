// src/components/CarCard/CarCard.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, removeFavoriteCar, selectAllFavoriteCars } from '../../redux/slices/favoritesSlice';
import { Advert } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store'; // Виправлений імпорт
import styles from './CarCard.module.css';

interface Props {
  advert: Advert;
}

const CarCard: React.FC<Props> = ({ advert }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state: RootState) => selectAllFavoriteCars(state)); // Використання RootState

  const isFavorite = favoriteCars.some((favorite) => favorite.id === advert.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoriteCar(advert.id));
    } else {
      const { id, make, model, year, img } = advert;
      dispatch(addFavoriteCar({ id, make, model, year, img }));
    }
  };

  return (
    <div className={styles.carCard}>
      <img src={advert.img} alt={`${advert.make} ${advert.model}`} />
      <div className={styles.details}>
        <h2>{`${advert.make} ${advert.model}`}</h2>
        <p>Year: {advert.year}</p>
        <p>Rental Price: ${advert.rentalPrice}/hour</p>
        <button className={isFavorite ? styles.favorite : ''} onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
