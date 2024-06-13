import React, { useState } from 'react';
import { Advert } from '../../redux/slices/advertsSlice';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

interface Props {
  filteredAdverts: Advert[]; // Додаємо проп для відфільтрованих оголошень
  pageSize: number; // Додаємо проп для розміру сторінки
}

const CarList: React.FC<Props> = ({ filteredAdverts, pageSize }) => { // Змінюємо проп
  const [currentPage, setCurrentPage] = useState(1); // Поточна сторінка

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleAdverts = filteredAdverts.slice(startIndex, endIndex);

  return (
    <div className={styles.carList}>
      {visibleAdverts.map(advert => (
        <CarCard key={advert.id} advert={advert} />
      ))}
      {filteredAdverts.length > endIndex && (
        <div className={styles.loadMoreButtonContainer}>
          <button className={styles.loadMoreButton} onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </div>
  );
};

export default CarList;
