import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ApiClient } from "../../request/request";
const cateSlice=createSlice({
    name:'category',
    initialState:{
        items:[],
        // totalItems:0,
        // totalPages:0,
    },
    reducers:{
        getCategories:(state,action)=>{
            state.items=action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            // console.log(action.payload)
            state.items.push(action.payload);
        })
    }
});

export const getCategories=createAsyncThunk('cates/getCategories',async()=>{
    const res =await ApiClient.get("/api/categories")
    return res.data
})
export default cateSlice