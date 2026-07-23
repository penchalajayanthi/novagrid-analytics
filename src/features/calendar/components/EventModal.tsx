import { useState } from "react";
import {
  FiX,
  FiCalendar,
  FiMapPin,
  FiFileText,
  FiTag,
} from "react-icons/fi";

import type {
  CalendarEvent,
  EventType,
} from "../types/calendar.types";

interface EventModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (
    event: Omit<CalendarEvent, "id">
  ) => void;
}

const eventTypes: EventType[] = [
  "Meeting",
  "Deadline",
  "Presentation",
  "Training",
  "Holiday",
];

const EventModal = ({
  open,
  onClose,
  onSave,
}: EventModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [type, setType] =
    useState<EventType>("Meeting");
  const [location, setLocation] =
    useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  if (!open) return null;

  const handleSave = () => {
    if (
      !title ||
      !start ||
      !end ||
      !location
    ) {
      alert(
        "Please fill all required fields."
      );
      return;
    }

    onSave({
      title,
      description,
      type,
      location,
      start,
      end,
      attendees: [],
    });

    setTitle("");
    setDescription("");
    setLocation("");
    setStart("");
    setEnd("");
    setType("Meeting");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 px-8 py-6">

          <div>

            <h2 className="text-2xl font-bold text-slate-800">
              Create New Event
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Schedule meetings and activities
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-slate-100"
          >
            <FiX size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-8">

          {/* Title */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

              <FiCalendar />

              Event Title

            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Quarterly Meeting"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />

          </div>

          {/* Description */}

          <div>

            <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

              <FiFileText />

              Description

            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              placeholder="Write event description..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />

          </div>

          {/* Type & Location */}

          <div className="grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

                <FiTag />

                Event Type

              </label>

              <select
                value={type}
                onChange={(e) =>
                  setType(
                    e.target
                      .value as EventType
                  )
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              >
                {eventTypes.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>

            </div>

            <div>

              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">

                <FiMapPin />

                Location

              </label>

              <input
                value={location}
                onChange={(e) =>
                  setLocation(
                    e.target.value
                  )
                }
                placeholder="Conference Room"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

            </div>

          </div>

          {/* Date */}

          <div className="grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 text-sm font-semibold text-slate-700">
                Start Date & Time
              </label>

              <input
                type="datetime-local"
                value={start}
                onChange={(e) =>
                  setStart(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

            </div>

            <div>

              <label className="mb-2 text-sm font-semibold text-slate-700">
                End Date & Time
              </label>

              <input
                type="datetime-local"
                value={end}
                onChange={(e) =>
                  setEnd(
                    e.target.value
                  )
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />

            </div>

          </div>

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t border-slate-200 bg-slate-50 px-8 py-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Save Event
          </button>

        </div>

      </div>

    </div>
  );
};

export default EventModal;