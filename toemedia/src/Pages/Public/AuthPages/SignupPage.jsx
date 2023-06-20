import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export default function SignupPage(){
    const [signupDetails, setSignupDetails] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: ""
    })

    const { signUpHandler } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupDetails((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    return  <div>
    <div className="login-form">
      <label htmlFor="Firstname">
        <input type="text" name="firstName" placeholder="Firstname" value={signupDetails.firstName} onChange={handleChange}/>
        Firstname
      </label>
      <label htmlFor="username">
        <input type="text" name="lastName" placeholder="Lastname" value={signupDetails.lastName} onChange={handleChange}/>
        Lastname
      </label>
      <label htmlFor="username">
        <input type="text" name="username" placeholder="Username" value={signupDetails.username} onChange={handleChange}/>
        Username
      </label>
      <label htmlFor="password">
        <input type="password" name="password" placeholder="Password" value={signupDetails.password} onChange={handleChange}/>
        Password
      </label>
      <button onClick={()=>signUpHandler(signupDetails)}>Signup</button>
    </div>
  </div>
}