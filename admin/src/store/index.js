import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appointmentsReducer from './slices/appointmentsSlice';
import servicesReducer from './slices/servicesSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
    services: servicesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };