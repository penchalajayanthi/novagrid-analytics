import { useMemo, useState } from "react";

import NotificationHeader from "../components/NotificationHeader";
import NotificationFilters from "../components/NotificationFilters";
import NotificationList from "../components/NotificationList";

import { useNotifications } from "../hooks/useNotifications";

const Notifications = () => {
  const {
    notifications,
    loading,
  } = useNotifications();

  const [filter, setFilter] =
    useState("All");

  const [notificationList, setNotificationList] =
    useState(notifications);

  // Sync local state when hook data changes
  useMemo(() => {
    setNotificationList(notifications);
  }, [notifications]);

  const filteredNotifications =
    useMemo(() => {
      if (filter === "All")
        return notificationList;

      if (filter === "Unread") {
        return notificationList.filter(
          (item) => !item.isRead
        );
      }

      return notificationList.filter(
        (item) =>
          item.type === filter
      );
    }, [
      notificationList,
      filter,
    ]);

  const unreadCount =
    notificationList.filter(
      (item) => !item.isRead
    ).length;

  const handleToggleRead = (
    id: string
  ) => {
    setNotificationList((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              isRead:
                !item.isRead,
            }
          : item
      )
    );
  };

  const handleMarkAllRead =
    () => {
      setNotificationList((prev) =>
        prev.map((item) => ({
          ...item,
          isRead: true,
        }))
      );
    };

  return (
    <div className="space-y-8">

      <NotificationHeader
        total={
          notificationList.length
        }
        unread={unreadCount}
        onMarkAllRead={
          handleMarkAllRead
        }
      />

      <NotificationFilters
        filter={filter}
        onFilterChange={
          setFilter
        }
      />

      <NotificationList
        notifications={
          filteredNotifications
        }
        loading={loading}
        onToggleRead={
          handleToggleRead
        }
      />

    </div>
  );
};

export default Notifications;