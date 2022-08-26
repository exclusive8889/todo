import React, { useState } from "react"
import './Auth.css'
import Register from "./Register/Register"
import SignIn from "./Login/Login"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
export default function Login(props) {
  let [authMode, setAuthMode] = useState("signin")
  // const [usename,setusername] = useState("")
  // const [password,setPassword] = useState("")
  const [login,setLogin] =useState(false)
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }
  if (!login){
    if(localStorage.getItem("accessToken") ){
      console.log('1')
      axios.post('http://task-manager.api.mvn-training.com/auth/login', {
        //...data
      }, {
        headers: {
          'Authorization': `Bearer  ${localStorage.getItem("accessToken")}` 
        }
      })
      return (
              <h2>sc</h2>    
      )
    }
    else if (authMode === "signin") {
      
      return (
        <div className="Auth-form-container">
          <SignIn changeAuthMode={changeAuthMode} setLogin={setLogin}/>
        </div>
      )
    }
    return (
      <div className="Auth-form-container">
        <Register changeAuthMode={changeAuthMode}/>
      </div>
    )
  }
}