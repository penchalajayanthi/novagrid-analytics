import KpiCard from "../../../components/ui/KpiCard";

import type {
  RevenueData,
  SalesData,
  MarketingData,
  EmployeePerformance,
} from "../types/report.types";

interface ReportStatsProps {
  revenue: RevenueData[];
  sales: SalesData[];
  marketing: MarketingData[];
  employees: EmployeePerformance[];
  loading: boolean;
  reportType: string;
}

const ReportStats = ({
  revenue,
  sales,
  marketing,
  employees,
  loading,
  reportType,
}: ReportStatsProps) => {
  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-2xl bg-slate-200"
          />
        ))}
      </div>
    );
  }

  const totalRevenue = revenue.reduce(
    (sum, item) => sum + item.revenue,
    0
  );

  const totalSales = sales.reduce(
    (sum, item) => sum + item.sales,
    0
  );

  const totalLeads = marketing.reduce(
    (sum, item) => sum + item.leads,
    0
  );

  const averagePerformance =
    employees.length > 0
      ? Math.round(
        employees.reduce(
          (sum, employee) =>
            sum + employee.performance,
          0
        ) / employees.length
      )
      : 0;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {(reportType === "All Reports" ||
        reportType === "Revenue") && (
          <KpiCard
            title="Revenue"
            value={`₹${totalRevenue.toLocaleString()}`}
            subtitle="Total Revenue"
            icon="revenue"
          />
        )}

      {(reportType === "All Reports" ||
        reportType === "Sales") && (
          <KpiCard
            title="Sales"
            value={totalSales}
            subtitle="Completed Sales"
            icon="projects"
          />
        )}

      {(reportType === "All Reports" ||
        reportType === "Marketing") && (
          <KpiCard
            title="Leads"
            value={totalLeads}
            subtitle="Marketing Leads"
            icon="customers"
          />
        )}

      {(reportType === "All Reports" ||
        reportType === "Employee Performance") && (
          <KpiCard
            title="Performance"
            value={`${averagePerformance}%`}
            subtitle="Employee Average"
            icon="progress"
          />
        )}

    </div>
  );
};

export default ReportStats;