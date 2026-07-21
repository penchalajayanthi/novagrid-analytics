import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import type { MarketingData } from "../types/report.types";

interface MarketingChartProps {
  data: MarketingData[];
  loading: boolean;
}

const MarketingChart = ({
  data,
  loading,
}: MarketingChartProps) => {
  if (loading) {
    return (
      <div className="h-[420px] animate-pulse rounded-2xl bg-slate-200" />
    );
  }

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-semibold">
        Marketing Report
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer>

          <AreaChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Area
              dataKey="leads"
              stroke="#2563eb"
              fill="#93c5fd"
            />

            <Area
              dataKey="conversions"
              stroke="#16a34a"
              fill="#86efac"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default MarketingChart;