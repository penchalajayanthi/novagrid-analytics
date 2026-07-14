import { useEffect, useRef, useState } from "react";
import {
  FiBell,
  FiSearch,
  FiLogOut,
  FiUserPlus,
  FiFolder,
  FiFileText,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { useAuthStore } from "../../store/authStore";
import { notifications } from "../../data/notifications";

const Navbar = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const [showNotifications, setShowNotifications] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const getNotificationIcon = (title: string) => {
    if (title.includes("employee")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <FiUserPlus size={18} />
        </div>
      );
    }

    if (title.includes("Dashboard")) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          <FiFolder size={18} />
        </div>
      );
    }

    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
        <FiFileText size={18} />
      </div>
    );
  };

  return (
    <header className="fixed left-64 right-0 top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Welcome back,
          <span className="ml-2 text-blue-600">{user?.name}</span> 👋
        </h1>

        <p className="text-sm text-gray-500">
          Here's what's happening today.
        </p>
      </div>

      {/* Right */}
      <div className="relative flex items-center gap-6">
        {/* Search */}
        <div className="flex items-center rounded-lg border border-gray-200 px-3 py-2">
          <FiSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 outline-none"
          />
        </div>

        {/* Notification */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() =>
              setShowNotifications(!showNotifications)
            }
            className="relative rounded-full p-2 transition hover:bg-gray-100"
          >
            <FiBell size={22} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-3 w-96 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b bg-gray-50 px-5 py-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  🔔 Notifications
                </h3>

                <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Mark all
                </button>
              </div>

              {/* Notifications */}
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    className="flex cursor-pointer items-start gap-4 border-b p-4 transition duration-200 hover:bg-blue-50"
                  >
                    {getNotificationIcon(item.title)}

                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-gray-800">
                          {item.title}
                        </h4>

                        <div className="mt-2 h-2 w-2 rounded-full bg-blue-500"></div>
                      </div>

                      <p className="mt-1 text-sm text-gray-500">
                        {item.description}
                      </p>

                      <p className="mt-2 text-xs text-gray-400">
                        {item.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-3 text-center">
                <button className="font-medium text-blue-600 transition hover:text-blue-700">
                  View all notifications →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-semibold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <p className="font-medium">{user?.name}</p>

            <p className="text-xs text-gray-500">
              {user?.role}
            </p>
          </div>
        </div>

        {/* Logout */}
        <Tooltip title="Logout" arrow>
          <button
            onClick={handleLogout}
            className="rounded-full p-2 text-gray-600 transition hover:bg-red-100 hover:text-red-600"
          >
            <FiLogOut size={22} />
          </button>
        </Tooltip>
      </div>
    </header>
  );
};

export default Navbar;