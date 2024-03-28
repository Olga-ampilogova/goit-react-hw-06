import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
      state.items.push(action.payload);
    },
      prepare:((username, usernumber)=> {
  return {
    payload: {
           id: nanoid(),
          name: username,
            number: usernumber,
    }
  }
      })
    },
    deleteContact: (state, action) => {
       state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const selectContacts = state => state.contacts.items;

export default contactsSlice.reducer;
