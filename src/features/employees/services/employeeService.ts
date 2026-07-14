import { employees } from "../data/employees";

export const getEmployees = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return employees;
};