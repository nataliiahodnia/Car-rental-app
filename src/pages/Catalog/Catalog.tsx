import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts, Advert } from '../../redux/slices/advertsSlice';
import { RootState } from '../../redux/store';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { Action } from '@reduxjs/toolkit';

import CarList from '../../components/CarList/CarList';
import SearchFilter from '../../components/SearchFilter/SearchFilter';

const CatalogPage: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();
  const [filteredAdverts, setFilteredAdverts] = useState<Advert[]>([]);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <div>
      <h2>Catalog Page</h2>
      <SearchFilter onFilter={setFilteredAdverts} />
      <CarList filteredAdverts={filteredAdverts} pageSize={12} />
    </div>
  );
};

export default CatalogPage;
