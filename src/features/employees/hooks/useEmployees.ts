import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types/employee.types";

export const useEmployees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEmployees().then((data) => {
      setEmployees(data);
      setLoading(false);
    });
  }, []);

  return {
    employees,
    loading,
  };
};