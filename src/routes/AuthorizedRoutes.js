import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
function AuthorizedRoutes({ isAuthenticated }) {
  // console.log(isAuthenticated)
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
