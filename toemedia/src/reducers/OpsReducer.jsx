import axios from "axios";

export const OpsReducer = (state, action) => {
    const followUser = async (userId) => {
        try {
            const res =  await axios.post(`/api/users/follow/${userId}`,{
                headers: { 
                  authorization : localStorage.getItem("encodedToken")
                }
              })
              console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    switch(action.type) {
        case "FOLLOW": followUser(action._id);
        break;

        case "UNFOLLOW": return {...state}

        case "LIKE": return {...state}

        case "DISLIKE": return {...state}

        case "BOOKMARK": return {...state}

        case "REMOVE_BOOKMARK": return {...state}

        case "COMMENT": return {...state}

        default : return{...state}
    }
};