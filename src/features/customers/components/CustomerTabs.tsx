interface Props {
  activeTab: string;
  onChange: (tab: string) => void;
}

const tabs = [
  "Overview",
  "Purchase History",
  "Support",
  "Tags",
  "Notes",
];

const CustomerTabs = ({
  activeTab,
  onChange,
}: Props) => {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

      <div className="flex gap-2">

        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

    </div>
  );
};

export default CustomerTabs;