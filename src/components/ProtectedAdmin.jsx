import { Navigate } from "react-router-dom";

export default function ProtectedAdmin({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // PERMITE ADMIN Y VENDEDOR
  if (user.rol !== "ADMIN" && user.rol !== "VENDEDOR") {
    return <Navigate to="/" replace />;
  }

  return children;
}
