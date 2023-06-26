import { useContext, useState } from "react";
import "./SearchBar.css";
import { useUsers } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { userData } = useContext(useUsers);
  const [searchData, setSearchData] = useState("");
  const [keywords, setKeywords] = useState("");

  const eventHandler = (e) => {
    setKeywords(e.target.value);
    setSearchData(
      userData?.filter(
        (data) =>
          data?.firstName
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data?.lastName
            ?.toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          data?.userame?.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const showBox = () => {
    if (keywords.length) {
      if(searchData.length) {
      return (
        <div className="search-items">
          {searchData?.map((item) => (
            <Link style={{color: "white", textDecoration:"none"}} to={`/profile/${item._id}`}><p>{item?.username}</p></Link>
          ))}
        </div>
      );} else {
        return<div className="search-items"><p>No user Found...</p></div>
      }
    }
  };

  return (
    <label htmlFor="search-id" className="search-id-label">
      <input
        type="search"
        id="search-id"
        placeholder="Search"
        onChange={eventHandler}
      />
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios/100/search--v1.png"
        alt="search--v1"
      />

      {showBox()}
    </label>
  );
}
