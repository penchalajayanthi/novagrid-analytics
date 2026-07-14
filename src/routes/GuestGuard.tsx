import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface GuestGuardProps {
  children: React.ReactNode;
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const isAuthenticated = useAuthStore(
    (state) => state.isAuthenticated
  );

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default GuestGuard;