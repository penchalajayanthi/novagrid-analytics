import type { Task } from "../types/project.types";
import { useNavigate } from "react-router-dom";

interface Props {
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}

const priorityColors = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-orange-100 text-orange-700",
  Critical: "bg-red-100 text-red-700",
};

const statusColors = {
  Backlog: "bg-slate-100 text-slate-700",
  "To Do": "bg-blue-100 text-blue-700",
  "In Progress": "bg-yellow-100 text-yellow-700",
  "In Review": "bg-purple-100 text-purple-700",
  Done: "bg-green-100 text-green-700",
};

const ProjectListView = ({
  tasks,
}: Props) => { 
const navigate = useNavigate();

  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Task
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Priority
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Assignee
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Due Date
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Tag
            </th>

          </tr>

        </thead>

        <tbody>

          {tasks.map((task) => (

           <tr
  key={task.id}
  onClick={() => navigate("/projects/1")}
  className="cursor-pointer border-b hover:bg-slate-50"
>

              <td className="px-6 py-4">

                <div>

                  <h4 className="font-semibold">
                    {task.title}
                  </h4>

                  <p className="mt-1 text-sm text-slate-500">
                    {task.description}
                  </p>

                </div>

              </td>

              <td className="px-6 py-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusColors[
                      task.status
                    ]
                  }`}
                >
                  {task.status}
                </span>

              </td>

              <td className="px-6 py-4">

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    priorityColors[
                      task.priority
                    ]
                  }`}
                >
                  {task.priority}
                </span>

              </td>

              <td className="px-6 py-4">

                <div className="flex -space-x-2">

                  {task.assignees.map(
                    (member) => (
                      <img
                        key={member.id}
                        src={member.avatar}
                        alt={member.name}
                        className="h-9 w-9 rounded-full border-2 border-white"
                      />
                    )
                  )}

                </div>

              </td>

              <td className="px-6 py-4">
                {task.dueDate}
              </td>

              <td className="px-6 py-4">
                {task.tag}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ProjectListView;