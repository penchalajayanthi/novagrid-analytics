import {
  addDays,
  format,
  isSameDay,
  isToday,
  startOfWeek,
} from "date-fns";

import {
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import type { CalendarEvent } from "../types/calendar.types";

interface WeekViewProps {
  currentDate: Date;
  events: CalendarEvent[];
}

const getBorderColor = (type: string) => {
  switch (type) {
    case "Meeting":
      return "border-blue-500";

    case "Deadline":
      return "border-red-500";

    case "Presentation":
      return "border-purple-500";

    case "Training":
      return "border-green-500";

    case "Holiday":
      return "border-yellow-500";

    default:
      return "border-slate-400";
  }
};

const getBadgeColor = (type: string) => {
  switch (type) {
    case "Meeting":
      return "bg-blue-100 text-blue-700";

    case "Deadline":
      return "bg-red-100 text-red-700";

    case "Presentation":
      return "bg-purple-100 text-purple-700";

    case "Training":
      return "bg-green-100 text-green-700";

    case "Holiday":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
};

const WeekView = ({
  currentDate,
  events,
}: WeekViewProps) => {
  const weekStart = startOfWeek(currentDate);

  const weekDays = Array.from(
    { length: 7 },
    (_, index) => addDays(weekStart, index)
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Week Header */}

      <div className="grid grid-cols-7 border-b bg-slate-50">

        {weekDays.map((day) => (
          <div
            key={day.toString()}
            className="border-r border-slate-200 p-4 text-center last:border-r-0"
          >
            <p className="text-sm font-medium text-slate-500">
              {format(day, "EEE")}
            </p>

            <div
              className={`mx-auto mt-2 flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                isToday(day)
                  ? "bg-blue-600 text-white"
                  : "text-slate-700"
              }`}
            >
              {format(day, "d")}
            </div>
          </div>
        ))}

      </div>

      {/* Week Body */}

      <div className="grid grid-cols-7">

        {weekDays.map((day) => {
          const dayEvents = events.filter((event) =>
            isSameDay(
              new Date(event.start),
              day
            )
          );

          return (
            <div
              key={day.toString()}
              className="min-h-[520px] border-r border-slate-200 bg-white p-3 last:border-r-0"
            >
              <div className="space-y-3">

                {dayEvents.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-300 py-8 text-center text-sm text-slate-400">
                    No Events
                  </div>
                ) : (
                  dayEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`rounded-xl border-l-4 bg-slate-50 p-3 shadow-sm transition hover:shadow-md ${getBorderColor(
                        event.type
                      )}`}
                    >
                      <div className="mb-2 flex items-start justify-between">

                        <h3 className="text-sm font-semibold text-slate-800">
                          {event.title}
                        </h3>

                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${getBadgeColor(
                            event.type
                          )}`}
                        >
                          {event.type}
                        </span>

                      </div>

                      <div className="space-y-2 text-xs text-slate-600">

                        <div className="flex items-center gap-2">
                          <FiClock className="text-blue-500" />

                          {format(
                            new Date(event.start),
                            "hh:mm a"
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <FiMapPin className="text-red-500" />

                          {event.location}
                        </div>

                      </div>
                    </div>
                  ))
                )}

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
};

export default WeekView;