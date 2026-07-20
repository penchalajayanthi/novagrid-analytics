import {
  FiCalendar,
  FiClock,
} from "react-icons/fi";

import { projects } from "../data/projects";
import { useProjectStore } from "../store/projectStore";

const ProjectHeader = () => {
  const project = projects[0];

  const { tasks } = useProjectStore();

  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completedTasks / tasks.length) * 100
        );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Top */}

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            {project.name}
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500">
            {project.description}
          </p>

        </div>

        {/* Progress */}

        <div className="w-full max-w-xs">

          <div className="mb-2 flex justify-between">

            <span className="text-sm font-medium">
              Overall Progress
            </span>

            <span className="text-3xl font-bold text-blue-600">
              {progress}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200">

            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        {/* Team */}

        <div>

          <p className="mb-3 text-sm font-semibold text-slate-600">
            Team Members
          </p>

          <div className="flex -space-x-3">

            {project.team.map((member) => (
              <img
                key={member.id}
                src={member.avatar}
                alt={member.name}
                title={member.name}
                className="h-12 w-12 rounded-full border-2 border-white object-cover"
              />
            ))}

          </div>

        </div>

        {/* Timeline */}

        <div>

          <p className="mb-3 text-sm font-semibold text-slate-600">
            Project Timeline
          </p>

          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-2">

              <FiCalendar />

              <span>
                Start: {project.startDate}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <FiClock />

              <span>
                End: {project.endDate}
              </span>

            </div>

          </div>

        </div>

        {/* Milestones */}

        <div>

          <p className="mb-3 text-sm font-semibold text-slate-600">
            Milestones
          </p>

          <div className="space-y-2">

            {project.milestones.map(
              (milestone) => (
                <div
                  key={milestone.id}
                  className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2"
                >
                  <span className="text-sm">
                    {milestone.title}
                  </span>

                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      milestone.status === "Done"
                        ? "bg-green-100 text-green-700"
                        : milestone.status ===
                          "In Progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {milestone.status}
                  </span>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProjectHeader;