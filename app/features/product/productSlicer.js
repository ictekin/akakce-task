import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  result: null,
  error: null,
  loading: false,
};

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (request) => {
    const response = await axios.get(request.url);
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = false;

        if (state.result) {
          state.result.nextUrl = state.result.nextUrl;
          state.result.products = state.result.products.concat(
            action.payload.result.products
          );
          return;
        }
        state.result = action.payload.result;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
