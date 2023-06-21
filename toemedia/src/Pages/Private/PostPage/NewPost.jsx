import { useContext } from "react";
import "../../Public/HomePage/Home.css";
import { usePost } from "../../../context/PostContext";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export default function NewPost() {
  const { newPost, setUserPost, userPost } = useContext(usePost);
  const {userDetail} = useAuth();
  const navigate = useNavigate();

  const eventHandler = (event) => {
    setUserPost({ ...userPost, content: event.target.value });
  };

  const imageHandler = async (e) => {
    try {
      const image = e.target.files[0];
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "Toemedia");
      data.append("cloud_name", "dbehxf29s");
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dbehxf29s/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const uri = await res.json();
      setUserPost({ ...userPost, imageUrl: uri.url });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-page-head">
      <div className="home-page-title">
        <h2>Edit Post</h2>
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
              style={{ alignSelf: "flex-start" }}
            />
            <textarea
              className="new-post"
              contenteditable="true"
              style={{ height: "400px", border: "1px solid #666666" }}
              placeholder="Kick something out of your mind....."
              onChange={eventHandler}
            />
            
          </div>
          {userPost?.imageUrl && <img src={userPost?.imageUrl} alt="sfads" height="100" width="100" />}
          <input type="file" onChange={imageHandler} />
          <button type="submit" onClick={() => {
            newPost(userPost)
            navigate("/")
            }}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
