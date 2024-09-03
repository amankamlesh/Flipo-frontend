import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './api/userApi';
import { userReducer } from './reducer/userReducer';
import { productAPI } from './api/productAPI';
import { cartReducer } from './reducer/cartReducer';
import { orderApi } from './api/orderAPI';
import { dashboardApi } from './api/dashboardAPI';

// Environment variable with fallback
export const server = import.meta.env.VITE_SERVER || 'http://localhost:4000';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [userReducer.name]: userReducer.reducer,
    [cartReducer.name]: cartReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      userApi.middleware,
      productAPI.middleware,
      orderApi.middleware,
      dashboardApi.middleware
    ),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

// Type for the RootState based on the store's state
export type RootState = ReturnType<typeof store.getState>;
