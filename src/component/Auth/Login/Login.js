import { useState } from "react";
import axios from "axios"
function SignIn(props) {
    const [usename,setusername] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmitLogin=(e)=>{
        e.preventDefault()
        const user={
          username:usename,
          password:password,
        }
        axios.post('http://task-manager.api.mvn-training.com/auth/login', user)
        .then((response) => {
          if(response.request.status==200) props.setLogin(true)
          localStorage.setItem("accessToken",result.data.token)
          localStorage.setItem("id",result.data.id)
          }
        )
      }
    return ( 
        <form className="Auth-form" onSubmit={handleSubmitLogin} >
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span className="link-primary" onClick={props.changeAuthMode}>
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
     );
}

export default SignIn;