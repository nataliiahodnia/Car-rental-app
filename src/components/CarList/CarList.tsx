import React, { useState } from 'react';
import { Advert } from '../../redux/slices/advertsSlice';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

interface Props {
  adverts: Advert[];
  filteredAdverts: Advert[]; // Додаємо проп для відфільтрованих оголошень
}

const CarList: React.FC<Props> = ({ filteredAdverts }) => { // Змінюємо проп
  const [visibleAdvertCount, setVisibleAdvertCount] = useState(12);

  const loadMore = () => {
    setVisibleAdvertCount(prevCount => prevCount + 12);
  };

  return (
    <div className={styles.carList}>
      {filteredAdverts.slice(0, visibleAdvertCount).map(advert => ( // Змінюємо на використання відфільтрованих оголошень
        <CarCard key={advert.id} advert={advert} />
      ))}
      {filteredAdverts.length > visibleAdvertCount && (
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
