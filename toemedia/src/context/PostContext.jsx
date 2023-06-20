import { createContext, useEffect, useReducer, useState } from "react";
import { ProductReducer } from "../reducers";
import axios from "axios";

export const usePost = createContext();

export function PostProvider({children}){
    const [ postData, setPost ] = useState([]); 
    const [ userPost, setUserPost ] = useState({content:""});
    const [ thisPost, setThisPost ] = useState({});

    const [ productState, productDispatch ] = useReducer(ProductReducer, {
    productData: [],
})

    const fetchData = async () => {
        try {
            const res = await axios.get("/api/posts");
            setPost([...res.data.posts])
        } catch (error) {
            console.log(error);
        }
    }

    const getPost = async (postId) => {
        try {
            const res = await axios.get(`/api/posts/${postId}`);
            setThisPost(res.data.post);
        } catch (error) {
            console.log(error)
        }
    }

    const newPost = async (userPost) => {
        try {
            const res = await axios.post("/api/posts",{postData: {...userPost}},{
                headers: {
                  authorization: localStorage.getItem("encodedToken"),
                },
              })
              console.log(res)
            
        } catch (error) {
            console.log(error)
        }
    }

    const deletePost = async (postId) => {
        try {
            const res = await axios.delete(`/api/posts/${postId}`,{
                headers: {
                  authorization: localStorage.getItem("encodedToken"),
                },
              })
              console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const editPost = async (postId, postData) => {
        try {
            const res = await axios.post(`/api/posts/edit/${postId}`, {postData} ,{
                headers: {
                  authorization: localStorage.getItem("encodedToken"),
                },
              })
              console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[postData])

    return <usePost.Provider value={{ productState, productDispatch, postData, newPost, setUserPost, userPost, deletePost, editPost, getPost, thisPost }}>{children}</usePost.Provider>;
}
