import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface FavoriteCar {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: number;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: number;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: string;
}

interface FavoritesState {
  favoriteCars: FavoriteCar[]; 
}

const initialState: FavoritesState = {
  favoriteCars: JSON.parse(localStorage.getItem('favoriteCars') || '[]'),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteCar(state, action: PayloadAction<FavoriteCar>) {
      state.favoriteCars.push(action.payload);
      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
    removeFavoriteCar(state, action: PayloadAction<number>) {
      state.favoriteCars = state.favoriteCars.filter((car) => car.id !== action.payload);
      localStorage.setItem('favoriteCars', JSON.stringify(state.favoriteCars));
    },
  },
});

export const { addFavoriteCar, removeFavoriteCar } = favoritesSlice.actions;

export const selectAllFavoriteCars = (state: RootState) => state.favorites.favoriteCars;

export default favoritesSlice.reducer;
