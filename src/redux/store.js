import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './Contacts/contactSlice';
import { filterReducer } from './Filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
