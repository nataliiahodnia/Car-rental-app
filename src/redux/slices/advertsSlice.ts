// src/redux/slices/advertsSlice.ts

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface Advert {
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
  mileage: number;
}

interface AdvertsState {
  adverts: Advert[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AdvertsState = {
  adverts: [],
  status: 'idle',
  error: null,
};

// Видалено функції fetchAdvertsRequest, fetchAdvertsSuccess, fetchAdvertsFailure

// Створимо асинхронний thunk для отримання оголошень
export const fetchAdverts = createAsyncThunk('adverts/fetchAdverts', async () => {
  try {
    const response = await fetch('https://mockapi.io/api/v1/adverts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data as Advert[];
  } catch (error) {
    throw new Error((error as Error).message);
  }
});

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Unknown error';
      });
  },
});

export const selectAllAdverts = (state: RootState) => state.adverts.adverts;

export default advertsSlice.reducer;
