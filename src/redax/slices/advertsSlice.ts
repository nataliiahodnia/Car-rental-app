// src/redux/slices/advertsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';

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

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    fetchAdvertsRequest(state) {
      state.status = 'loading';
    },
    fetchAdvertsSuccess(state, action: PayloadAction<Advert[]>) {
      state.status = 'succeeded';
      state.adverts = action.payload;
    },
    fetchAdvertsFailure(state, action: PayloadAction<string>) {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const { fetchAdvertsRequest, fetchAdvertsSuccess, fetchAdvertsFailure } = advertsSlice.actions;

export const selectAllAdverts = (state: RootState) => state.adverts.adverts;

export const fetchAdverts = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchAdvertsRequest());
    const response = await fetch('https://mockapi.io/api/v1/adverts');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    dispatch(fetchAdvertsSuccess(data));
  } catch (error) {
    dispatch(fetchAdvertsFailure(error.message));
  }
};

export default advertsSlice.reducer;
