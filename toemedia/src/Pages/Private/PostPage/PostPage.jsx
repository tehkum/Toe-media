import { useContext, useEffect } from "react";
import PostBox from "../../../components/PostDesign/PostBox";
import "../../Public/HomePage/Home.css";
import { useParams } from "react-router";
import { usePost } from "../../../context/PostContext";

export default function PostPage(){
    const { postId } = useParams();
    const { getPost, thisPost } = useContext(usePost);

    useEffect(()=>{
        getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[postId])

    return <div className="home-page-head">
    <div className="home-page-title">
        <h2>Post</h2>
    </div>
    <div className="home-page-content">
        {<PostBox item={thisPost}/>}
        <h1>{thisPost.username}</h1>
    </div>
</div>
}