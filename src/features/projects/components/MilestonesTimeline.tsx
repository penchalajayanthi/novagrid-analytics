import { FiCalendar } from "react-icons/fi";
import { projects } from "../data/projects";

const statusColors = {
  Upcoming: "bg-yellow-100 text-yellow-700",
  "In Progress":
    "bg-blue-100 text-blue-700",
  Done: "bg-green-100 text-green-700",
};

const MilestonesTimeline = () => {
  const milestones =
    projects[0].milestones;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold">
          Milestones
        </h2>

        <span className="text-sm text-slate-500">
          {milestones.length} Total
        </span>

      </div>

      <div className="space-y-5">

        {milestones.map(
          (milestone) => (
            <div
              key={milestone.id}
             className={`flex items-center justify-between rounded-xl border p-4 ${
    milestone.status==="Upcoming" &&
    new Date(milestone.dueDate)<new Date()
        ? "border-red-400 bg-red-50"
        : ""
}`}
            >
              <div>

                <h3 className="font-semibold">
                  {milestone.title}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">

                  <FiCalendar />

                  {milestone.dueDate}

                </div>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  statusColors[
                    milestone.status
                  ]
                }`}
              >
                {milestone.status}
              </span>
            </div>
          )
        )}

      </div>

    </div>
  );
};

export default MilestonesTimeline;