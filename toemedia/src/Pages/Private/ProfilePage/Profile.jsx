import { useContext, useEffect, useState } from "react";
// import { usePost } from "../../../context/PostContext";
import "../../Public/HomePage/Home.css";
import "./Profile.css";
import PostBox from "../../../components/PostDesign/PostBox";
import { useAuth } from "../../../context/AuthContext";
import axios from "axios";
import { useParams } from "react-router";
import { useUsers } from "../../../context/UserContext";
import { useOps } from "../../../context/OpsContext";
import EditModal from "../../../components/EditModal/EditModal";

export default function ProfilePage() {
  const [userProfile, setUserProfile] = useState({});
  const { userId } = useParams();
  // const { postData } = useContext(usePost);
  const { userDetail } = useAuth();
  const { checker, following } = useContext(useUsers);
  const { opsDispatch } = useOps();
  const [ userSpecificPost, setUserSpecificPost ] = useState([]);
  const [ showEditBox, setShowEditBox ] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/users/${userId}`)
      .then((res) => {
        setUserProfile(res.data.user);
      })
      .catch((error) => console.log(error));
  }, [userId]);

  useEffect(()=>{
    axios.get(`/api/posts/user/${userProfile?.username}`).then(res=>setUserSpecificPost([...res.data.posts].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ))).catch(err=>console.log(err))
  },[userProfile])

  return (
    <>
      <div className="home-page-head">
        <div className="home-page-content">
          <div className="profile-sec-1">
            <div className="profile-background" style={{background: userProfile?.profileBackground ? userProfile?.profileBackground.includes("cloudinary") ? `url(${userProfile?.profileBackground})` : userProfile?.profileBackground : "red"}}>
            <img
              className="profile-image-1"
              src={userProfile?.profileImage ? userProfile?.profileImage : "https://picsum.photos/id/1/200/300"}
              alt="profile"
            />
            </div>
            <span>
              <h2>
                {userProfile?.firstName} {userProfile?.lastName}
              </h2>
              <p><b>Username: </b>@{userProfile?.username}</p>
              {userProfile?.bio && <p><b>Bio: </b>{userProfile?.bio}</p>}
              {userProfile?.profileUrl && <p><b>Portfolio URL: </b>{userProfile?.profileUrl}</p>}
            </span>
            {userProfile._id === userDetail._id ? (
              <button className="btn btn-primary" onClick={()=>setShowEditBox(true)}>Edit Profile</button>
            ) : (
              following.find(({ _id }) => _id === userProfile._id) ? (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    checker();
                    opsDispatch({ type: "UNFOLLOW", _id: userProfile._id });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    checker();
                    opsDispatch({ type: "FOLLOW", _id: userProfile._id });
                  }}
                >
                  follow
                </button>
              )
              // <button
              //   onClick={() => {
              //     checker();
              //     opsDispatch({ type: "FOLLOW", _id: userProfile._id });
              //   }}
              //   className="btn btn-primary"
              // >
              //   Follow
              // </button>
            )}
          </div>
          <hr />
          {/* {postData
            ?.filter((user) => userProfile?.username === user?.username)
            .map((item) => {
              return <><PostBox item={item} /><hr/></>;
            })} */}
            {userSpecificPost?.map((item) => {
              return <><PostBox item={item} /><hr/></>;
            })}
        </div>
      </div>
      <EditModal detail={userDetail} showEdit={showEditBox} setShow={setShowEditBox}/>
    </>
  );
}
