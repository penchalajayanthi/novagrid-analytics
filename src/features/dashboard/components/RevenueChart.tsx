import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

interface Props {
  data: any[];
}

const RevenueChart = ({ data }: Props) => {
    return (
        <div className="rounded-xl border bg-white p-6 shadow-md">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-800">
                    Revenue Overview
                </h2>

                <span className="rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    2026
                </span>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="month" />

                        <YAxis />
                        <Tooltip
                            formatter={(value) => [
                                `$${Number(value).toLocaleString()}`,
                                "Revenue",
                            ]}
                        />

                        <Line
                            type="monotone"
                            dataKey="revenue"
                            stroke="#2563EB"
                            strokeWidth={3}
                            dot={{ r: 4 }}
                            activeDot={{ r: 7 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;