import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import type { SalesData } from "../types/report.types";

interface SalesChartProps {
  data: SalesData[];
  loading: boolean;
}

const SalesChart = ({
  data,
  loading,
}: SalesChartProps) => {
  if (loading) {
    return (
      <div className="h-[420px] animate-pulse rounded-2xl bg-slate-200" />
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold">
        Sales Report
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer>

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="sales"
              fill="#2563eb"
              radius={[6, 6, 0, 0]}
            />

            <Bar
              dataKey="target"
              fill="#10b981"
              radius={[6, 6, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default SalesChart;