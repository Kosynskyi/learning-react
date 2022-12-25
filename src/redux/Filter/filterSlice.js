import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterValue: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterValue } = filterSlice.actions;
