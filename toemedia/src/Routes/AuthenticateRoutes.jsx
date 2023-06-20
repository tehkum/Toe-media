import { Route, Routes } from "react-router";
import LoginPage from "../Pages/Public/AuthPages/LoginPage";
import SignupPage from "../Pages/Public/AuthPages/SignupPage";

export default function AuthenticateRoutes() {
    return <Routes>
    <Route path="*" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
</Routes>
}