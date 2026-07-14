import type { Column } from "../../../components/tables/types";

export const employeeColumns: Column<any>[] = [
  {
    key: "name",
    header: "Name",
    sortable: true,
  },
  {
    key: "email",
    header: "Email",
  },
  {
    key: "department",
    header: "Department",
  },
  {
    key: "role",
    header: "Role",
  },
  {
    key: "status",
    header: "Status",
  },
];