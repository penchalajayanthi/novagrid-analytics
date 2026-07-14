import { FiUserPlus, FiFolderPlus, FiUsers, } from "react-icons/fi";


interface Activity {
  id: number;
  title: string;
  description: string;
}

interface Props {
  data: Activity[];
}
const getIcon = (title: string) => {
  if (title.includes("employee")) {
    return <FiUserPlus className="text-green-600" size={20} />;
  }

  if (title.includes("Project")) {
    return <FiFolderPlus className="text-blue-600" size={20} />;
  }

  return <FiUsers className="text-purple-600" size={20} />;
};
const RecentActivity = ({ data }: Props) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {data.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 border-b pb-4 last:border-b-0"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              {getIcon(activity.title)}
            </div>

            <div>
              <h3 className="font-medium text-gray-800">
                {activity.title}
              </h3>

              <p className="text-sm text-gray-500">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;