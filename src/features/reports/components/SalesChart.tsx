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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-slate-800">
          Sales Report
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly Sales vs Target Performance
        </p>

      </div>

      {/* Chart */}

      <div className="h-[350px]">

        {data.length === 0 ? (

          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-300">

            <div className="text-center">

              <p className="text-lg font-medium text-slate-600">
                📈 No Sales Data
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try selecting another period.
              </p>

            </div>

          </div>

        ) : (

          <ResponsiveContainer width="100%" height="100%">

            <BarChart data={data}>

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

              <Bar
                dataKey="sales"
                name="Sales"
                fill="#2563eb"
                radius={[8, 8, 0, 0]}
                animationDuration={1000}
              />

              <Bar
                dataKey="target"
                name="Target"
                fill="#10b981"
                radius={[8, 8, 0, 0]}
                animationDuration={1000}
              />

            </BarChart>

          </ResponsiveContainer>

        )}

      </div>

    </div>
  );
};

export default SalesChart;