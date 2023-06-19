//Redux
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Slice
import productSlice from "./features/product/productSlicer";

export const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
