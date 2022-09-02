import { createSlice } from "@reduxjs/toolkit";
const cateSlice=createSlice({
    name:'category',
    initialState:{
        items:[],
        totalItems:0,
        totalPages:0,
    },
    reducers:{
        getCategories:(state,action)=>{
            state.items=action.payload
        }
    }
})
export default cateSlice