import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Add other reducers as needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };