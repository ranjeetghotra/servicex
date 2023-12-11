import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appointmentsReducer from './slices/appointmentsSlice';
import servicesReducer from './slices/servicesSlice';
import contactsReducer from './slices/contactSlice'
const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
    services: servicesReducer,
    contacts:contactsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };