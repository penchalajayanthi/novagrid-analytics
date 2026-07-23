export type NotificationType =
  | "Project"
  | "Task"
  | "Meeting"
  | "System"
  | "Alert";

export type NotificationPriority =
  | "High"
  | "Medium"
  | "Low";


export interface Notification {
  id: string;

  title: string;

  message: string;

  type: NotificationType;

  priority: NotificationPriority;

  isRead: boolean;

  createdAt: string;

  user?: {
    name: string;
    avatar: string;
  };
}