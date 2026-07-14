import DashboardHeader from "../components/DashboardHeader";
import KpiGrid from "../components/KpiGrid";
import RevenueChart from "../components/RevenueChart";
import ProjectStatus from "../components/ProjectStatus";
import RecentActivity from "../components/RecentActivity";
import QuickActions from "../components/QuickActions";

import { useDashboard } from "../hooks/useDashboard";
import { SkeletonCard } from "../../../components/ui";

const Dashboard = () => {
  const { dashboardData, loading } = useDashboard();

  if (loading || !dashboardData) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <DashboardHeader />

      <KpiGrid kpis={dashboardData.kpis} />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart data={dashboardData.revenueData} />
        </div>

        <ProjectStatus data={dashboardData.projectStatus} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentActivity data={dashboardData.recentActivities} />

        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;