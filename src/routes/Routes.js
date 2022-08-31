import NonAuthorizedRoutes from "./NonAuthorizedRoutes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthorizedRoutes from "./AuthorizedRoutes";
import axios from "axios";
import { ApiClient } from "../request/request";
function Routes() {
  // const stlog=

  // const stateLogin=()=>{
  //     ApiClient.get(`/auth/login`, {
  //     headers: {
  //       'Authorization': `Bearer  ${localStorage.getItem("accessToken")}`
  //     }
  //   })
  //   .then((response)=> {
  //     if(response.request.status==200) {
  //         navigate('/');
  //         return setLog(true)
  //     }
  //     else{
  //       return setLog(false)
  //     }
  //   })
  // }
  // const [log,setLog]=useState(stateLogin())
  // console.log(log)

  // useEffect(()=>{
  //     if(localStorage.getItem("id")) stateLogin()
  // },[])

  // dkdjdjd
  const navigate = useNavigate();
  const accToken = () => {
    return localStorage.getItem("accessToken");
  };
  const accessToken = accToken();
  useEffect(() => {
    if (!accessToken) {
      navigate("/sign-in");
    }
  }, [accessToken]);

  return (
    <>
      <NonAuthorizedRoutes />
      <AuthorizedRoutes isAuthenticated={!!accessToken} />
    </>
  );
}

export default Routes;
