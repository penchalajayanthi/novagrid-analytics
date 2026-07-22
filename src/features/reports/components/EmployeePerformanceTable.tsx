import { useMemo, useState } from "react";
import SearchInput from "../../../components/ui/SearchInput";
import type { EmployeePerformance } from "../types/report.types";

interface Props {
  employees: EmployeePerformance[];
  loading: boolean;
}

const EmployeePerformanceTable = ({
  employees,
  loading,
}: Props) => {
  const [search, setSearch] =
    useState("");

  const filteredEmployees =
    useMemo(() => {
      return employees.filter(
        (employee) =>
          employee.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          employee.department
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }, [employees, search]);

  const getPerformanceColor = (
    score: number
  ) => {
    if (score >= 90)
      return "bg-green-500";

    if (score >= 75)
      return "bg-blue-500";

    if (score >= 60)
      return "bg-yellow-500";

    return "bg-red-500";
  };
 const getDepartmentColor = (
  department: string
) => {
  switch (department) {
    case "Engineering":
      return "bg-blue-100 text-blue-700";

    case "Sales":
      return "bg-green-100 text-green-700";

    case "Marketing":
      return "bg-purple-100 text-purple-700";

    case "Finance":
      return "bg-yellow-100 text-yellow-700";

    case "HR":
      return "bg-pink-100 text-pink-700";

    case "Operations":
      return "bg-indigo-100 text-indigo-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
};
  const getStatus = (
    score: number
  ) => {
    if (score >= 90)
      return {
        label: "Excellent",
        style:
          "bg-green-100 text-green-700",
      };

    if (score >= 75)
      return {
        label: "Good",
        style:
          "bg-blue-100 text-blue-700",
      };

    if (score >= 60)
      return {
        label: "Average",
        style:
          "bg-yellow-100 text-yellow-700",
      };

    return {
      label: "Needs Improvement",
      style:
        "bg-red-100 text-red-700",
    };
  };

  if (loading) {
    return (
      <div className="h-96 animate-pulse rounded-2xl bg-slate-200" />
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Employee Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Team productivity overview
          </p>
        </div>

        <div className="w-full md:w-80">
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search employee..."
          />
        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 z-10 bg-slate-50 shadow-sm">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Employee
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                Department
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Projects
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Attendance
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Performance
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredEmployees.length === 0 ? (
              <tr>

                <td
                  colSpan={6}
                  className="py-16 text-center"
                >
                  <div>

                    <p className="text-lg font-semibold text-slate-700">
                      No Reports Found
                    </p>

                    <p className="mt-2 text-slate-500">
                      Try changing your search.
                    </p>

                  </div>
                </td>

              </tr>
            ) : (
              filteredEmployees.map(
                (employee) => {
                  const status =
                    getStatus(
                      employee.performance
                    );

                  return (
                    <tr
                      key={employee.id}
                     className={`border-b transition hover:bg-blue-50 ${
  employee.id % 2 === 0
    ? "bg-white"
    : "bg-slate-50/40"
}`}
                    >

                      {/* Employee */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-12 w-12 rounded-full object-cover"
                          />

                          <div>

                            <p className="font-semibold text-slate-800">
                              {employee.name}
                            </p>

                            <p className="text-sm text-slate-500">
                              {employee.email}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* Department */}

                      <td className="px-6 py-5">

                       <span
  className={`rounded-full px-3 py-1 text-sm font-medium ${getDepartmentColor(
    employee.department
  )}`}
>
  {employee.department}
</span>

                      </td>

                      {/* Projects */}

                      <td className="px-6 py-5 text-center">

                        <span className="rounded-lg bg-slate-100 px-3 py-2 font-semibold">
                          {employee.projects}
                        </span>

                      </td>

                      {/* Attendance */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="h-2 flex-1 rounded-full bg-slate-200">

                            <div
                              className="h-2 rounded-full bg-green-500"
                              style={{
                                width: `${employee.attendance}%`,
                              }}
                            />

                          </div>

                          <span className="w-12 text-sm font-semibold">
                            {employee.attendance}%
                          </span>

                        </div>

                      </td>

                      {/* Performance */}

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-3">

                          <div className="h-2 flex-1 rounded-full bg-slate-200">

                            <div
                              className={`h-2 rounded-full ${getPerformanceColor(
                                employee.performance
                              )}`}
                              style={{
                                width: `${employee.performance}%`,
                              }}
                            />

                          </div>

                          <span className="w-12 text-sm font-semibold">
                            {employee.performance}%
                          </span>

                        </div>

                      </td>

                      {/* Status */}

                      <td className="px-6 py-5 text-center">

                        <span
                          className={`rounded-full px-3 py-1 text-sm font-medium ${status.style}`}
                        >
                          {status.label}
                        </span>

                      </td>

                    </tr>
                  );
                }
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default EmployeePerformanceTable;