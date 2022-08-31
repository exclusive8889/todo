import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlide";
export const store = configureStore({
    reducer: {
      auth:authSlice.reducer
    },
  })