// import axios from "axios"

// export function ProductReducer(state, action) {

//     async function callProduct(){
//         try {
//             const res = await axios.get("/api/posts");
//             return res;
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     switch(action.type) {
//         case "GET_PRODUCT": callProduct().then(res => {
//             const postList = res.data;
            
//             return {...state, productData: postList};
//         });

//         break

//         case "SET_PRODUCT": callProduct().then(res => {})


//         default: return {...state}
//     }
// }

import axios from "axios";

export async function ProductReducer(state, action) {

    async function callProduct(){
        try {
            const res = await axios.get("/api/posts");
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    switch(action.type) {
        case "GET_PRODUCT":
            try {
                const res = await callProduct();
                const postList = res.data;
                // Update state with new data
                return {...state, productData: postList};
            } catch (error) {
                console.log(error);
                // Handle error if needed
                return state; // Return the current state
            }


        default:
            return state;
    }
}
