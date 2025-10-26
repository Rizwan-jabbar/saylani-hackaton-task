import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice/userSlice'
import cartReducer from '../slices/cartSlice/cartSlice';
export const store = configureStore({
  reducer: {
    users : userReducer,
    cart : cartReducer
  },
});
