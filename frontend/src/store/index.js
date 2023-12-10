import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';

const store = configureStore({
  reducer: {
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };