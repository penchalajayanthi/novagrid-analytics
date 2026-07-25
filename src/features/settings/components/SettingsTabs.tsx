import {
  FiUser,
  FiLock,
  FiBell,
  FiMonitor,
  FiGlobe,
} from "react-icons/fi";

export type SettingsTab =
  | "profile"
  | "security"
  | "notifications"
  | "appearance"
  | "language";

interface Props {
  active: SettingsTab;
  onChange: (tab: SettingsTab) => void;
}

const tabs = [
  {
    id: "profile",
    label: "Profile",
    icon: FiUser,
  },
  {
    id: "security",
    label: "Security",
    icon: FiLock,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: FiBell,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: FiMonitor,
  },
  {
    id: "language",
    label: "Language",
    icon: FiGlobe,
  },
] as const;

const SettingsTabs = ({
  active,
  onChange,
}: Props) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

      <div className="flex flex-wrap gap-2">

        {tabs.map((tab) => {

          const Icon = tab.icon;

          return (

            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition ${
                active === tab.id
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >

              <Icon size={18} />

              {tab.label}

            </button>

          );

        })}

      </div>

    </div>
  );
};

export default SettingsTabs;