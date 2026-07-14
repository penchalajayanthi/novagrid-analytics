import { monthlyBusinessData } from "../../../data/monthlyBusinessData";

export const getCurrentMonthData = () => {
  return monthlyBusinessData[monthlyBusinessData.length - 1];
};

export const getPreviousMonthData = () => {
  return monthlyBusinessData[monthlyBusinessData.length - 2];
};

export const calculateProfit = () => {
  const current = getCurrentMonthData();
  return current.revenue - current.expenses;
};

export const calculateRevenueDelta = () => {
  const current = getCurrentMonthData();
  const previous = getPreviousMonthData();

  return (
    ((current.revenue - previous.revenue) / previous.revenue) * 100
  ).toFixed(1);
};

export const calculateProfitDelta = () => {
  const current = getCurrentMonthData();
  const previous = getPreviousMonthData();

  const currentProfit = current.revenue - current.expenses;
  const previousProfit = previous.revenue - previous.expenses;

  return (
    ((currentProfit - previousProfit) / previousProfit) * 100
  ).toFixed(1);
};