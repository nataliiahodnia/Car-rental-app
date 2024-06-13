import React, { useState } from 'react';
import { Advert } from '../../redux/slices/advertsSlice';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

interface Props {
  filteredAdverts: Advert[];
  pageSize: number;
}

const CarList: React.FC<Props> = ({ filteredAdverts, pageSize }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const startIndex = 0;
  const endIndex = currentPage * pageSize;
  const visibleAdverts = filteredAdverts.slice(startIndex, endIndex);

  const loadMoreButton = filteredAdverts.length > endIndex && (
    <div className={styles.loadMoreButtonContainer}>
      <button className={styles.loadMoreButton} onClick={loadMore}>
        Load more
      </button>
    </div>
  );

  return (
    <div className={styles.carList}>
      {visibleAdverts.map(advert => (
        <CarCard key={advert.id} advert={advert} />
      ))}
      {loadMoreButton}
    </div>
  );
};

export default CarList;
