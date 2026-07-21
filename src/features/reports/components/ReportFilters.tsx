import FilterSelect from "../../../components/ui/FilterSelect";

interface ReportFiltersProps {
  period: string;
  department: string;
  reportType: string;

  onPeriodChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onReportTypeChange: (value: string) => void;
}

const periodOptions = [
  "This Week",
  "This Month",
  "Last 3 Months",
  "Last 6 Months",
  "This Year",
];

const departmentOptions = [
  "All Departments",
  "Engineering",
  "Sales",
  "Marketing",
  "Finance",
  "HR",
  "Operations",
];

const reportTypeOptions = [
  "All Reports",
  "Revenue",
  "Sales",
  "Marketing",
  "Employee Performance",
];

const ReportFilters = ({
  period,
  department,
  reportType,
  onPeriodChange,
  onDepartmentChange,
  onReportTypeChange,
}: ReportFiltersProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-800">
          Filters
        </h3>

        <p className="text-sm text-slate-500">
          Filter reports by period, department and report type.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">

        <FilterSelect
          value={period}
          onChange={onPeriodChange}
          options={periodOptions}
          placeholder="Select Period"
        />

        <FilterSelect
          value={department}
          onChange={onDepartmentChange}
          options={departmentOptions}
          placeholder="Select Department"
        />

        <FilterSelect
          value={reportType}
          onChange={onReportTypeChange}
          options={reportTypeOptions}
          placeholder="Select Report Type"
        />

      </div>

    </div>
  );
};

export default ReportFilters;