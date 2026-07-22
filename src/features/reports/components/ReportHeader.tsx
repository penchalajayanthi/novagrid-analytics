import {
  FiCalendar,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

import ExportMenu from "./ExportMenu";

import type { EmployeePerformance } from "../types/report.types";

interface ReportHeaderProps {
  employees: EmployeePerformance[];
}

const ReportHeader = ({
  employees,
}: ReportHeaderProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

              <FiBarChart2
                size={28}
                className="text-blue-600"
              />

            </div>

            <div>

              <h1 className="text-3xl font-bold text-slate-800">
                Reports Dashboard
              </h1>

              <p className="mt-1 text-slate-500">
                Analyze Revenue, Sales, Marketing and Employee
                Performance in one place.
              </p>

            </div>

          </div>

          {/* Info Cards */}

          <div className="mt-6 flex flex-wrap gap-4">

            <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">

              <FiUsers className="text-blue-600" />

              <span className="text-sm font-medium">
                {employees.length} Employees
              </span>

            </div>

            <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2">

              <FiCalendar className="text-green-600" />

              <span className="text-sm font-medium">
                {new Date().toLocaleDateString()}
              </span>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-end">

          <ExportMenu employees={employees} />

        </div>

      </div>

    </div>
  );
};

export default ReportHeader;