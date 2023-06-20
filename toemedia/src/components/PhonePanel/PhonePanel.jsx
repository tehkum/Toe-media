import { NavLink } from "react-router-dom";
import "./Phonepanel.css";
import { user } from "../../img/index";

export default function PhonePanel(){
    return <div className="bottom-panel">
        <NavLink to="/" className="nav-bullets">
          <span>
            <img width="30" height="30" src="https://img.icons8.com/material-outlined/96/home--v2.png" alt="home--v2" />
          </span>
        </NavLink>
        <NavLink to="/explore" className="nav-bullets">
          <span>
            <img width="30" height="30" src="https://img.icons8.com/material-outlined/96/compass.png" alt="compass" />
          </span>
        </NavLink>
        <NavLink to="/bookmark" className="nav-bullets">
          <span>
            <img width="30" height="30" src="https://img.icons8.com/material-outlined/96/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1" />
          </span>
        </NavLink>
        <NavLink to="/profile" className="nav-bullets">
          <span>
            <img width="30" height="30" src={user} alt="user-male-circle--v1" />
          </span>
        </NavLink>
    </div>
}