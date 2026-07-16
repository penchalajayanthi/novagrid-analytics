interface Props {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  "Overview",
  "Performance",
  "Attendance",
  "Salary",
  "Leave",
];

const ProfileTabs = ({
  activeTab,
  onChange,
}: Props) => {
  return (
    <div className="rounded-xl bg-white p-2 shadow">
      <div className="flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`rounded-lg px-5 py-2 font-medium transition
              ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 hover:text-blue-600"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileTabs;