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

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-4xl font-bold text-slate-800">
            Reports
          </h1>

          <p className="mt-2 text-slate-500">
            Revenue, Sales, Marketing and Employee Performance Analytics
          </p>

        </div>

        <ExportMenu employees={employees} />

      </div>

    </div>
  );
};

export default ReportHeader;