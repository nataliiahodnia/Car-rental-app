import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import advertsReducer from './slices/advertsSlice';
import favoritesReducer from './slices/favoritesSlice';
// import loadingReducer from "./slices/loadingSlice";


const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;

// Видаліть цей рядок, так як ви не хочете викликати fetchAdverts() тут
// store.dispatch(fetchAdverts());
