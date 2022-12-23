import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice } from './MyValue/slice';
import { itemSlice } from './Items/slice';
import { userSlice } from './MyValue/userSlice';

export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    items: itemSlice.reducer,
    user: userSlice.reducer,
  },
});
