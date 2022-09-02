
import { ApiClient } from "../request/request";
import { loginFailed,loginStart,loginSuccess } from "../stores/slice/authSlice";
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