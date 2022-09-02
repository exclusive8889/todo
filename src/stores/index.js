import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import cateSlice from "./slice/categories";
export const store = configureStore({
    reducer: {
      auth:authSlice.reducer,
      categories:cateSlice.reducer
    },
  })