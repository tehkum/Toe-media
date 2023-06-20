import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

export const useUsers = createContext();

export function UserProvider({ children }) {
  const [ userData, setUser ] = useState([]);
  const [ clicked, setClicked ] = useState(false)
  const { userDetail } = useAuth();
  const [ following, setFollowing ] = useState([]);


  const fetchDetails = async () => {
    try {
      const res = await axios.get("/api/users");
      if (res.status === 200) {
        setUser(res.data.users);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const checker = () =>{
    setClicked(!clicked);
  }

  useEffect(()=>{
    axios.get(`/api/users/${userDetail._id}`).then(res=> setFollowing(res.data.user.following)).catch(err=> console.log(err))
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[clicked])

  useEffect(() => {
    fetchDetails();
  }, [userData]);

  return <useUsers.Provider value={{ userData, checker, following }}>{children}</useUsers.Provider>;
}
