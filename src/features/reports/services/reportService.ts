import {
  revenueData,
  salesData,
  marketingData,
  employeePerformance,
  reportSummary,
} from "../data/reports";

const delay = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

export const reportService = {
  async getRevenue() {
    await delay(500);

    return revenueData;
  },

  async getSales() {
    await delay(500);

    return salesData;
  },

  async getMarketing() {
    await delay(500);

    return marketingData;
  },

  async getEmployeePerformance() {
    await delay(500);

    return employeePerformance;
  },

  async getSummary() {
    await delay(300);

    return reportSummary;
  },
};