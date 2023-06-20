import { useContext } from "react";
import { usePost } from "../../../";
import "../HomePage/Home.css";
import PostBox from "../../../components/PostDesign/PostBox";

export default function ExplorePage() {
  const { postData } = useContext(usePost);

  return (
    <>
      <div className="home-page-head">
        <div className="home-page-title">
          <h2>Explore</h2>
        </div>
        <div className="home-page-content">
          {postData?.map((item) => {
            return <><PostBox item={item} /><hr/></>;
          })}
        </div>
      </div>
    </>
  );
}
