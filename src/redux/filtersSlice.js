import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: ""
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.filters.name;
// export const visibleContact = createSelector([selectContacts, selectFilter], ((items, filter) => {
//     return items.filter(({ text }) => text.toLowerCase().includes(filter.toLowerCase().trim()));
// }))

export default filtersSlice.reducer;
