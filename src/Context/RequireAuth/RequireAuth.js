import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/Auth-Context";

function RequierAuth({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default RequierAuth;
