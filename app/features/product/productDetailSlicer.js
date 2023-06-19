//Redux-Toolkit
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import axios from "axios";

const initialState = {
  result: null,
  error: null,
  loading: false,
};

export const fetchProductDetail = createAsyncThunk(
  "fetchProductsDetail",
  async (request) => {
    const response = await axios.get(request.url);
    return response?.data;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.status = false;

        state.result = action.payload.result;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message;
      });
  },
});

export default productDetailSlice.reducer;
