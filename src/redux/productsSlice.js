import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const productsState = {
  date: moment().format("DD.MM.YYYY"),
  productsList: [],  // Inițializare corectă ca array gol
}

const productsSlice = createSlice({
  name: "products",
  initialState: productsState,
  reducers: {
    setDate(state, action) {
      state.date = action.payload;
    },
    setProducts(state, action) {
      // Asigură-te că productsList este întotdeauna un array valid
      state.productsList = Array.isArray(action.payload) ? action.payload : [];
    },
  },
});

export const { setDate, setProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
