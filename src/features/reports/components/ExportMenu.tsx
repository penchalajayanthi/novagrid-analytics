import {
  FiDownload,
  FiChevronDown,
} from "react-icons/fi";

import { useState } from "react";

import type { EmployeePerformance } from "../types/report.types";

interface Props {
  employees: EmployeePerformance[];
}

const ExportMenu = ({
  employees,
}: Props) => {
  const [open, setOpen] =
    useState(false);

  const exportCSV = () => {
    const headers = [
      "Name",
      "Department",
      "Projects",
      "Attendance",
      "Performance",
    ];

    const rows = employees.map(
      (employee) => [
        employee.name,
        employee.department,
        employee.projects,
        employee.attendance,
        employee.performance,
      ]
    );

    const csv = [
      headers.join(","),
      ...rows.map((row) =>
        row.join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv",
    });

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;

    a.download =
      "employee-report.csv";

    a.click();

    URL.revokeObjectURL(url);

    setOpen(false);
  };

  return (
    <div className="relative">

      <button
        onClick={() =>
          setOpen(!open)
        }
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white"
      >
        <FiDownload />

        Export

        <FiChevronDown />

      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border bg-white shadow-lg">

          <button
            onClick={exportCSV}
            className="w-full px-4 py-3 text-left hover:bg-slate-100"
          >
            Export CSV
          </button>

        </div>
      )}

    </div>
  );
};

export default ExportMenu;