import { Outlet } from "react-router-dom";
import AuthIllustration from "../features/auth/components/AuthIllustration";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Side */}
      <AuthIllustration />

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gray-50 p-6">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;