import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

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
    <div>
      <div className="login-form">
        <label htmlFor="username">
          <input type="text" name="username" placeholder="Username" value={loginDetails.username} onChange={handleChange}/>
          Username
        </label>
        <label htmlFor="password">
          <input type="password" name="password" placeholder="Password" value={loginDetails.password} onChange={handleChange}/>
          Password
        </label>
        <button onClick={()=>loginHandler(loginDetails)}>Login</button>
      </div>
    </div>
  );
}
