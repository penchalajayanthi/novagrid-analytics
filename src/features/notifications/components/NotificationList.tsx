import NotificationCard from "./NotificationCard";

import type {
  Notification,
} from "../types/notification.types";

interface Props {
  notifications: Notification[];

  onToggleRead: (id: string) => void;

  loading: boolean;
}

const NotificationList = ({
  notifications,
  onToggleRead,
  loading,
}: Props) => {
  if (loading) {
    return (
      <div className="space-y-5">

        {Array.from({
          length: 5,
        }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-2xl bg-slate-200"
          />
        ))}

      </div>
    );
  }

  if (
    notifications.length === 0
  ) {
    return (
      <div className="rounded-2xl border bg-white p-16 text-center shadow-sm">

        <h2 className="text-xl font-semibold">
          No Notifications
        </h2>

        <p className="mt-2 text-slate-500">
          You're all caught up 🎉
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-5">

      {notifications.map(
        (notification) => (
          <NotificationCard
            key={notification.id}
            notification={
              notification
            }
            onToggleRead={
              onToggleRead
            }
          />
        )
      )}

    </div>
  );
};

export default NotificationList;