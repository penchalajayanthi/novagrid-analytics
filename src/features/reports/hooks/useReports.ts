import { useEffect, useMemo, useState } from "react";

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
  const [marketing, setMarketing] = useState<MarketingData[]>([]);
  const [employees, setEmployees] = useState<EmployeePerformance[]>([]);
  const [summary, setSummary] =
    useState<ReportSummary | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [period, setPeriod] =
    useState("This Year");

  const [department, setDepartment] =
    useState("All Departments");

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

  const filteredRevenue =
    useMemo(() => {
      switch (period) {
        case "This Week":
        case "This Month":
          return revenue.slice(-1);

        case "Last 3 Months":
          return revenue.slice(-3);

        case "Last 6 Months":
          return revenue.slice(-6);

        default:
          return revenue;
      }
    }, [revenue, period]);

  const filteredSales =
    useMemo(() => {
      switch (period) {
        case "This Week":
        case "This Month":
          return sales.slice(-1);

        case "Last 3 Months":
          return sales.slice(-3);

        case "Last 6 Months":
          return sales.slice(-6);

        default:
          return sales;
      }
    }, [sales, period]);

  const filteredMarketing =
    useMemo(() => {
      switch (period) {
        case "This Week":
        case "This Month":
          return marketing.slice(-1);

        case "Last 3 Months":
          return marketing.slice(-3);

        case "Last 6 Months":
          return marketing.slice(-6);

        default:
          return marketing;
      }
    }, [marketing, period]);

  const filteredEmployees =
    useMemo(() => {
      if (
        department ===
        "All Departments"
      )
        return employees;

      return employees.filter(
        (employee) =>
          employee.department ===
          department
      );
    }, [employees, department]);

  return {
    revenue: filteredRevenue,
    sales: filteredSales,
    marketing: filteredMarketing,
    employees: filteredEmployees,
    summary,
    loading,

    period,
    setPeriod,

    department,
    setDepartment,
  };
};