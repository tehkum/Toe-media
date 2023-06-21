import { useState } from "react";
import "./modal.css";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function EditModal({ detail, showEdit, setShow }) {
    const { updateClicked } = useAuth();
    const [userToEdit, setUserToEdit] = useState({
        bio: detail?.bio,
        profileUrl: detail?.profileUrl,
        profileImage: detail?.profileImage 
    });

    const eventHandler = (e) => {
        const { name, value } = e.target;
        setUserToEdit((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const imageHandler = async (e) => {
        try {
          const image = e.target.files[0];
          const data = new FormData();
          data.append("file", image);
          data.append("upload_preset", "Toemedia");
          data.append("cloud_name", "dbehxf29s");
          const res = await fetch(
            `https://api.cloudinary.com/v1_1/dbehxf29s/image/upload`,
            {
              method: "POST",
              body: data,
            }
          );
          const uri = await res.json();
          console.log(uri)
          setUserToEdit({ ...userToEdit, profileImage: uri.url });
        } catch (error) {
          console.log(error);
        }
      };

    const editHandler = async (userData) => {
        try {
            const res = await axios.post("/api/users/edit", {userData}, {
                headers: {
                  authorization: localStorage.getItem("encodedToken"),
                },
              })
              updateClicked();
              setShow(false)
              console.log(res)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="modal-outer" style={{display: showEdit ? 'flex' : "none"}}>
            <div className="modal-inner">
                <div style={{display: "flex", alignItems: "center"}}>
                <img
                    className="profile-image"
                    src={detail?.profileImage ? detail.profileImage :"https://picsum.photos/id/1/200/300"}
                    alt="profile"
                />
                <input type="file" name="profileImage" onChange={imageHandler}/>
                </div>
                <p className="prof-username">
                    <b>userame: </b>
                    {detail?.username}
                </p>
                <p className="prof-name">
                    <b>name: </b>
                    {`${detail?.firstName} ${detail?.lastName}`}
                </p>
                <label htmlFor="bio">
                    <div>Bio</div>
                    <input
                        type="text"
                        name="bio"
                        placeholder="Add bio"
                        defaultValue={userToEdit?.bio}
                        onChange={eventHandler}
                    />
                </label>
                <label htmlFor="profileUrl">
                    <div>Profile URL</div>
                    <input
                        type="text"
                        name="profileUrl"
                        placeholder="Add profile link"
                        defaultValue={userToEdit?.profileUrl}
                        onChange={eventHandler}
                    />
                </label>
                <div className="edit-prof-buttons">
                    <button className="btn-prof-edit" onClick={()=>editHandler(userToEdit)}>Edit</button>
                    <button className="btn-prof-cancel" onClick={()=>setShow(false)}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
