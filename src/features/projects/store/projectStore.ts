import { create } from "zustand";

import type {
  Priority,
  Task,
  TaskStatus,
} from "../types/project.types";

import { projects } from "../data/projects";

interface AddTaskData {
  title: string;
  status: TaskStatus;
  priority: Priority;
}

interface ProjectStore {
  tasks: Task[];

  moveTask: (
    taskId: number,
    status: TaskStatus,
    index?: number
  ) => void;

  addTask: (
    task: AddTaskData
  ) => void;

  updateTask: (
    task: Task
  ) => void;

  deleteTask: (
    taskId: number
  ) => void;
}

const initialTasks =
  projects.flatMap(
    (project) => project.tasks
  );

export const useProjectStore =
  create<ProjectStore>((set) => ({
    tasks: initialTasks,

    moveTask: (
      taskId,
      status,
      index
    ) =>
      set((state) => {
        const tasks = [...state.tasks];

        const currentIndex =
          tasks.findIndex(
            (task) =>
              task.id === taskId
          );

        if (currentIndex === -1)
          return state;

        const task =
          tasks[currentIndex];

        task.status = status;

        if (
          index !== undefined
        ) {
          tasks.splice(
            currentIndex,
            1
          );

          tasks.splice(
            index,
            0,
            task
          );
        }

        return {
          tasks,
        };
      }),

    addTask: ({
      title,
      status,
      priority,
    }) =>
      set((state) => ({
        tasks: [
          {
            id: Date.now(),

            title,

        description: "No description added yet.",

            status,

            priority,

            assignees: [],

            dueDate:
              new Date().toLocaleDateString(),

            tag: "General",

            checklist: [],

            comments: [],
          },

          ...state.tasks,
        ],
      })),

    updateTask: (
      updatedTask
    ) =>
      set((state) => ({
        tasks:
          state.tasks.map(
            (task) =>
              task.id ===
              updatedTask.id
                ? updatedTask
                : task
          ),
      })),

    deleteTask: (
      taskId
    ) =>
      set((state) => ({
        tasks:
          state.tasks.filter(
            (task) =>
              task.id !== taskId
          ),
      })),
  }));