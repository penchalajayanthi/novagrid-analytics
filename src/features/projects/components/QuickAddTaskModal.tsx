import { useState } from "react";
import type {
  Priority,
  TaskStatus,
} from "../types/project.types";

interface Props {
  open: boolean;
  defaultStatus: TaskStatus;
  onClose: () => void;
  onCreate: (
    title: string,
    status: TaskStatus,
    priority: Priority
  ) => void;
}

const statuses: TaskStatus[] = [
  "Backlog",
  "To Do",
  "In Progress",
  "In Review",
  "Done",
];

const priorities: Priority[] = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

const QuickAddTaskModal = ({
  open,
  defaultStatus,
  onClose,
  onCreate,
}: Props) => {
  const [title, setTitle] = useState("");

  const [status, setStatus] =
  useState<TaskStatus>(defaultStatus);

  const [priority, setPriority] =
    useState<Priority>("Medium");

  if (!open) return null;

  const handleSubmit = () => {
    if (!title.trim()) return;

    onCreate(title, status, priority);

    setTitle("");
    setStatus("Backlog");
    setPriority("Medium");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">

        <h2 className="mb-6 text-2xl font-bold">
          New Task
        </h2>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block text-sm font-medium">
              Task Title
            </label>

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full rounded-xl border p-3 outline-none focus:border-blue-500"
              placeholder="Enter task title"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Status
            </label>

            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target
                    .value as TaskStatus
                )
              }
              className="w-full rounded-xl border p-3"
            >
              {statuses.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-medium">
              Priority
            </label>

            <select
              value={priority}
              onChange={(e) =>
                setPriority(
                  e.target
                    .value as Priority
                )
              }
              className="w-full rounded-xl border p-3"
            >
              {priorities.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-xl border px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-5 py-2 text-white"
          >
            Create Task
          </button>

        </div>

      </div>

    </div>
  );
};

export default QuickAddTaskModal;