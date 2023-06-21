import { useContext } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./Userspec.css";
import { useUsers } from "../../";
import { useOps } from "../../context/OpsContext";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function UserSpecPage() {
  const { userData, checker, following } = useContext(useUsers);
  const { opsDispatch } = useOps();
  const { userDetail } = useAuth();

  return (
    <div className="user-spec">
      <SearchBar />
      <div className="follow-list">
        {userData.filter(users=> users._id !== userDetail._id ).map((users) => (
          <div className="userPec-sec-1" key={users._id}>
            <Link to={`/profile/${users._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}><div className="prof-user">
              <img
                className="profile-image"
                src={users?.profileImage ? users?.profileImage : "https://picsum.photos/id/1/200/300"}
                alt="profile"
              />
              <span>
                <b>
                  {users.firstName} {users.lastName}
                </b>
                <p>@{users.username}</p>
              </span>
            </div></Link>
            {following.find(({ _id }) => _id === users._id) ? (
              <button
                className="follow-btn"
                onClick={() => {
                  checker();
                  opsDispatch({ type: "UNFOLLOW", _id: users._id });
                }}
              >
                unfollow
              </button>
            ) : (
              <button
                className="follow-btn"
                onClick={() => {
                  checker();
                  opsDispatch({ type: "FOLLOW", _id: users._id });
                }}
              >
                follow
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
