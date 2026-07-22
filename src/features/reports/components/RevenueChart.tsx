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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-slate-800">
          Revenue Report
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly Revenue vs Profit Analysis
        </p>

      </div>

      {/* Chart */}

      <div className="h-[350px]">

        {data.length === 0 ? (

          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-300">

            <div className="text-center">

              <p className="text-lg font-medium text-slate-600">
                📊 No Revenue Data
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try selecting another period.
              </p>

            </div>

          </div>

        ) : (

          <ResponsiveContainer width="100%" height="100%">

            <LineChart data={data}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e2e8f0"
              />

              <XAxis
                dataKey="month"
                tick={{
                  fill: "#64748b",
                }}
              />

              <YAxis
                tick={{
                  fill: "#64748b",
                }}
              />

              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e2e8f0",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)",
                }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                animationDuration={1000}
              />

              <Line
                type="monotone"
                dataKey="profit"
                name="Profit"
                stroke="#16a34a"
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
                animationDuration={1000}
              />

            </LineChart>

          </ResponsiveContainer>

        )}

      </div>

    </div>
  );
};

export default RevenueChart;