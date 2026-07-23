import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";

import type { CalendarEvent } from "../types/calendar.types";

interface MonthViewProps {
  currentDate: Date;
  events: CalendarEvent[];
  onSelectDate: (date: Date) => void;
}

const weekDays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

const getEventStyle = (type: string) => {
  switch (type) {
    case "Meeting":
      return "bg-blue-100 text-blue-700 border-l-4 border-blue-500";

    case "Deadline":
      return "bg-red-100 text-red-700 border-l-4 border-red-500";

    case "Presentation":
      return "bg-purple-100 text-purple-700 border-l-4 border-purple-500";

    case "Training":
      return "bg-green-100 text-green-700 border-l-4 border-green-500";

    case "Holiday":
      return "bg-yellow-100 text-yellow-700 border-l-4 border-yellow-500";

    default:
      return "bg-slate-100 text-slate-700 border-l-4 border-slate-500";
  }
};

const MonthView = ({
  currentDate,
  events,
  onSelectDate,
}: MonthViewProps) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = eachDayOfInterval({
    start: startDate,
    end: endDate,
  });

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Week Header */}

      <div className="grid grid-cols-7 bg-slate-100">

        {weekDays.map((day) => (
          <div
            key={day}
            className="border-r border-slate-200 py-4 text-center text-sm font-semibold text-slate-600 last:border-r-0"
          >
            {day}
          </div>
        ))}

      </div>

      {/* Calendar */}

      <div className="grid grid-cols-7">

        {days.map((day) => {
          const dayEvents = events.filter((event) =>
            isSameDay(
              new Date(event.start),
              day
            )
          );

          return (
            <div
              key={day.toString()}
              onClick={() => onSelectDate(day)}
              className={`min-h-[150px] border-r border-b border-slate-200 p-3 transition hover:bg-blue-50 ${
                !isSameMonth(day, currentDate)
                  ? "bg-slate-50"
                  : "bg-white"
              }`}
            >
              {/* Date */}

              <div className="mb-3 flex justify-between">

                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                    isSameDay(day, new Date())
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-700"
                  }`}
                >
                  {format(day, "d")}
                </span>

              </div>

              {/* Events */}

              <div className="space-y-2 overflow-y-auto">

                {dayEvents.slice(0, 3).map((event) => (
                  <div
                    key={event.id}
                    className={`rounded-md px-2 py-2 text-xs font-medium ${getEventStyle(
                      event.type
                    )}`}
                  >
                    <div className="truncate font-semibold">
                      {event.title}
                    </div>

                    <div className="mt-1 text-[10px] opacity-70">
                      {format(
                        new Date(event.start),
                        "hh:mm a"
                      )}
                    </div>
                  </div>
                ))}

                {dayEvents.length > 3 && (
                  <div className="text-center text-xs font-semibold text-blue-600">
                    +{dayEvents.length - 3} more events
                  </div>
                )}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default MonthView;