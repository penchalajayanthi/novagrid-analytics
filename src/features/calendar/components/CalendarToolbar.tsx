import {
  FiFilter,
} from "react-icons/fi";

import SearchInput from "../../../components/ui/SearchInput";
import FilterSelect from "../../../components/ui/FilterSelect";

interface CalendarToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  type: string;
  onTypeChange: (value: string) => void;

  onAddEvent: () => void;
}

const eventTypes = [
  "All",
  "Meeting",
  "Deadline",
  "Presentation",
  "Training",
  "Holiday",
];

const CalendarToolbar = ({
  search,
  onSearchChange,
  type,
  onTypeChange,
}: CalendarToolbarProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <h2 className="text-lg font-semibold text-slate-800">
            Filters
          </h2>

          <p className="text-sm text-slate-500">
            Quickly find meetings and events
          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center">

          <div className="relative w-full md:w-80">


            <div className="pl-7">

              <SearchInput
                value={search}
                onChange={onSearchChange}
                placeholder="Search events..."
              />

            </div>

          </div>

          <div className="w-full md:w-60">

            <FilterSelect
              value={type}
              onChange={onTypeChange}
              options={eventTypes}
              placeholder="Event Type"
            />

          </div>

          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

            <FiFilter
              className="text-slate-500"
            />

            <span className="text-sm font-medium text-slate-600">
              {type}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default CalendarToolbar;