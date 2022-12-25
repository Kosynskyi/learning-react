import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactSlice } from './Contacts/contactSlice';
import { filterSlice } from './Filter/filterSlice';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

const filterPersistConfig = {
  key: 'filter',
  storage,
};

const persistedReducer = persistReducer(
  contactsPersistConfig,
  contactSlice.reducer
);

const filterPersistedReducer = persistReducer(
  filterPersistConfig,
  filterSlice.reducer
);

// export const store = configureStore({
//   reducer: { contacts: ContactSlice.reducer, filter: filterSlice.reducer },
// });

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filterPersistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
