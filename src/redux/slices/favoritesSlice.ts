// src/redux/slices/favoritesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Змінено імпорт

interface FavoriteCar {
  id: number;
  make: string;
  model: string;
  year: number;
  img: string;
}

interface FavoritesState {
  favoriteCars: FavoriteCar[];
}

const initialState: FavoritesState = {
  favoriteCars: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCar(state, action: PayloadAction<FavoriteCar>) {
      state.favoriteCars.push(action.payload);
    },
    removeFavoriteCar(state, action: PayloadAction<number>) {
      state.favoriteCars = state.favoriteCars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoritesSlice.actions;

export const selectAllFavoriteCars = (state: RootState) => state.favorites.favoriteCars;

export default favoritesSlice.reducer;
