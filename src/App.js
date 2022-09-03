import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories } from "./stores/slice/categoriesSlice";
import { getTasks } from "./stores/slice/taskSlice";
import React from "react";
import Routes from "./routes/Routes";

function App() {
  const dispatch=useDispatch()
  // useEffect(()=>{
  //   console.log('t')
  //   dispatch(getCategories())
  // },[])



  return (
    <div className="wrapper">
      <Routes />
    </div>
  );
}
export default App;
