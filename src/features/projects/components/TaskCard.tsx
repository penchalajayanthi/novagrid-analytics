import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import {
  FiCalendar,
  FiFlag,
  FiMessageSquare,
  FiCheckSquare,
} from "react-icons/fi";

import type { Task } from "../types/project.types";

interface Props {
  task: Task;
  onClick?: () => void;
}

const priorityColors = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-orange-100 text-orange-700",
  Critical: "bg-red-100 text-red-700",
};

const tagColors: Record<string, string> = {
  UI: "bg-blue-100 text-blue-700",
  Backend: "bg-purple-100 text-purple-700",
  API: "bg-cyan-100 text-cyan-700",
  Bug: "bg-red-100 text-red-700",
  Feature: "bg-green-100 text-green-700",
  Testing: "bg-amber-100 text-amber-700",
  General: "bg-slate-100 text-slate-700",
};

const TaskCard = ({
  task,
  onClick,
}: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const completedChecklist =
    task.checklist.filter(
      (item) => item.completed
    ).length;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onClick}
      className={`rounded-xl border bg-white p-4 shadow-sm transition-all hover:shadow-md cursor-pointer ${
        isDragging
          ? "opacity-70 rotate-2 shadow-xl"
          : ""
      }`}
    >
      {/* Priority */}

      <div className="flex items-center justify-between">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            priorityColors[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <FiFlag className="text-slate-400" />

      </div>

      {/* Title */}

      <h3 className="mt-4 text-sm font-semibold text-slate-800">
        {task.title}
      </h3>

      {/* Description */}

      <p className="mt-2 line-clamp-2 text-xs text-slate-500">
        {task.description}
      </p>

      {/* Tag */}

      <div className="mt-4">

        <span
          className={`rounded-full px-2 py-1 text-xs font-medium ${
            tagColors[task.tag] ??
            tagColors.General
          }`}
        >
          {task.tag}
        </span>

      </div>

      {/* Footer */}

      <div className="mt-5 flex items-center justify-between">

        {/* Avatars */}

        <div className="flex -space-x-2">

          {task.assignees.map(
            (member) => (
              <img
                key={member.id}
                src={member.avatar}
                alt={member.name}
                className="h-8 w-8 rounded-full border-2 border-white object-cover"
              />
            )
          )}

        </div>

        {/* Due Date */}

        <div className="flex items-center gap-1 text-xs text-slate-500">

          <FiCalendar />

          {task.dueDate}

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-4 flex items-center justify-between border-t pt-3 text-xs text-slate-500">

        <div className="flex items-center gap-1">

          <FiCheckSquare />

          {completedChecklist}/
          {task.checklist.length}

        </div>

        <div className="flex items-center gap-1">

          <FiMessageSquare />

          {task.comments.length}

        </div>

      </div>
    </div>
  );
};

export default TaskCard;