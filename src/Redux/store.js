import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './reducer';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contactBook',
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  contactReducer
);

export const store = configureStore({
  reducer: {
    contactBook: persistedReducer,
  },
});

export const persistor = persistStore(store);
