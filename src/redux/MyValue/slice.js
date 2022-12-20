import { createSlice } from '@reduxjs/toolkit';

export const myValueSlice = createSlice({
  name: 'myValue',
  initialState: 100,
  reducers: {
    increment(state, action) {
      return state + action.payload; //якщо примітив, то треба повертати
    },
    decrement(state, action) {
      return state - action.payload; //якщо примітив, то треба повертати
    },
  },
});

export const { increment, decrement } = myValueSlice.actions;

// якщо ми мутуємо стан, то return ставити не потрібно
// якщо ми НЕ мутуємо стан, то return ставити потрібно
