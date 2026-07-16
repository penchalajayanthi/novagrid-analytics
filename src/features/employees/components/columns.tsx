import type { Column } from "../../../components/tables/types";
import type { Employee } from "../types/employee.types";
import StatusBadge from "../../../components/ui/StatusBadge";
import {
  FiEye,
} from "react-icons/fi";

export const employeeColumns: Column<Employee>[] = [
  {
    key: "id",
    header: "ID",
    sortable: true,
    width: 80,
  },

  {
    key: "name",
    header: "Employee",
    sortable: true,
    width: 260,
    render: (employee) => (
      <div className="flex items-center gap-3">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="h-10 w-10 flex-shrink-0 rounded-full object-cover"
        />

        <div className="min-w-0">
          <p className="truncate font-semibold text-slate-900">
            {employee.name}
          </p>
        </div>
      </div>
    ),
  },

  {
    key: "email",
    header: "Email",
    sortable: true,
    width: 260,
  },

  {
    key: "department",
    header: "Department",
    sortable: true,
    width: 170,
  },

  {
    key: "role",
    header: "Role",
    sortable: true,
    width: 220,
    render: (employee) => (
      <span className="truncate text-slate-600">
        {employee.role}
      </span>
    ),
  },

  {
    key: "location",
    header: "Location",
    sortable: true,
    width: 140,
  },

  {
    key: "joinDate",
    header: "Join Date",
    sortable: true,
    width: 140,
  },

  {
    key: "status",
    header: "Status",
    sortable: true,
    width: 130,
    render: (employee) => (
      <StatusBadge status={employee.status} />
    ),
  },

{
  key: "id",
  header: "Actions",
  width: 150,

  render: (employee) => (
    <div
      className="flex items-center gap-2"
      onClick={(e) => e.stopPropagation()}
    >
      {/* View */}

      <button
        title="View Profile"
        className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        onClick={() =>
          window.location.href = `/employees/${employee.id}`
        }
      >
        <FiEye size={17} />
      </button>

     
    </div>
  ),
},
];