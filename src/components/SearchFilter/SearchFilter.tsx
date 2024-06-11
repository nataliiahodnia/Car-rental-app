import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAdverts } from '../../redux/slices/advertsSlice';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../redux/store';
import { Action } from '@reduxjs/toolkit';

const SearchFilter: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, Action<string>>>();

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchAdverts() as AppThunk);
  };

  return (
    <div>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" placeholder="Search..." />
        <select>
          {/* Filter options */}
        </select>
        <select>
          {/* Sort options */}
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchFilter;
