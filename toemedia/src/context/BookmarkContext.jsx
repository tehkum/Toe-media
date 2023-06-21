import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const bookmarkOps = createContext();

export function BookmarkProvider({ children }) {
  const [ bookmarkData, setBookmarkData ] = useState([]);
  const [ bmClicked, setBmClicked ] = useState(false);


  const bookmarkReducer = (state, action) => {
    switch (action.type) {

      case "BOOKMARK":
        bookmarkPost(action._id);
        break;

      case "REMOVE_BOOKMARK":
        removeBookmarkPost(action._id);
        break;

      default:
        return { ...state };
    }
  };

  const [bookmarkState, bookmarkDispatch] = useReducer(bookmarkReducer, {});

  async function bookmarkPost(postId) {
    try {
      const res = await axios.post(`/api/users/bookmark/${postId}`, {}, {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      });
      console.log(res);
      toast.success("Added to Bookmark")
    } catch (error) {
      console.log(error.message);
    }
  };

  async function removeBookmarkPost(postId) {
    try {
      const res = await axios.post(`/api/users/remove-bookmark/${postId}`, {}, {
        headers: {
          authorization: localStorage.getItem("encodedToken"),
        },
      });
      console.log(res);
      toast.success("Removed From Bookmark")

    } catch (error) {
      console.log(error.message);
    }
  };

  const bookmarkActions = {
    bookmarkPost,
    removeBookmarkPost,
  };

  const fetchDetails = async () => {
    try {
        const res = await axios.get("/api/users/bookmark",{
            headers: { 
              authorization : localStorage.getItem("encodedToken")
            }
          });
        setBookmarkData(res.data.bookmarks)
    } catch (error) {
        console.log(error)
    }
}

const bookMarkClick = () =>{
  setBmClicked(!bmClicked)
}

useEffect(()=>{
  fetchDetails();
},[bmClicked])

  return (
    <bookmarkOps.Provider value={{ bookmarkState, bookmarkDispatch, ...bookmarkActions, bookmarkData, bookMarkClick }}>
      {children}
    </bookmarkOps.Provider>
  );
}

export const useBookmark = () => useContext(bookmarkOps);

