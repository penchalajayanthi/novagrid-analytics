import {
  FiCalendar,
  FiUsers,
  FiFlag,
  FiBell,
} from "react-icons/fi";

import type { CalendarEvent } from "../types/calendar.types";

interface Props {
  events: CalendarEvent[];
}

const CalendarStats = ({
  events,
}: Props) => {
  const meetings = events.filter(
    (event) => event.type === "Meeting"
  ).length;

  const deadlines = events.filter(
    (event) => event.type === "Deadline"
  ).length;

  const holidays = events.filter(
    (event) => event.type === "Holiday"
  ).length;

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Upcoming Events
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-800">
              {events.length}
            </h2>

          </div>

          <div className="rounded-xl bg-blue-100 p-4 text-blue-600">

            <FiCalendar size={28} />

          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Meetings
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-800">
              {meetings}
            </h2>

          </div>

          <div className="rounded-xl bg-green-100 p-4 text-green-600">

            <FiUsers size={28} />

          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Deadlines
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-800">
              {deadlines}
            </h2>

          </div>

          <div className="rounded-xl bg-red-100 p-4 text-red-600">

            <FiFlag size={28} />

          </div>

        </div>

      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Holidays
            </p>

            <h2 className="mt-2 text-4xl font-bold text-slate-800">
              {holidays}
            </h2>

          </div>

          <div className="rounded-xl bg-amber-100 p-4 text-amber-600">

            <FiBell size={28} />

          </div>

        </div>

      </div>

    </div>
  );
};

export default CalendarStats;