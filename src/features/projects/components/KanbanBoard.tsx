import { useMemo, useState } from "react";
import QuickAddTaskModal from "./QuickAddTaskModal";

import {
  DndContext,
  PointerSensor,
  KeyboardSensor,
  closestCorners,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

import KanbanColumn from "./KanbanColumn";
import TaskModal from "./TaskModal";

import { useProjectStore } from "../store/projectStore";

import type {
  Task,
  TaskStatus,
} from "../types/project.types";

const statuses: TaskStatus[] = [
  "Backlog",
  "To Do",
  "In Progress",
  "In Review",
  "Done",
];

interface Props {
  tasks: Task[];
}

const KanbanBoard = ({
  tasks,
}: Props) => {
 
    
  const {
    moveTask,
    addTask,
  } = useProjectStore();

  const [selectedTask, setSelectedTask] =
    useState<Task | null>(null);
const [showQuickAdd, setShowQuickAdd] =
  useState(false);

const [selectedStatus, setSelectedStatus] =
  useState<TaskStatus>("Backlog");
  const sensors = useSensors(
    useSensor(PointerSensor),

    useSensor(KeyboardSensor, {
      coordinateGetter:
        sortableKeyboardCoordinates,
    })
  );

  const groupedTasks = useMemo(() => {
    return {
      Backlog: tasks.filter(
        (task) =>
          task.status === "Backlog"
      ),

      "To Do": tasks.filter(
        (task) =>
          task.status === "To Do"
      ),

      "In Progress": tasks.filter(
        (task) =>
          task.status ===
          "In Progress"
      ),

      "In Review": tasks.filter(
        (task) =>
          task.status ===
          "In Review"
      ),

      Done: tasks.filter(
        (task) =>
          task.status === "Done"
      ),
    };
  }, [tasks]);

  const handleDragEnd = (
    event: DragEndEvent
  ) => {
    const { active, over } = event;

    if (!over) return;

    const activeTask = tasks.find(
      (task) => task.id === active.id
    );

    if (!activeTask) return;

    const overTask = tasks.find(
      (task) => task.id === over.id
    );

    // Dropped into empty column

    if (!overTask) {
      moveTask(
        activeTask.id,
        over.id as TaskStatus
      );

      return;
    }

    // Same Column

    if (
      activeTask.status ===
      overTask.status
    ) {
      const columnTasks =
        groupedTasks[
          activeTask.status
        ];

      const oldIndex =
        columnTasks.findIndex(
          (t) =>
            t.id === activeTask.id
        );

      const newIndex =
        columnTasks.findIndex(
          (t) => t.id === overTask.id
        );

      arrayMove(
        columnTasks,
        oldIndex,
        newIndex
      );

      return;
    }

    // Different Column

    moveTask(
      activeTask.id,
      overTask.status
    );
  };

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={
          closestCorners
        }
        onDragEnd={handleDragEnd}
      >
        <div className="flex gap-6 overflow-x-auto pb-5">

          {statuses.map((status) => (
            <SortableContext
              key={status}
              items={groupedTasks[
                status
              ].map(
                (task) => task.id
              )}
              strategy={
                verticalListSortingStrategy
              }
            >
              <KanbanColumn
                title={status}
                tasks={
                  groupedTasks[status]
                }
                onTaskClick={(
                  task
                ) =>
                  setSelectedTask(
                    task
                  )
                }
            onAddTask={(column) => {
  setSelectedStatus(column);
  setShowQuickAdd(true);
}}
              />
            </SortableContext>
          ))}

        </div>
      </DndContext>

     {selectedTask && (
  <TaskModal
    task={selectedTask}
    onClose={() => setSelectedTask(null)}
  />
)}

<QuickAddTaskModal
  open={showQuickAdd}
  defaultStatus={selectedStatus}
  onClose={() => setShowQuickAdd(false)}
  onCreate={(
    title,
    status,
    priority
  ) => {
    addTask({
      title,
      status,
      priority,
    });
  }}
/>
    </>
  );
};

export default KanbanBoard;