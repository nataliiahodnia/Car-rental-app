import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCar,
  removeFavoriteCar,
  selectAllFavoriteCars,
} from "../../redux/slices/favoritesSlice";
import { Advert } from "../../redux/slices/advertsSlice";
import styles from "./CarCard.module.css";
import CarDetailsModal from "../CarDetailsModal/CarDetailsModal";
import { IoHeart } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

interface Props {
  advert: Advert;
}

const CarCard: React.FC<Props> = ({ advert }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectAllFavoriteCars);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isFavorite = favoriteCars.some((favorite) => favorite.id === advert.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFavoriteCar(advert.id));
    } else {
      dispatch(addFavoriteCar(advert));
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
      <img
        src={advert.img}
        alt={`${advert.make} ${advert.model}`}
        onClick={handleOpenModal}
      />
      <div>
        <div className={styles.titleCar}>
          <h2 className={styles.titleCard}>{`${advert.make}, ${advert.year}`}</h2>
          <p className={styles.titlePrice}>{`${advert.rentalPrice}$`}</p>
        </div>
        <p className={styles.descriptionCard}>
          {advert.model} &#10072; {advert.type} &#10072; {advert.rentalCompany} &#10072;{" "}
          {advert.fuelConsumption}
        </p>
        <button
          className={isFavorite ? styles.favorite : ""}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? <IoHeart /> : <IoMdHeartEmpty className={styles.notFavorite}/>}
        </button>
        <button className={styles.learnMore} onClick={handleOpenModal}>Learn more</button>
        {isModalOpen && (
          <CarDetailsModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            car={advert}
          />
        )}
      </div>
    </div>
  );
};

export default CarCard;
