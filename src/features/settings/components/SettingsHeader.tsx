import { FiSettings } from "react-icons/fi";

const SettingsHeader = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

          <FiSettings
            size={28}
            className="text-blue-600"
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Settings
          </h1>

          <p className="mt-1 text-slate-500">
            Manage your account preferences, notifications,
            security and application settings.
          </p>

        </div>

      </div>

    </div>
  );
};

export default SettingsHeader;