import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export const Authenticate = createContext();

export function AuthProvider({children}){
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userDetail, setUserDetail ] = useState({})
    const navigate = useNavigate();
    const location = useLocation();

    const loginHandler = async (loginDetails) => {
        try {
          const { data, status } = await axios.post("/api/auth/login", loginDetails);
        if(status === 200 || status === 201){
            setUserDetail(data.foundUser)
            setIsLoggedIn(true);
            localStorage.setItem("encodedToken",data.encodedToken);
            navigate(location?.state?.from?.pathname || "/")
        }
        } catch (error) {
          console.log(error);
        }
      };

    
    const signUpHandler = async (signupDetails) => {
      try {
        const res = await axios.post("/api/auth/signup", signupDetails)
        if(res.status === 200 || res.status === 201){
          navigate("/login")
        }
      } catch (error) {
        console.log(error)
      }
    }


    return <Authenticate.Provider value={{isLoggedIn, loginHandler, setIsLoggedIn, userDetail, signUpHandler}}>{children}</Authenticate.Provider>
}

export const useAuth = () => useContext(Authenticate);