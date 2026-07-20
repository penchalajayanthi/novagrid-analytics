import { useMemo } from "react";
import { useProjectStore } from "../store/projectStore";

export const useProjects = () => {
  const tasks = useProjectStore(
    (state) => state.tasks
  );

  const moveTask = useProjectStore(
    (state) => state.moveTask
  );

  const addTask = useProjectStore(
    (state) => state.addTask
  );

  const groupedTasks = useMemo(
    () => ({
      Backlog: tasks.filter(
        (t) => t.status === "Backlog"
      ),

      "To Do": tasks.filter(
        (t) => t.status === "To Do"
      ),

      "In Progress": tasks.filter(
        (t) => t.status === "In Progress"
      ),

      "In Review": tasks.filter(
        (t) => t.status === "In Review"
      ),

      Done: tasks.filter(
        (t) => t.status === "Done"
      ),
    }),
    [tasks]
  );

  const progress = useMemo(() => {
    if (tasks.length === 0) return 0;

    const done = tasks.filter(
      (t) => t.status === "Done"
    ).length;

    return Math.round(
      (done / tasks.length) * 100
    );
  }, [tasks]);

  return {
    tasks,
    groupedTasks,
    progress,
    moveTask,
    addTask,
  };
};