import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../types/cart";

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existing = state.items.find(
        item => item.id === action.payload.id
      );

      if (existing) {
        existing.quantity++;
      } else {
        state.items.push(action.payload);
      }
    },

    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(
        item => item.id === action.payload
      );

      if (item) item.quantity++;
    },

    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.items.find(
        item => item.id === action.payload
      );

      if (!item) return;

      if (item.quantity === 1) {
        state.items = state.items.filter(
          i => i.id !== action.payload
        );
      } else {
        item.quantity--;
      }
    },

    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;