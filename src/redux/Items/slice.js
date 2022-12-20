import { createSlice } from '@reduxjs/toolkit';

export const itemSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = itemSlice.actions;

// якщо ми мутуємо стан, то return ставити не потрібно
// якщо ми НЕ мутуємо стан, то return ставити потрібно
