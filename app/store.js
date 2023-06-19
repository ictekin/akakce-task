//Redux
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Slice
import productSlice from "./features/product/productSlicer";
import productDetailSlice from "./features/product/productDetailSlicer";

export const store = configureStore({
  reducer: {
    products: productSlice,
    productDetail: productDetailSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
