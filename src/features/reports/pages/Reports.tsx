import { useMemo, useState } from "react";

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
    summary,
    loading,
  } = useReports();

  const [period, setPeriod] =
    useState("This Year");

  const [department, setDepartment] =
    useState("All Departments");

  const [reportType, setReportType] =
    useState("All Reports");

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

  return (
    <div className="space-y-8">

      {/* Header */}

    
<ReportHeader
  employees={employees}
/>
      {/* Filters */}

      <ReportFilters
        period={period}
        department={department}
        reportType={reportType}
        onPeriodChange={
          setPeriod
        }
        onDepartmentChange={
          setDepartment
        }
        onReportTypeChange={
          setReportType
        }
      />

      {/* KPI Cards */}

      <ReportStats
        summary={summary}
        loading={loading}
      />

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <RevenueChart
          data={revenue}
          loading={loading}
        />

        <SalesChart
          data={sales}
          loading={loading}
        />

      </div>

      <MarketingChart
        data={marketing}
        loading={loading}
      />

      {/* Employee Performance */}

      <EmployeePerformanceTable
        employees={
          filteredEmployees
        }
        loading={loading}
      />

    </div>
  );
};

export default Reports;