import { CartItem } from '@/types';
import { createSlice } from '@reduxjs/toolkit';

export interface cartState {
  cartItems: CartItem[];
}

const initialState: cartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
export const {} = cartSlice.actions;
