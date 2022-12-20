import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice } from './MyValue/slice';
import { itemSlice } from './Items/slice';

export const store = configureStore({
  reducer: { myValue: myValueSlice.reducer, items: itemSlice.reducer },
});
