// src/pages/Catalog/Catalog.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdverts, selectAllAdverts } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';

import CarList from '../../components/CarList/CarList';

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();

  const adverts = useSelector((state: RootState) => selectAllAdverts(state));

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <h2>Catalog Page</h2>
      <CarList adverts={adverts} />
    </div>
  );
};

export default CatalogPage;
