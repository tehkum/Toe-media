import { Navigate, useLocation } from "react-router";
import { useAuth } from "../../context/AuthContext";


export default function AuthRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return (isLoggedIn) ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}