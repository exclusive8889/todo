import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import { getTasks } from "../stores/slice/taskSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function AuthorizedRoutes({ isAuthenticated }) {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getTasks())
    // console.log('dispatch sc')
  },[])
  return (
    <Routes>
      {/* <Route path="/categories?limit=10&page=1" element={isAuthenticated ? <Home /> : null}></Route> */}
      <Route path="/" element={isAuthenticated && <Home />} />
      <Route path="*" element={"incoming"} />
      <Route path="/profile" element={<div>profile</div>} />
    </Routes>
  );
}

export default AuthorizedRoutes;
