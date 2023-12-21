import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import appointmentsReducer from './slices/appointmentsSlice';
import servicesReducer from './slices/servicesSlice';
import contactsReducer from './slices/contactSlice'
import headerSidebarReducer from './slices/headerSidebarSlice'
import holidayReducer from './slices/holidaysSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentsReducer,
    services: servicesReducer,
    contacts:contactsReducer,
    headerSidebar:headerSidebarReducer,
    holidays:holidayReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };