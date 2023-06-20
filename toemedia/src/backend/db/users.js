import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

// export const users = [
//   {
//     _id: uuid(),
//     firstName: "Adarsh",
//     lastName: "Balika",
//     username: "adarshbalika",
//     password: "adarshBalika123",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     firstName: "Tehkum",
//     lastName: "Kanchwala",
//     username: "tehkumk",
//     password: "tehkum123",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   }
// ];



export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    bookmarks: [],
    username: "adarshbalika",
    password: "adarshBalika123",
    bio: "Hey this is adarsh",
    profileUrl: "https://tehkum.netlify.app",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tehkum",
    lastName: "Kanchwala",
    username: "tehkumk",
    bookmarks: [],
    bio: "Hey this is tehkum",
    profileUrl: "https://tehkum.netlify.app",
    password: "tehkum123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "John",
    lastName: "Doe",
    bookmarks: [],
    bio: "Hey this is john",
    profileUrl: "https://tehkum.netlify.app",
    username: "johndoe",
    password: "johnDoe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Jane",
    bookmarks: [],
    lastName: "Smith",
    username: "janesmith",
    bio: "Hey this is jane",
    profileUrl: "https://tehkum.netlify.app",
    password: "janeSmith123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // Add more user objects here
  {
    _id: uuid(),
    firstName: "Michael",
    lastName: "Johnson",
    bookmarks: [],
    bio: "Hey this is michael",
    profileUrl: "https://tehkum.netlify.app",
    username: "michaelj",
    password: "michaelJohnson123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  // {
  //   _id: uuid(),
  //   firstName: "Emma",
  //   lastName: "Davis",
  //   username: "emmad",
  //   password: "emmaDavis123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Alex",
  //   lastName: "Wilson",
  //   username: "alexw",
  //   password: "alexWilson123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Sophia",
  //   lastName: "Brown",
  //   username: "sophiab",
  //   password: "sophiaBrown123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   firstName: "David",
  //   lastName: "Taylor",
  //   username: "davidt",
  //   password: "davidTaylor123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   firstName: "Olivia",
  //   lastName: "Lee",
  //   username: "olivial",
  //   password: "oliviaLee123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
];

