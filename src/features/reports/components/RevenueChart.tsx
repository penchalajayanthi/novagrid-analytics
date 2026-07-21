import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import type { RevenueData } from "../types/report.types";

interface RevenueChartProps {
  data: RevenueData[];
  loading: boolean;
}

const RevenueChart = ({
  data,
  loading,
}: RevenueChartProps) => {
  if (loading) {
    return (
      <div className="h-[420px] animate-pulse rounded-2xl bg-slate-200" />
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold">
        Revenue Report
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              dataKey="revenue"
              stroke="#2563eb"
              strokeWidth={3}
            />

            <Line
              dataKey="profit"
              stroke="#16a34a"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default RevenueChart;