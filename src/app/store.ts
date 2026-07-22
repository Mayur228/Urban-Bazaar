import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/store/cartSlice";
import authReducer from "../api/auth/authSlice"


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;