import React from "react";
import { useSelector } from "react-redux";
import { selectAllFavoriteCars } from "../../redux/slices/favoritesSlice";
import { RootState } from "../../redux/store";
import styles from "./Favorites.module.css";
import CarList from "../../components/CarList/CarList";
import { Advert } from "../../redux/slices/advertsSlice";
import { FaRegFaceSadTear } from "react-icons/fa6";

const FavoritesPage: React.FC = () => {
  const favoriteCars = useSelector((state: RootState) =>
    selectAllFavoriteCars(state)
  );

  return (
    <div className={styles.favoritesPage}>
      <h1 className={styles.titleFavorite}>My Favorite Cars</h1>
      {favoriteCars.length === 0 ? (
        <div className={styles.noFavorites}>
          <FaRegFaceSadTear className={styles.noFavoritesIcon} />
          <p className={styles.noFavoritesMessage}>
            You don't have any favorite cars yet. Add some cars to your
            favorites!
          </p>
        </div>
      ) : (
        <CarList filteredAdverts={favoriteCars as Advert[]} pageSize={12} />
      )}
    </div>
  );
};

export default FavoritesPage;
