import { useContext, useEffect, useState } from "react";
import "./PostBox.css";
import { useUsers } from "../../context/UserContext";
import { useOps } from "../../context/OpsContext";
import { useBookmark } from "../../context/BookmarkContext";
// import { usePost } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";
import { red } from "../../img";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function PostBox({ item }) {
  const { _id, content, username, likes, imageUrl } = item;
  const { userData } = useContext(useUsers);
  const [thisUser, setThisUser] = useState({});
  const { opsDispatch } = useOps();
  const { bookmarkDispatch, bookMarkClick, bookmarkData } = useBookmark();
  const { userDetail } = useAuth();
  const [ showDropBox, setDropBox] = useState(false);

  useEffect(() => {
    setThisUser(userData.find((user) => user?.username === username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[_id]);

  return (
    <div className="post-box" key={_id}>
      <div className="post-sec-1">
        <img
          className="profile-image"
          src={thisUser?.profileImage ? thisUser?.profileImage :"https://picsum.photos/id/1/200/300"}
          alt="profile"
          style={{alignSelf: 'flex-start'}}
        />
        <span>
          <b>
            {thisUser?.firstName} {thisUser?.lastName}
          </b>
          <p>@{thisUser?.username}</p>
        </span>
        {showDropBox ? <h2 className="drop-icon" onClick={()=>setDropBox(false)}>x</h2> : <h2 className="drop-icon" onClick={()=>setDropBox(true)}>...</h2>}
      </div>
      {/* ************************************************************************** */}
      <Link to={`/post/${_id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
      <div className="post-sec-2">
        <p>{content}</p>
        {imageUrl && <img src={imageUrl} alt="post" width="100%" height="400"/>}
      </div></Link>
      {/* ************************************************************************** */}
      <div class="post-sec-3">
        <span className="like-btn">
          {likes?.likedBy?.find(({ _id }) => _id === userDetail?._id) ? (
            <img
              width="30"
              height="30"
              src={red}
              onClick={() => opsDispatch({ type: "DISLIKE", _id: _id })}
              alt="like--v1"
            />
          ) : (
            <img
              onClick={() => opsDispatch({ type: "LIKE", _id: _id })}
              width="30"
              height="30"
              src="https://img.icons8.com/material-outlined/96/like--v1.png"
              alt="like--v1"
            />
          )}
          <p>{likes?.likeCount}</p>
        </span>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/material-outlined/96/topic--v1.png"
          alt="topic--v1"
        />
        {bookmarkData?.find((id) => id === _id) ? (
          <img
            width="30"
            height="30"
            onClick={() => {
              bookMarkClick();
              bookmarkDispatch({ type: "REMOVE_BOOKMARK", _id: _id });
            }}
            src="https://img.icons8.com/color/96/bookmark-ribbon--v1.png"
            alt="bookmark-ribbon"
          />
        ) : (
          <img
            onClick={() => {
              bookMarkClick();
              bookmarkDispatch({ type: "BOOKMARK", _id: _id });
            }}
            width="30"
            height="30"
            src="https://img.icons8.com/material-outlined/96/bookmark-ribbon--v1.png"
            alt="bookmark-ribbon--v1"
          />
        )}
      </div>
      <DropDown showDropBox={showDropBox} setDropBox={setDropBox} _id={_id} userId={thisUser?._id}/>
    </div>
  );
}

