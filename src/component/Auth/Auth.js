import React, { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

import './Auth.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"

import { useDispatch } from "react-redux/es/exports"
import { loginUser } from "../../utils/apiRequest"

export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin")
  const [usename,setusername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate();
  const dispatch=useDispatch()
  // const [login,setLogin] =useState(()=>{
  //   axios.get(`https://www.task-manager.api.mvn-training.com/api/users/${localStorage.getItem("id")}`, {
  //       headers: {
  //         'Authorization': `Bearer  ${localStorage.getItem("accessToken")}` 
  //       }
  //     })
  //     .then((response)=> {
  //       // console.log('1')
  //       if(response.request.status==200){
  //         // console.log(response)
  //         setLogin(true)
  //       } 
  //       else{
  //         return false;
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // } )
  // console.log(login)
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  
  // if (!login){
    if (authMode === "signin") {
      const handleSubmitLogin=(e)=>{
        e.preventDefault()
        const user={
          username:usename,
          password:password,
        }
        loginUser(user,dispatch,navigate)
      }
      return (
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleSubmitLogin} >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                  Sign Up
                </span>
              </div>
              <div className="form-group mt-3">
                <label>User name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="User name"
                  onChange={(e)=>{
                    setusername(e.target.value)
                  }}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e)=>{
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="text-center mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
        </div>
      )
    }
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Full Name</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="e.g Jane Doe"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  // }
  // else if(login){
  //   return (
  //     <h1>sc</h1>
  //   )
  // }
}