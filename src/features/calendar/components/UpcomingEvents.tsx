import {
  compareAsc,
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

interface UpcomingEventsProps {
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

const UpcomingEvents = ({
  events,
}: UpcomingEventsProps) => {
  const upcoming = [...events]
    .sort((a, b) =>
      compareAsc(
        new Date(a.start),
        new Date(b.start)
      )
    )
    .slice(0, 5);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 p-5">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-100 p-3">

            <FiCalendar
              size={20}
              className="text-indigo-600"
            />

          </div>

          <div>

            <h2 className="text-lg font-bold text-slate-800">
              Upcoming Events
            </h2>

            <p className="text-sm text-slate-500">
              Next {upcoming.length} scheduled events
            </p>

          </div>

        </div>

      </div>

      {/* Events */}

      <div className="space-y-4 p-5">

        {upcoming.length === 0 ? (
          <div className="py-10 text-center">

            <FiCalendar
              size={36}
              className="mx-auto mb-3 text-slate-300"
            />

            <p className="font-medium text-slate-500">
              No Upcoming Events
            </p>

          </div>
        ) : (
          upcoming.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-indigo-200 hover:shadow-md"
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

                  <FiCalendar className="text-indigo-500" />

                  {format(
                    new Date(event.start),
                    "dd MMM yyyy"
                  )}

                </div>

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
                          className="h-8 w-8 rounded-full border-2 border-white object-cover"
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

export default UpcomingEvents;