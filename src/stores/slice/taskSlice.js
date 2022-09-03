import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiClient } from "../../request/request";
const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
  },
  reducers: {
    getTasks: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTasks.fulfilled, (state, action) => {
      // console.log(action.payload)
      state.items.push(action.payload);
    })
    .addCase(addTask.fulfilled,(state,action)=>{
      // console.log(state.items)
      // state.items.push(action.payload)
      // console.log(state.items)
      const data=state.items;
      state.items[0] = [...data,action.payload]
    })
  },
});

export const getTasks = createAsyncThunk("cates/getTasks", async () => {
  const res = await ApiClient.get("/api/tasks");
  return res.data.items;
});
export const addTask = createAsyncThunk("cates/addTask", async (task) => {
  const res = await ApiClient.post("/api/tasks", task);
  // console.log('res',res.data)
  // console.log(res.data)
  return res.data;
});
export default taskSlice;
