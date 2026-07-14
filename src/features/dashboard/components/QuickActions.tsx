import { useNavigate } from "react-router-dom";
import {
  FiUserPlus,
  FiFolderPlus,
  FiUsers,
  FiFileText,
} from "react-icons/fi";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Employee",
      icon: FiUserPlus,
      path: "/employees",
    },
    {
      title: "Create Project",
      icon: FiFolderPlus,
      path: "/projects",
    },
    {
      title: "Add Customer",
      icon: FiUsers,
      path: "/customers",
    },
    {
      title: "Generate Report",
      icon: FiFileText,
      path: "/reports",
    },
  ];

  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className="flex flex-col items-center justify-center rounded-xl border p-5 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <Icon
                size={28}
                className="mb-3 text-blue-600"
              />

              <span className="text-sm font-medium">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;