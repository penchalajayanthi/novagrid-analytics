export interface RevenueData {
  month: string;
  revenue: number;
  profit: number;
}

export interface SalesData {
  month: string;
  sales: number;
  target: number;
}

export interface MarketingData {
  month: string;
  leads: number;
  conversions: number;
}

export interface EmployeePerformance {
  id: number;

  name: string;

  email: string;

  avatar: string;

  department: string;

  projects: number;

  attendance: number;

  performance: number;
}

export interface ReportSummary {
  totalRevenue: number;
  totalSales: number;
  totalLeads: number;
  averagePerformance: number;
}