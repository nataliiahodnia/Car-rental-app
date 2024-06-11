// src/pages/Catalog/Catalog.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, selectAllAdverts } from '../../redax/slices/advertsSlice';
import { RootState } from '../../redux/store';
import CarList from '../../components/CarList/CarList';
import SearchFilter from '../../components/SearchFilter/SearchFilter';
import styles from './Catalog.module.css';

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAllAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div className={styles.catalogPage}>
      <h1>Car Catalog</h1>
      <SearchFilter />
      <CarList adverts={adverts} />
    </div>
  );
};

export default CatalogPage;
