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
    cleanCart: (state) => {
      state.cart = []
    },
  },
});

export const { addToCart, cleanCart } = cartSlice.actions;

export default cartSlice.reducer;
