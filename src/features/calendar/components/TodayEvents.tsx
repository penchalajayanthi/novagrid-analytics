import {
  isToday,
  format,
} from "date-fns";

import {
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import type {
  CalendarEvent,
} from "../types/calendar.types";

interface TodayEventsProps {
  events: CalendarEvent[];
}

const getBadgeColor = (
  type: string
) => {
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

const TodayEvents = ({
  events,
}: TodayEventsProps) => {
  const todayEvents = events.filter(
    (event) =>
      isToday(new Date(event.start))
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 p-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-100 p-3">

            <FiCalendar
              className="text-blue-600"
              size={20}
            />

          </div>

          <div>

            <h2 className="text-lg font-bold text-slate-800">
              Today's Events
            </h2>

            <p className="text-sm text-slate-500">
              {todayEvents.length} event
              {todayEvents.length !== 1 && "s"}
            </p>

          </div>

        </div>

      </div>

      {/* Events */}

      <div className="max-h-[500px] space-y-4 overflow-y-auto p-5">

        {todayEvents.length === 0 ? (
          <div className="py-12 text-center">

            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">

              <FiCalendar
                size={30}
                className="text-slate-400"
              />

            </div>

            <h3 className="font-semibold text-slate-700">
              No Events Today
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Enjoy your free schedule 🎉
            </p>

          </div>
        ) : (
          todayEvents.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between">

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {event.description}
                  </p>

                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadgeColor(
                    event.type
                  )}`}
                >
                  {event.type}
                </span>

              </div>

              <div className="space-y-2 text-sm text-slate-600">

                <div className="flex items-center gap-2">

                  <FiClock
                    className="text-blue-500"
                  />

                  {format(
                    new Date(event.start),
                    "hh:mm a"
                  )}

                </div>

                <div className="flex items-center gap-2">

                  <FiMapPin
                    className="text-red-500"
                  />

                  {event.location}

                </div>

              </div>

              {event.attendees.length >
                0 && (
                <div className="mt-4 flex -space-x-2">

                  {event.attendees
                    .slice(0, 5)
                    .map(
                      (attendee) => (
                        <img
                          key={
                            attendee.id
                          }
                          src={
                            attendee.avatar
                          }
                          alt={
                            attendee.name
                          }
                          title={
                            attendee.name
                          }
                          className="h-9 w-9 rounded-full border-2 border-white object-cover"
                        />
                      )
                    )}

                </div>
              )}

            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default TodayEvents;