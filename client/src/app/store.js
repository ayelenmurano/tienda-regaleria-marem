import { configureStore } from '@reduxjs/toolkit';
import { categoriesApi } from '../redux/api/categories';
import { productsApi } from '../redux/api/products';

export const store = configureStore({
  reducer: {
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  // Controla los middleware y catching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(categoriesApi.middleware,productsApi.middleware),
});