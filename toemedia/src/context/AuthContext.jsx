import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";

export const Authenticate = createContext();

export function AuthProvider({children}){
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userDetail, setUserDetail ] = useState({})
    const [userUpdated, setUserUpdated] = useState(false)
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

    const updateUser = async () => {
      try {
        const res = await axios.get(`/api/users/${userDetail?._id}`)
        setUserDetail(res.data.user)
      } catch (error) {
        console.log(error)
      }
    }

    const updateClicked = () => setUserUpdated(!userUpdated)

    useEffect(()=>{
      updateUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userUpdated])


    return <Authenticate.Provider value={{isLoggedIn, loginHandler, setIsLoggedIn, userDetail, signUpHandler, updateClicked}}>{children}</Authenticate.Provider>
}

export const useAuth = () => useContext(Authenticate);