import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const contactPersistConfig = {
  key: 'contacts',
  storage,
  whitelist:['items']
}
 const persistedContactReducer = persistReducer(contactPersistConfig, contactsReducer)

 export const store =  configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filters: filtersReducer
  },
});
 export const  persistor = persistStore(store)