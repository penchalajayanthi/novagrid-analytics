import { useEffect, useState } from "react";

import { reportService } from "../services/reportService";

import type {
  RevenueData,
  SalesData,
  MarketingData,
  EmployeePerformance,
  ReportSummary,
} from "../types/report.types";

export const useReports = () => {
  const [revenue, setRevenue] = useState<RevenueData[]>([]);
  const [sales, setSales] = useState<SalesData[]>([]);
  const [marketing, setMarketing] =
    useState<MarketingData[]>([]);
  const [employees, setEmployees] =
    useState<EmployeePerformance[]>([]);
  const [summary, setSummary] =
    useState<ReportSummary | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadReports = async () => {
      setLoading(true);

      const [
        revenueData,
        salesData,
        marketingData,
        employeeData,
        summaryData,
      ] = await Promise.all([
        reportService.getRevenue(),
        reportService.getSales(),
        reportService.getMarketing(),
        reportService.getEmployeePerformance(),
        reportService.getSummary(),
      ]);

      setRevenue(revenueData);
      setSales(salesData);
      setMarketing(marketingData);
      setEmployees(employeeData);
      setSummary(summaryData);

      setLoading(false);
    };

    loadReports();
  }, []);

  return {
    revenue,
    sales,
    marketing,
    employees,
    summary,
    loading,
  };
};