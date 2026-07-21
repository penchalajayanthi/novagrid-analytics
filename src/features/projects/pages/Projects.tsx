import { useMemo, useState } from "react";
import {
  FiGrid,
  FiList,
  FiPlus,
} from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import SearchInput from "../../../components/ui/SearchInput";
import FilterSelect from "../../../components/ui/FilterSelect";

import ProjectHeader from "../components/ProjectHeader";
import ProjectStats from "../components/ProjectStats";
import KanbanBoard from "../components/KanbanBoard";
import ProjectListView from "../components/ProjectListView";

import { useProjectStore } from "../store/projectStore";
import QuickAddTaskModal from "../components/QuickAddTaskModal";
import type {
  TaskStatus,
} from "../types/project.types";
import MilestonesTimeline from "../components/MilestonesTimeline";
import TeamMembers from "../components/TeamMembers";

const priorityOptions = [
  "All",
  "Low",
  "Medium",
  "High",
  "Critical",
];

const Projects = () => {
  const { tasks, addTask } = useProjectStore();

  const [search, setSearch] = useState("");
  const [showQuickAdd, setShowQuickAdd] =
    useState(false);

  const [selectedStatus, setSelectedStatus] =
    useState<TaskStatus>("Backlog");
  const [priority, setPriority] =
    useState("All");
  const [assignee, setAssignee] =
    useState("All");
  const [view, setView] = useState<
    "board" | "list"
  >("board");

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        task.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesPriority =
        priority === "All" ||
        task.priority === priority;

      const matchesAssignee =
        assignee === "All" ||
        task.assignees.some(
          (member) =>
            member.name === assignee
        );

      return (
        matchesSearch &&
        matchesPriority &&
        matchesAssignee
      );
    });
  }, [
    tasks,
    search,
    priority,
    assignee,
  ]);
  const assigneeOptions = useMemo(() => {
    const names = Array.from(
      new Set(
        tasks.flatMap((task) =>
          task.assignees.map((a) => a.name)
        )
      )
    );

    return ["All", ...names];
  }, [tasks]);
  return (
    <div className="space-y-8">

      {/* Project Header */}

      <ProjectHeader />

      {/* KPI Cards */}

      <ProjectStats />
      <div className="grid gap-6 lg:grid-cols-2">
        <MilestonesTimeline />
        <TeamMembers />
      </div>
      {/* Toolbar */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Filters */}

          <div className="grid flex-1 gap-3 md:grid-cols-3">

            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search tasks..."
            />

            <FilterSelect
              value={priority}
              onChange={setPriority}
              options={priorityOptions}
              placeholder="Priority"
            />

            <FilterSelect
              value={assignee}
              onChange={setAssignee}
              options={assigneeOptions}
              placeholder="Assignee"
            />

          </div>

          {/* Actions */}

          <div className="flex items-center gap-2">

            {/* Board / List Toggle */}

            <div className="flex overflow-hidden rounded-xl border border-slate-200">

              <Tooltip title="Board View" arrow>
                <button
                  onClick={() => setView("board")}
                  className={`flex h-11 w-11 items-center justify-center transition ${view === "board"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  <FiGrid className="h-5 w-5" />
                </button>
              </Tooltip>

              <Tooltip title="List View" arrow>
                <button
                  onClick={() => setView("list")}
                  className={`flex h-11 w-11 items-center justify-center transition ${view === "list"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                >
                  <FiList className="h-5 w-5" />
                </button>
              </Tooltip>

            </div>

            {/* New Task */}

            <Tooltip
              title="Create New Task"
              arrow
            >
              <button
                onClick={() => {
                  setSelectedStatus("Backlog");
                  setShowQuickAdd(true);
                }}
                className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-blue-600
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:scale-105
            hover:bg-blue-700
            hover:shadow-md
          "
              >
                <FiPlus className="h-5 w-5" />
              </button>
            </Tooltip>

          </div>

        </div>
      </div>

      {/* Content */}

      {view === "board" ? (
        <KanbanBoard
          tasks={filteredTasks}
        />
      ) : (
        <ProjectListView
          tasks={filteredTasks}
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

          setShowQuickAdd(false);
        }}
      />
    </div>

  );
};

export default Projects;