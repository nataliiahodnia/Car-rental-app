// src/components/CarList/CarList.tsx

import React from 'react';
import { Advert } from '../../redux/slices/advertsSlice';
import CarCard from '../CarCard/CarCard';
import styles from './CarList.module.css';

interface Props {
  adverts: Advert[];
}

const CarList: React.FC<Props> = ({ adverts }) => {
  return (
    <div className={styles.carList}>
      {adverts.map((advert) => (
        <CarCard key={advert.id} advert={advert} /> // Виправлено атрибут `advert`
      ))}
    </div>
  );
};

export default CarList;
