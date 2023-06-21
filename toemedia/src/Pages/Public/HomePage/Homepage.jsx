import { useContext, useState } from "react";
import { usePost, useUsers } from "../../../";
import "./Home.css";
import PostBox from "../../../components/PostDesign/PostBox";
import { useAuth } from "../../../context/AuthContext";

export default function HomePage() {
  const { postData, newPost, setUserPost, userPost } = useContext(usePost);
  const { following } = useContext(useUsers);
  const { userDetail } = useAuth();
  const [ latestPost, setLatest ] = useState(true);

  const eventHandler = (event) => {
    setUserPost({...userPost, content: event.target.value})
  }

  const sorted = latestPost ? postData : postData?.sort((a,b)=> b?.likes?.likeCount - a?.likes?.likeCount )

  return (
    <>
      <div className="home-page-head">
        <div className="home-page-title">
          <h2>Home</h2>
          <div className="home-page-sorting">
            <p onClick={()=>{setLatest(true)}} style={{fontWeight: latestPost ? "bolder" : "normal"}}>Latest</p>
            <p onClick={()=>{setLatest(false)}} style={{fontWeight: latestPost ? "normal" : "bolder"}}>Trending</p>
          </div>
        </div>
          <div className="home-page-content">
        <div className="new-post-button">
            <div className="new-post-box">
              <img
                className="profile-image"
                src={userDetail?.profileImage ? userDetail?.profileImage : "https://picsum.photos/id/1/200/300"}
                alt="profile"
                width="50"
                height="50"
              />
              <textarea
                className="new-post"
                contenteditable="true"
                placeholder="Kick something out of your mind....."
                onChange={eventHandler}
                value={userPost.content}
              />
            </div>

            <button type="submit" onClick={()=>{
              newPost(userPost)
              }}>Post</button>
          </div>
          <hr />
          {sorted
            ?.filter((item) =>
              following.find(({ username }) => username === item.username) || userDetail?.username === item?.username
            )
            .map((item) => {
              return <><PostBox item={item} /><hr/></>;
            })}
        </div>
      </div>
    </>
  );
}
