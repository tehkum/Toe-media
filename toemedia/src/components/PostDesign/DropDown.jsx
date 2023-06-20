import { useContext } from "react";
import { usePost } from "../../context/PostContext";
import "./DropDown.css";
import { useAuth } from "../../context/AuthContext";
import { useOps } from "../../context/OpsContext";
import { useUsers } from "../../context/UserContext";
import { useNavigate } from "react-router";

export default function DropDown({ showDropBox, _id, setDropBox, userId }) {
  const { deletePost } = useContext(usePost);
  const {  following, checker } = useContext(useUsers);
  const { userDetail } = useAuth();
  const { opsDispatch } = useOps();
  const navigate = useNavigate();

  return (
    <div
      className="dropdown-box"
      style={{ display: showDropBox ? "block" : "none" }}
    >
      {userDetail._id === userId ? (
        <>
          <div className="dropdown-content" onClick={()=> navigate(`/edit/${_id}`)}>Edit Post</div>
          <div
            className="dropdown-content"
            onClick={() => {
              deletePost(_id);
              setDropBox(false);
            }}
          >
            Delete
          </div>
        </>
      ) : (
        <>
              {following?.find(person => person._id === userId) ? (
                <div
                className="dropdown-content"
                  onClick={() => {
                    checker();
                    opsDispatch({ type: "UNFOLLOW", _id: userId });
                  }}
                >
                  unfollow
                </div>
              ) : 
                <div
                className="dropdown-content"
                  onClick={() => {
                    checker();
                    opsDispatch({ type: "FOLLOW", _id: userId });
                  }}
                >
                  follow
                </div>}
              
        </>
      )}
    </div>
  );
}
