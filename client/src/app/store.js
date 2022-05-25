import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from '../redux/api/categories';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  // Controla los middleware y catching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware),
});
