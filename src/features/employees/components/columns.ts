import type { Column } from "../../../components/tables/types";
import type { Employee } from "../types/employee.types";

export const employeeColumns: Column<Employee>[] = [
  {
    key: "name",
    header: "Name",
    sortable: true,
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
    key: "role",
    header: "Role",
    sortable: true,
  },
  {
    key: "status",
    header: "Status",
    sortable: true,
  },
];