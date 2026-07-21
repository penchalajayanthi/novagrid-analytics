
import { faker } from "@faker-js/faker";

import type {
  RevenueData,
  SalesData,
  MarketingData,
  EmployeePerformance,
  ReportSummary,
} from "../types/report.types";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const revenueData: RevenueData[] =
  months.map((month) => ({
    month,
    revenue: faker.number.int({
      min: 80000,
      max: 180000,
    }),
    profit: faker.number.int({
      min: 20000,
      max: 70000,
    }),
  }));

export const salesData: SalesData[] =
  months.map((month) => ({
    month,
    sales: faker.number.int({
      min: 120,
      max: 260,
    }),
    target: faker.number.int({
      min: 150,
      max: 260,
    }),
  }));

export const marketingData: MarketingData[] =
  months.map((month) => ({
    month,
    leads: faker.number.int({
      min: 400,
      max: 1300,
    }),
    conversions: faker.number.int({
      min: 80,
      max: 260,
    }),
  }));

export const employeePerformance: EmployeePerformance[] =
  Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,

    name: faker.person.fullName(),

    email: faker.internet.email(),

    avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,

    department: faker.helpers.arrayElement([
      "Engineering",
      "Sales",
      "Marketing",
      "Finance",
      "HR",
      "Operations",
    ]),

    projects: faker.number.int({
      min: 1,
      max: 10,
    }),

    attendance: faker.number.int({
      min: 85,
      max: 100,
    }),

    performance: faker.number.int({
      min: 70,
      max: 100,
    }),
  }));

export const reportSummary: ReportSummary = {
  totalRevenue: revenueData.reduce(
    (sum, item) => sum + item.revenue,
    0
  ),

  totalSales: salesData.reduce(
    (sum, item) => sum + item.sales,
    0
  ),

  totalLeads: marketingData.reduce(
    (sum, item) => sum + item.leads,
    0
  ),

  averagePerformance: Math.round(
    employeePerformance.reduce(
      (sum, employee) =>
        sum + employee.performance,
      0
    ) / employeePerformance.length
  ),
};