import { useState } from "react";

import ReportHeader from "../components/ReportHeader";
import ReportFilters from "../components/ReportFilters";
import ReportStats from "../components/ReportStats";
import RevenueChart from "../components/RevenueChart";
import SalesChart from "../components/SalesChart";
import MarketingChart from "../components/MarketingChart";
import EmployeePerformanceTable from "../components/EmployeePerformanceTable";

import { useReports } from "../hooks/useReports";

const Reports = () => {
  const {
    revenue,
    sales,
    marketing,
    employees,
    loading,

    period,
    setPeriod,

    department,
    setDepartment,
  } = useReports();

  const [reportType, setReportType] =
    useState("All Reports");

  return (
    <div className="space-y-8">

      <ReportHeader
        employees={employees}
      />

      <ReportFilters
        period={period}
        department={department}
        reportType={reportType}
        onPeriodChange={setPeriod}
        onDepartmentChange={
          setDepartment
        }
        onReportTypeChange={
          setReportType
        }
      />

      <ReportStats
        revenue={revenue}
        sales={sales}
        marketing={marketing}
        employees={employees}
        loading={loading}
        reportType={reportType}
      />

      <div className="grid gap-6 xl:grid-cols-2">

        {(reportType ===
          "All Reports" ||
          reportType ===
          "Revenue") && (
            <RevenueChart
              data={revenue}
              loading={loading}
            />
          )}

        {(reportType ===
          "All Reports" ||
          reportType ===
          "Sales") && (
            <SalesChart
              data={sales}
              loading={loading}
            />
          )}

      </div>

      {(reportType ===
        "All Reports" ||
        reportType ===
        "Marketing") && (
          <MarketingChart
            data={marketing}
            loading={loading}
          />
        )}

      {(reportType ===
        "All Reports" ||
        reportType ===
        "Employee Performance") && (
          <EmployeePerformanceTable
            employees={employees}
            loading={loading}
          />
        )}

    </div>
  );
};

export default Reports;