import { ProductI } from "@/models/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialStateI {
  cart: Array<ProductI>
}
const initialState: InitialStateI = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductI>) => {
      state.cart = [...state.cart, action.payload]
    },
    removeFromCart: (state, action: PayloadAction<ProductI>) => {
      const newArray = state.cart.filter((elto) => elto.id !== action.payload.id);
      state.cart = newArray;
    },
    cleanCart: (state) => {
      state.cart = []
    },
  },
});

export const { addToCart, cleanCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
