import axios from "axios";
import { ApiClient } from "../request/request";

import {loginStart,loginFailed,loginSuccess } from "../stores/slice/authSlide";
export const loginUser=async(user,dispatch,navigate)=>{
    dispatch(loginStart());
    try{
        const res=await ApiClient.post('/auth/login', user)
        localStorage.setItem('accessToken', res.data.token);
        localStorage.setItem('id', res.data.id);
        dispatch(loginSuccess(res.data))
        navigate("/")        
    }
    catch(err){
        dispatch(loginFailed())
    }
}