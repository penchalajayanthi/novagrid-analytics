import {
  FiBell,
  FiAlertCircle,
  FiCheckCircle,
  FiFolder,
  FiClipboard,
  FiUsers,
} from "react-icons/fi";

import { formatDistanceToNow } from "date-fns";

import type {
  Notification,
} from "../types/notification.types";

interface Props {
  notification: Notification;

  onToggleRead: (id: string) => void;
}

const getIcon = (type: string) => {
  switch (type) {
    case "Project":
      return <FiFolder />;

    case "Task":
      return <FiClipboard />;

    case "Meeting":
      return <FiUsers />;

    case "Alert":
      return <FiAlertCircle />;

    case "System":
      return <FiCheckCircle />;

    default:
      return <FiBell />;
  }
};

const getPriorityColor = (
  priority: string
) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-700";

    case "Medium":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-green-100 text-green-700";
  }
};

const NotificationCard = ({
  notification,
  onToggleRead,
}: Props) => {
  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
        notification.isRead
          ? "bg-white"
          : "border-blue-300 bg-blue-50"
      }`}
    >
      <div className="flex gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
          {getIcon(notification.type)}
        </div>

        <div className="flex-1">

          <div className="flex items-start justify-between">

            <div>

              <h3 className="text-lg font-semibold">
                {notification.title}
              </h3>

              <p className="mt-1 text-slate-500">
                {notification.message}
              </p>

            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${getPriorityColor(
                notification.priority
              )}`}
            >
              {notification.priority}
            </span>

          </div>

          {notification.user && (
            <div className="mt-4 flex items-center gap-3">

              <img
                src={notification.user.avatar}
                alt={notification.user.name}
                className="h-10 w-10 rounded-full"
              />

              <span className="font-medium">
                {notification.user.name}
              </span>

            </div>
          )}

          <div className="mt-5 flex items-center justify-between">

            <span className="text-sm text-slate-500">
              {formatDistanceToNow(
                new Date(notification.createdAt),
                {
                  addSuffix: true,
                }
              )}
            </span>

            <button
              onClick={() =>
                onToggleRead(
                  notification.id
                )
              }
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              {notification.isRead
                ? "Mark Unread"
                : "Mark Read"}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default NotificationCard;