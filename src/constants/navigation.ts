import {
  FiGrid,
  FiUsers,
  FiFolder,
  FiBriefcase,
  FiBarChart2,
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
    label: "Settings",
    path: "/settings",
    icon: FiSettings,
  },
];