import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    products: [],
    qty: 0,
  },
  reducers: {
    setOneProduct: (state, action) => {
      const basketProduct = action.payload;

      const found = state.products.find((product) => {
        return product.id === basketProduct.id;
      });

      if (found) {
        found.qty += basketProduct.qty;
      } else {
        state.products = [...state.products, basketProduct];
      }
      state.qty += basketProduct.qty
    },
  },
});

export const { setOneProduct } = basketSlice.actions;

export default basketSlice.reducer;
