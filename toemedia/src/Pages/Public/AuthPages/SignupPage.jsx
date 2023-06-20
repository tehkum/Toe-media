import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const { signUpHandler } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="auth-pages">
      <div className="login-form">
        <h1 style={{ alignSelf: "center" }}>Sign up</h1>
        <label htmlFor="Firstname">Firstname</label>
        <input
          type="text"
          name="firstName"
          placeholder="Firstname"
          value={signupDetails.firstName}
          onChange={handleChange}
        />

        <label htmlFor="username">Lastname</label>
        <input
          type="text"
          name="lastName"
          placeholder="Lastname"
          value={signupDetails.lastName}
          onChange={handleChange}
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={signupDetails.username}
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupDetails.password}
          onChange={handleChange}
        />

        <button onClick={() => signUpHandler(signupDetails)}>Signup</button>
        <p>Already a user? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}
