import FilterSelect from "../../../components/ui/FilterSelect";

interface NotificationFiltersProps {
  filter: string;
  onFilterChange: (
    value: string
  ) => void;
}

const options = [
  "All",
  "Unread",
  "Project",
  "Task",
  "Meeting",
  "System",
  "Alert",
];

const NotificationFilters = ({
  filter,
  onFilterChange,
}: NotificationFiltersProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-lg font-semibold text-slate-800">
            Filter Notifications
          </h2>

          <p className="text-sm text-slate-500">
            Choose which notifications to display.
          </p>

        </div>

        <div className="w-64">

          <FilterSelect
            value={filter}
            onChange={onFilterChange}
            options={options}
            placeholder="Filter"
          />

        </div>

      </div>

    </div>
  );
};

export default NotificationFilters;