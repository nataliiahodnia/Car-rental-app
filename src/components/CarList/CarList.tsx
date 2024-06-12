// src/components/CarList/CarList.tsx

import React, { useState } from 'react';
import { Advert } from '../../redux/slices/advertsSlice';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

interface Props {
  adverts: Advert[];
}

const CarList: React.FC<Props> = ({ adverts }) => {
  const [visibleAdvertCount, setVisibleAdvertCount] = useState(12);

  const loadMore = () => {
    setVisibleAdvertCount(prevCount => prevCount + 12);
  };

  return (
    <div className={styles.carList}>
      {adverts.slice(0, visibleAdvertCount).map(advert => (
        <CarCard key={advert.id} advert={advert} />
      ))}
      {adverts.length > visibleAdvertCount && (
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
