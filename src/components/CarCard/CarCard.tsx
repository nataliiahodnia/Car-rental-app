import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCar, removeFavoriteCar, selectAllFavoriteCars } from '../../redux/slices/favoritesSlice';
import { Advert } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store'; // Виправлений імпорт
import styles from './CarCard.module.css';
import CarDetailsModal from '../CarDetailsModal/CarDetailsModal'; // Додано імпорт

interface Props {
  advert: Advert;
}

const CarCard: React.FC<Props> = ({ advert }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state: RootState) => selectAllFavoriteCars(state)); // Використання RootState
  const [isModalOpen, setIsModalOpen] = useState(false); // Додано стейт для відкриття/закриття модалки

  const isFavorite = favoriteCars.some((favorite) => favorite.id === advert.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoriteCar(advert.id));
    } else {
      const { id, make, model, year, img } = advert;
      dispatch(addFavoriteCar({ id, make, model, year, img }));
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.carCard}>
      <img src={advert.img} alt={`${advert.make} ${advert.model}`} onClick={handleOpenModal} />
      <div className={styles.details}>
        <h2>{`${advert.make} ${advert.model}`}</h2>
        <p>Year: {advert.year}</p>
        <p>Rental Price: ${advert.rentalPrice}/hour</p>
        <button className={isFavorite ? styles.favorite : ''} onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
        {/* Додаємо модальне вікно */}
        {isModalOpen && (
          <CarDetailsModal isOpen={isModalOpen} onClose={handleCloseModal} car={advert} />
        )}
      </div>
    </div>
  );
};

export default CarCard;
