import { useState } from "react";
import "./modal.css";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

export default function EditModal({ detail, showEdit, setShow }) {
    const { updateClicked } = useAuth();
    const [userToEdit, setUserToEdit] = useState({
        bio: detail?.bio,
        profileUrl: detail?.profileUrl
    });

    const eventHandler = (e) => {
        const { name, value } = e.target;
        setUserToEdit((prevData) => ({
            ...prevData,
            [name]: value,
        }));
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
                <img
                    className="profile-image"
                    src="https://picsum.photos/id/1/200/300"
                    alt="profile"
                />
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
