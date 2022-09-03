import { createSelector } from "@reduxjs/toolkit";

export const taskSelector= (state)=>state.taskSlice.items[0];
