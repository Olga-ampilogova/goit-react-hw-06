import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const contactPersistConfig = {
  key: 'contacts',
   version: 1,
  storage,
  whitelist:['items']
}
 const persistedContactReducer = persistReducer(contactPersistConfig, contactsReducer)

 export const store =  configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filtersReducer
   },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST],
      },
    }),
});
 export const  persistor = persistStore(store)