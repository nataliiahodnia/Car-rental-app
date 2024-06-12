import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteCar,
  removeFavoriteCar,
  selectAllFavoriteCars,
} from "../../redux/slices/favoritesSlice";
import { Advert } from "../../redux/slices/advertsSlice";
import { RootState } from "../../redux/store";
import styles from "./CarCard.module.css";
import CarDetailsModal from "../CarDetailsModal/CarDetailsModal";
import { IoIosHeart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";

interface Props {
  advert: Advert;
}

const CarCard: React.FC<Props> = ({ advert }) => {
  const dispatch = useDispatch();
  const favoriteCars = useSelector((state: RootState) =>
    selectAllFavoriteCars(state)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <img
        src={advert.img}
        alt={`${advert.make} ${advert.model}`}
        onClick={handleOpenModal}
      />
      <div className={styles.details}>
        <h2>{`${advert.make} ${advert.model}`}</h2>
        <p>Year: {advert.year}</p>
        <p>Rental Price: ${advert.rentalPrice}/hour</p>
        <button
          className={isFavorite ? styles.favorite : ""}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? <IoIosHeart /> : <FaRegHeart />}
        </button>
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
