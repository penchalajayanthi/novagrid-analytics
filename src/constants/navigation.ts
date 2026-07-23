import {
  FiGrid,
  FiUsers,
  FiFolder,
  FiBriefcase,
  FiBarChart2,
  FiCalendar,
  FiBell,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

export const navigation = [
  {
    label: "Dashboard",
    path: "/",
    icon: FiGrid,
  },
  {
    label: "Employees",
    path: "/employees",
    icon: FiUsers,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: FiFolder,
  },
  {
    label: "Customers",
    path: "/customers",
    icon: FiBriefcase,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: FiBarChart2,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: FiCalendar,
  },
  {
    label: "Notifications",
    path: "/notifications",
    icon: FiBell,
  },
  {
    label: "Team Collaboration",
    path: "/team",
    icon: FiMessageSquare,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];