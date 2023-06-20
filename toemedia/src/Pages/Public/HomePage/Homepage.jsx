import { useContext } from "react";
import { usePost, useUsers } from "../../../";
import "./Home.css";
import PostBox from "../../../components/PostDesign/PostBox";
import { useAuth } from "../../../context/AuthContext";

export default function HomePage() {
  const { postData, newPost, setUserPost, userPost } = useContext(usePost);
  const { following } = useContext(useUsers);
  const { userDetail } = useAuth();

  const eventHandler = (event) => {
    setUserPost({...userPost, content: event.target.value})
  }

  return (
    <>
      <div className="home-page-head">
        <div className="home-page-title">
          <h2>Home</h2>
        </div>
          <div className="home-page-content">
        <div className="new-post-button">
            <div className="new-post-box">
              <img
                className="profile-image"
                src="https://picsum.photos/id/1/200/300"
                alt="profile"
                width="50"
                height="50"
              />
              <textarea
                className="new-post"
                contenteditable="true"
                placeholder="Kick something out of your mind....."
                onChange={eventHandler}
              />
            </div>

            <button type="submit" onClick={()=>newPost(userPost)}>Post</button>
          </div>
          <hr />
          {postData
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
