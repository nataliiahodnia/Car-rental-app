import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import advertsReducer, { fetchAdverts } from './slices/advertsSlice';
import favoritesReducer from './slices/favoritesSlice';

const store = configureStore({
  reducer: {
    adverts: advertsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

store.dispatch(fetchAdverts());

export default store;
