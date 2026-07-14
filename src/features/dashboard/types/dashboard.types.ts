export interface MonthlyBusinessData {
  month: string;
  revenue: number;
  expenses: number;
  activeUsers: number;
  conversionRate: number;
  newCustomers: number;
}


export interface KPI {
  value: string | number;
  change: string;
}

export interface DashboardKpis {
  revenue: KPI;
  employees: KPI;
  projects: KPI;
  customers: KPI;
}

export interface ProjectStatusItem {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export interface RecentActivityItem {
  id: number;
  title: string;
  description: string;
}

export interface DashboardData {
  kpis: DashboardKpis;
  revenueData: MonthlyBusinessData[];
  projectStatus: ProjectStatusItem[];
  recentActivities: RecentActivityItem[];
}