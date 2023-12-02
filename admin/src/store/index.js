import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appointmentsReducer from './slices/appointmentsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };