import { useContext } from "react"
import "../../Public/HomePage/Home.css"
import PostBox from "../../../components/PostDesign/PostBox";
import { usePost } from "../../../context/PostContext";
import { useBookmark } from "../../../context/BookmarkContext";

export default function BookmarkPage(){
    const { postData } = useContext(usePost);
    const { bookmarkData } = useBookmark();


    return <>
    <div className="home-page-head">
        <div className="home-page-title">
            <h2>Bookmark</h2>
        </div>
        <div className="home-page-content">
        { postData?.filter(({_id})=> bookmarkData?.find(id=> id===_id)).map(item=>{
                    return <><PostBox item={item} /><hr/></>
                })}
        </div>
    </div>
</>
}