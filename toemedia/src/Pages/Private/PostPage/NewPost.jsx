import { useContext } from "react";
import "../../Public/HomePage/Home.css";
import { usePost } from "../../../context/PostContext";
import axios from "axios";

export default function NewPost(){
    const { newPost, setUserPost, userPost } = useContext(usePost);

    const eventHandler = (event) => {
        setUserPost({...userPost, content: event.target.value})
      }

      const imageHandler = async (e) => {
        try {
          const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", "Toemedia");
        data.append("cloud_name", "dbehxf29s");
        const res = await axios.post("https://api.cloudinary.com/v1_1/dbehxf29s/image/upload", data);
        console.log(res)
        } catch (error) {
          console.log(error)
        }
      }

//       const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dwebygldw/image/upload";
// const CLOUDINARY_UPLOAD_PRESET = "ru8cort4";

// export const uploadImage = (image) => {
//   const file = image;
//   const formData = new FormData();

//   formData.append("file", file);
//   formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
//   formData.append("folder", "sapphire");

//   return fetch(CLOUDINARY_URL, {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => response.json())
//     .then((data) => data)
//     .catch((err) => console.error(err));
// };



    return <div className="home-page-head">
    <div className="home-page-title">
        <h2>Edit Post</h2>
    </div>
    <div className="home-page-content">
    <div className="new-post-button">
            <div className="new-post-box">
              <img
                className="profile-image"
                src="https://picsum.photos/id/1/200/300"
                alt="profile"
                width="50"
                height="50"
                style={{alignSelf: "flex-start"}}
              />
              <textarea
                className="new-post"
                contenteditable="true"
                style={{height: "400px", border: "1px solid #666666"}}
                placeholder="Kick something out of your mind....."
                onChange={eventHandler}
              />
              <input type="file" onChange={imageHandler} />
            </div>
            <button type="submit" onClick={()=>newPost(userPost)}>Post</button>
          </div>
    </div>
</div>
}