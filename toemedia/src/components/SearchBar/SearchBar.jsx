import { useContext, useState } from "react";
import "./SearchBar.css"
import { useUsers } from "../../context/UserContext";

export default function SearchBar() {
  const { userData } = useContext(useUsers);
  const [ searchData, setSearchData ] = useState("")

  const eventHandler = (e) => {
    setSearchData(userData?.filter(data=> data?.firstName?.toLowerCase().includes(e.target.value.toLowerCase()) ||  data?.lastName?.toLowerCase().includes(e.target.value.toLowerCase()) ||  data?.userame?.toLowerCase().includes(e.target.value.toLowerCase()) ))
  }

  return (
    <label htmlFor="search-id" className="search-id-label">
      <input type="search" id="search-id" placeholder="Search" onChange={eventHandler}/>
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/ios/100/search--v1.png"
        alt="search--v1"
      />
    {searchData && searchData?.map(item=><p>{item?.username}</p>)}
    </label>
  );
}
