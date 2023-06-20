import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

// export const posts = [
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "adarshbalika",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
//   {
//     _id: uuid(),
//     content:
//       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
//     likes: {
//       likeCount: 0,
//       likedBy: [],
//       dislikedBy: [],
//     },
//     username: "tehkumk",
//     createdAt: formatDate(),
//     updatedAt: formatDate(),
//   },
// ];

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tehkumk",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Nulla facilisi. Fusce venenatis mi et mauris aliquet, sit amet iaculis odio congue.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "janesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Duis a nisi in mauris efficitur suscipit nec vel risus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "janesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Pellentesque a velit at nulla tempus finibus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "michaelj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Vestibulum elementum dolor vitae mi suscipit, ac euismod sem rhoncus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Quisque sollicitudin purus non lectus ullamcorper scelerisque.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "tehkumk",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Etiam fringilla dolor id nunc porttitor, at scelerisque ex faucibus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Fusce luctus est at nibh rutrum, non dictum elit feugiat.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "janesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Suspendisse euismod ex id felis bibendum, eu posuere tortor facilisis.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "michaelj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Pellentesque a velit at nulla tempus finibus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "janesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Vestibulum elementum dolor vitae mi suscipit, ac euismod sem rhoncus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "tehkumk",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Quisque sollicitudin purus non lectus ullamcorper scelerisque.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Etiam fringilla dolor id nunc porttitor, at scelerisque ex faucibus.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "janesmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Fusce luctus est at nibh rutrum, non dictum elit feugiat.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "michaelj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Suspendisse euismod ex id felis bibendum, eu posuere tortor facilisis.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "johndoe",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: "michaelj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'johndoe',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Nulla facilisi. Fusce venenatis mi et mauris aliquet, sit amet iaculis odio congue.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'michaelj',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Duis a nisi in mauris efficitur suscipit nec vel risus.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'tehkumk',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Pellentesque a velit at nulla tempus finibus.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'michaelj',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Vestibulum elementum dolor vitae mi suscipit, ac euismod sem rhoncus.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'janesmith',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Quisque sollicitudin purus non lectus ullamcorper scelerisque.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'michaelj',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Etiam fringilla dolor id nunc porttitor, at scelerisque ex faucibus.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'adarshbalika',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: 'Fusce luctus est at nibh rutrum, non dictum elit feugiat.',
    likes: { likeCount: 0, likedBy: [], dislikedBy: [] },
    username: 'michaelj',
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];


