import type { Column } from "../../../components/tables/types";
import type { Employee } from "../types/employee.types";
import StatusBadge from "../../../components/ui/StatusBadge";

export const employeeColumns: Column<Employee>[] = [
  {
    key: "name",
    header: "Employee",
    sortable: true,
    render: (employee) => (
      <div className="flex items-center gap-3">
        <img
          src={employee.avatar}
          alt={employee.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="font-semibold text-slate-800">
            {employee.name}
          </p>

          <p className="text-xs text-slate-500">
            {employee.role}
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "email",
    header: "Email",
    sortable: true,
  },
  {
    key: "department",
    header: "Department",
    sortable: true,
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    render: (employee) => (
      <StatusBadge status={employee.status} />
    ),
  },
];