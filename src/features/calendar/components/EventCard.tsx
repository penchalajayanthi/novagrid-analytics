import {
  FiClock,
  FiMapPin,
  FiUsers,
} from "react-icons/fi";
import { format } from "date-fns";

import type {
  CalendarEvent,
} from "../types/calendar.types";

interface EventCardProps {
  event: CalendarEvent;
  onClick?: (
    event: CalendarEvent
  ) => void;
}

const getBadge = (type: string) => {
  switch (type) {
    case "Meeting":
      return {
        badge:
          "bg-blue-100 text-blue-700",
        border:
          "border-blue-500",
      };

    case "Deadline":
      return {
        badge:
          "bg-red-100 text-red-700",
        border:
          "border-red-500",
      };

    case "Presentation":
      return {
        badge:
          "bg-purple-100 text-purple-700",
        border:
          "border-purple-500",
      };

    case "Training":
      return {
        badge:
          "bg-green-100 text-green-700",
        border:
          "border-green-500",
      };

    case "Holiday":
      return {
        badge:
          "bg-yellow-100 text-yellow-700",
        border:
          "border-yellow-500",
      };

    default:
      return {
        badge:
          "bg-slate-100 text-slate-700",
        border:
          "border-slate-400",
      };
  }
};

const EventCard = ({
  event,
  onClick,
}: EventCardProps) => {
  const color = getBadge(event.type);

  return (
    <div
      onClick={() => onClick?.(event)}
      className={`cursor-pointer rounded-2xl border-l-4 ${color.border} border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg`}
    >
      {/* Header */}

      <div className="mb-4 flex items-start justify-between">

        <div className="flex-1">

          <h3 className="text-lg font-bold text-slate-800">
            {event.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-slate-500">
            {event.description}
          </p>

        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${color.badge}`}
        >
          {event.type}
        </span>

      </div>

      {/* Time */}

      <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">

        <FiClock className="text-blue-500" />

        <span>
          {format(
            new Date(event.start),
            "dd MMM yyyy"
          )}
        </span>

        <span>•</span>

        <span>
          {format(
            new Date(event.start),
            "hh:mm a"
          )}{" "}
          -
          {" "}
          {format(
            new Date(event.end),
            "hh:mm a"
          )}
        </span>

      </div>

      {/* Location */}

      <div className="mb-5 flex items-center gap-2 text-sm text-slate-600">

        <FiMapPin className="text-red-500" />

        <span>{event.location}</span>

      </div>

      {/* Footer */}

      <div className="flex items-center justify-between">

        <div className="flex -space-x-3">

          {event.attendees
            .slice(0, 5)
            .map((person) => (
              <img
                key={person.id}
                src={person.avatar}
                alt={person.name}
                title={person.name}
                className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}

          {event.attendees.length >
            5 && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-700 shadow-sm">
              +
              {event.attendees.length -
                5}
            </div>
          )}

        </div>

        <div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">

          <FiUsers />

          {event.attendees.length} Members

        </div>

      </div>

    </div>
  );
};

export default EventCard;