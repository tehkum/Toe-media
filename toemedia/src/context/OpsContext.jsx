import { createContext, useContext, useReducer } from "react";
import axios from "axios";

export const userOps = createContext();

export function OpsProvider({ children }) {
  const OpsReducer = (state, action) => {

    const followUser = async (userId) => {
      try {
        const res = await axios.post(
          `/api/users/follow/${userId}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("encodedToken"),
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    const unfollowUser = async (userId) => {
      try {
        const res = await axios.post(
          `/api/users/unfollow/${userId}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("encodedToken"),
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    const likePost = async (postId) => {
      try {
        const res = await axios.post(
          `/api/posts/like/${postId}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("encodedToken"),
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    const dislikePost = async (postId) => {
      try {
        const res = await axios.post(
          `/api/posts/dislike/${postId}`,
          {},
          {
            headers: {
              authorization: localStorage.getItem("encodedToken"),
            },
          }
        );
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };

    switch (action.type) {

      case "FOLLOW":
        followUser(action._id);
        break;

      case "UNFOLLOW":
        unfollowUser(action._id);
        break;

      case "LIKE":
        likePost(action._id);
        break;

      case "DISLIKE":
        dislikePost(action._id);
        break;

      case "COMMENT":
        return { ...state };

      default:
        return { ...state };
    }

  };

  const [opsState, opsDispatch] = useReducer(OpsReducer, []);

  return (
    <userOps.Provider value={{ opsState, opsDispatch }}>
      {children}
    </userOps.Provider>
  );
}

export const useOps = () => useContext(userOps);
