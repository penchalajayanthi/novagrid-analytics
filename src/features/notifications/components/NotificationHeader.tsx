import {
  FiBell,
  FiCheckCircle,
} from "react-icons/fi";

interface NotificationHeaderProps {
  total: number;
  unread: number;
  onMarkAllRead: () => void;
}

const NotificationHeader = ({
  total,
  unread,
  onMarkAllRead,
}: NotificationHeaderProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
            <FiBell
              size={28}
              className="text-blue-600"
            />
          </div>

          <div>

            <h1 className="text-3xl font-bold text-slate-800">
              Notifications
            </h1>

            <p className="mt-1 text-slate-500">
              Stay updated with projects,
              meetings and alerts.
            </p>

          </div>

        </div>

        <div className="flex items-center gap-4">

          <div className="rounded-xl bg-slate-100 px-5 py-3">

            <p className="text-xs uppercase text-slate-500">
              Total
            </p>

            <p className="text-xl font-bold">
              {total}
            </p>

          </div>

          <div className="rounded-xl bg-red-50 px-5 py-3">

            <p className="text-xs uppercase text-red-500">
              Unread
            </p>

            <p className="text-xl font-bold text-red-600">
              {unread}
            </p>

          </div>

          <button
            onClick={onMarkAllRead}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
          >
            <FiCheckCircle />

            Mark All Read

          </button>

        </div>

      </div>

    </div>
  );
};

export default NotificationHeader;