import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useDroppable } from "@dnd-kit/core";
import { FiPlus } from "react-icons/fi";

import TaskCard from "./TaskCard";
import type {
  Task,
  TaskStatus,
} from "../types/project.types";

interface Props {
  title: TaskStatus;
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
  onAddTask?: (status: TaskStatus) => void;
}

const columnColors: Record<TaskStatus, string> = {
  Backlog: "border-slate-300",
  "To Do": "border-blue-300",
  "In Progress": "border-yellow-300",
  "In Review": "border-purple-300",
  Done: "border-green-300",
};

const headerColors: Record<TaskStatus, string> = {
  Backlog: "bg-slate-100",
  "To Do": "bg-blue-100",
  "In Progress": "bg-yellow-100",
  "In Review": "bg-purple-100",
  Done: "bg-green-100",
};

const KanbanColumn = ({
  title,
  tasks,
  onTaskClick,
  onAddTask,
}: Props) => {
  const { setNodeRef, isOver } = useDroppable({
    id: title,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        flex
        min-w-[340px]
        flex-col
        rounded-2xl
        border-2 
        ${columnColors[title]}
        bg-slate-50
        transition-all
        ${
          isOver
            ? "ring-2 ring-blue-300 bg-blue-50"
            : ""
        }
      `}
    > 
      {/* Header */}

      <div
        className={`
          flex
          items-center
          justify-between
          rounded-t-2xl
          px-5
          py-4
          ${headerColors[title]}
        `}
      >
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-slate-800">
            {title}
          </h2>

          <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold">
            {tasks.length}
          </span>
        </div>

        <button
          onClick={() => onAddTask?.(title)}
          className="rounded-lg p-2 transition hover:bg-white"
        >
          <FiPlus size={18} />
        </button>
      </div>

      {/* Cards */}

      <div className="flex-1 overflow-y-auto p-4">
        <SortableContext
          items={tasks.map((task) => task.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClick={() =>
                  onTaskClick?.(task)
                }
              />
            ))}
          </div>
        </SortableContext>

        {tasks.length === 0 && (
          <div className="mt-6 rounded-xl border-2 border-dashed border-slate-300 p-8 text-center text-sm text-slate-400">
            Drop tasks here
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;