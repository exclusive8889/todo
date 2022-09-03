import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import cateSlice from "./slice/categoriesSlice";
import taskSlice from "./slice/taskSlice";
export const store = configureStore({
    reducer: {
      auth:authSlice.reducer,
      categories:cateSlice.reducer,
      taskSlice:taskSlice.reducer
    },
  })