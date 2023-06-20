import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Public/HomePage/Homepage";
import BookmarkPage from "../Pages/Private/Bookmark/Bookmark";
import ProfilePage from "../Pages/Private/ProfilePage/Profile";
import ExplorePage from "../Pages/Public/ExplorePage/ExplorePage";
import PostPage from "../Pages/Private/PostPage/PostPage";
import Mockman from "mockman-js";
import EditPost from "../Pages/Private/PostPage/EditPost";
import NewPost from "../Pages/Private/PostPage/NewPost";
import AuthRoute from "../components/AuthRoutes/AuthRoute";

export default function RoutePages(){
    return <Routes>
        <Route path="/" element={<AuthRoute><HomePage /></AuthRoute>} />
        <Route path="/explore" element={<AuthRoute><ExplorePage /></AuthRoute>} />
        <Route path="/bookmark" element={<AuthRoute><BookmarkPage /></AuthRoute>} />
        <Route path="/profile/:userId" element={<AuthRoute><ProfilePage /></AuthRoute>} />
        <Route path="/post/:postId" element={<AuthRoute><PostPage /></AuthRoute>}/>
        <Route path='/mockman' element={<Mockman />} />
        <Route path="/edit/:postId" element={<AuthRoute><EditPost/></AuthRoute>} />
        <Route path="/new-post" element={<AuthRoute><NewPost /></AuthRoute>}/>
    </Routes>
}