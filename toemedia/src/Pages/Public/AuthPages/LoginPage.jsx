import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import "./Authpage.css"
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  

  const { loginHandler } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="auth-pages">
      <div className="login-form">
        <h1 style={{alignSelf: "center"}}>Login</h1>
        <label htmlFor="username">Username</label>
          <input type="text" name="username" placeholder="Username" value={loginDetails.username} onChange={handleChange}/>
        
        <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password" value={loginDetails.password} onChange={handleChange}/>
        <button onClick={()=>loginHandler(loginDetails)}>Login</button>
        <p>New user? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
  );
}
