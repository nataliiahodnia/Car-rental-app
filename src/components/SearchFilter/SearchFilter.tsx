// src/components/SearchFilter/SearchFilter.tsx

import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../../redux/slices/advertsSlice';
import styles from './SearchFilter.module.css';

const SearchFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Ваша логіка фільтрації за маркою автомобіля
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Ваша логіка фільтрації за ціною оренди автомобіля
  };

  const handleMileageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Ваша логіка фільтрації за пробігом автомобіля
  };

  return (
    <div className={styles.searchFilter}>
      <label htmlFor="make">Make:</label>
      <select id="make" onChange={handleFilterChange}>
        {/* Ваші варіанти фільтрації за маркою автомобіля */}
      </select>
      <label htmlFor="price">Price:</label>
      <select id="price" onChange={handlePriceChange}>
        {/* Ваші варіанти фільтрації за ціною оренди автомобіля */}
      </select>
      <label htmlFor="mileage">Mileage:</label>
      <input type="text" id="mileage" onChange={handleMileageChange} />
      <button onClick={() => dispatch(fetchAdverts())}>Apply Filters</button>
    </div>
  );
};

export default SearchFilter;
