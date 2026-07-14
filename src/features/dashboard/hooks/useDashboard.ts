import { useEffect, useState } from "react";
import { getDashboardData } from "../services/dashboardService";
import type { DashboardData } from "../types/dashboard.types";

export const useDashboard = () => {
 const [dashboardData, setDashboardData] =
  useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const data = await getDashboardData();
        setDashboardData(data);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return {
    dashboardData,
    loading,
  };
};