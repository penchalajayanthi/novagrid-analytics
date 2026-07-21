import KpiCard from "../../../components/ui/KpiCard";

import type { ReportSummary } from "../types/report.types";

interface ReportStatsProps {
  summary: ReportSummary | null;
  loading: boolean;
}

const ReportStats = ({
  summary,
  loading,
}: ReportStatsProps) => {
  if (loading || !summary) {
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

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KpiCard
        title="Revenue"
        value={`₹${summary.totalRevenue.toLocaleString()}`}
        subtitle="Total Revenue"
        icon="revenue"
      />

      <KpiCard
        title="Sales"
        value={summary.totalSales}
        subtitle="Completed Sales"
        icon="projects"
      />

      <KpiCard
        title="Leads"
        value={summary.totalLeads}
        subtitle="Marketing Leads"
        icon="customers"
      />

      <KpiCard
        title="Performance"
        value={`${summary.averagePerformance}%`}
        subtitle="Employee Average"
        icon="progress"
      />

    </div>
  );
};

export default ReportStats;