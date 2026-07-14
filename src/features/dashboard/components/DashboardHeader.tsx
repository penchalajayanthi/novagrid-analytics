import { useAuthStore } from "../../../store/authStore";

const DashboardHeader = () => {
  const user = useAuthStore((state) => state.user);

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white shadow-lg">
      <div>
        <h1 className="text-2xl font-bold">
          {greeting}, {user?.name}! 👋
        </h1>

        <p className="mt-1 text-blue-100">
          Welcome back to NovaGrid Analytics.
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-blue-100">Today</p>

        <p className="mt-1 text-xl font-semibold">
          {today}
        </p>
      </div>
    </div>
  );
};

export default DashboardHeader;