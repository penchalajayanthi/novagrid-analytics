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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-slate-800">
          Marketing Report
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Monthly Leads vs Conversions
        </p>

      </div>

      {/* Chart */}

      <div className="h-[350px]">

        {data.length === 0 ? (

          <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-300">

            <div className="text-center">

              <p className="text-lg font-medium text-slate-600">
                📣 No Marketing Data
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Try selecting another period.
              </p>

            </div>

          </div>

        ) : (

          <ResponsiveContainer width="100%" height="100%">

            <AreaChart data={data}>

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

              <Area
                type="monotone"
                dataKey="leads"
                name="Leads"
                stroke="#2563eb"
                fill="#93c5fd"
                strokeWidth={3}
                animationDuration={1000}
              />

              <Area
                type="monotone"
                dataKey="conversions"
                name="Conversions"
                stroke="#16a34a"
                fill="#86efac"
                strokeWidth={3}
                animationDuration={1000}
              />

            </AreaChart>

          </ResponsiveContainer>

        )}

      </div>

    </div>
  );
};

export default MarketingChart;