import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";

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
  mileage: string;
}

interface AdvertsState {
  adverts: Advert[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AdvertsState = {
  adverts: [],
  status: "idle",
  error: null,
};

export const fetchAdverts = createAsyncThunk(
  "adverts/fetchAdverts",
  async () => {
    try {
      const response = await axios.get<Advert[]>(
        "https://66684690f53957909ff74f2c.mockapi.io/api/v1/cars"
      );
      return response.data;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
);

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdverts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.adverts = action.payload;
      })
      .addCase(fetchAdverts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Unknown error";
      });
  },
});

export const selectAllAdverts = (state: RootState) => state.adverts.adverts;

export default advertsSlice.reducer;
