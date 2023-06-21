import "./Navigation.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { user, icon } from "../../img/index";
import { useAuth } from "../../context/AuthContext";

export default function NavigationPanel() {
  const { userDetail, isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("encodedToken");
  }

  return (
    <div className="navigation">
      <div className="list-items">
        <span>
          <img src={icon} width="70" height="70" alt="icon-toemedia" className="main-logo" />
        </span>
        <NavLink to="/" className="nav-bullets">
          <span>
            <img width="25" height="25" src="https://img.icons8.com/material-outlined/96/home--v2.png" alt="home--v2" />
            <p>Home</p>
          </span>
        </NavLink>
        <NavLink to="/explore" className="nav-bullets">
          <span>
            <img width="25" height="25" src="https://img.icons8.com/material-outlined/96/compass.png" alt="compass" />
            <p>Explore</p>
          </span>
        </NavLink>
        <NavLink to="/bookmark" className="nav-bullets">
          <span>
            <img width="25" height="25" src="https://img.icons8.com/material-outlined/96/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1" />
            <p>Bookmark</p>
          </span>
        </NavLink>
        { isLoggedIn ? <div onClick={logoutHandler} className="nav-bullets"><span><img width="25" height="25" src={user} alt="user-male-circle--v1" /><p>Logout</p></span></div> : <NavLink to={`/login`} className="nav-bullets">
          <span>
            <img width="25" height="25" src={user} alt="user-male-circle--v1" />
            <p>Login</p>
          </span>
        </NavLink>}
          <button onClick={()=>navigate("/new-post")}>Kick</button>
      </div>
      <div className="nav-user">
      <Link to={`/profile/${userDetail._id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}><div className="prof-user-left">
              <img
                className="profile-image-left"
                src={userDetail?.profileImage ? userDetail?.profileImage : "https://picsum.photos/id/1/200/300"}
                alt="profile"
              />
              <span>
                <b className="title-username">
                  {userDetail.firstName} {userDetail.lastName}
                </b>
                <p>@{userDetail.username}</p>
              </span>
            </div></Link>
      </div>
    </div>
  );
}

