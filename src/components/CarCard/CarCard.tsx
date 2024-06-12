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

// id: number;
// year: number;
// make: string;
// model: string;
// type: string;
// img: string;
// description: string;
// fuelConsumption: number;
// engineSize: string;
// accessories: string[];
// functionalities: string[];
// rentalPrice: number;
// rentalCompany: string;
// address: string;
// rentalConditions: string;
// mileage: number;

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
        <h2 className={styles.titleCard}>{`${advert.make} ${advert.model} ${advert.rentalPrice}`}</h2>
        <p className={styles.descriptionCard}>
          {advert.year} &#10072; {advert.type} &#10072; {advert.rentalCompany}{" "}
          &#10072; {advert.fuelConsumption}
        </p>
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
