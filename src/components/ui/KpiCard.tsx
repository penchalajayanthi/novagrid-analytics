interface KpiCardProps {
  title: string;
  value: string | number;
  change: string;
}

const KpiCard = ({ title, value, change }: KpiCardProps) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h3 className="text-sm text-gray-500">{title}</h3>

      <h2 className="mt-2 text-3xl font-bold text-gray-800">
        {value}
      </h2>

      <p
        className={`mt-2 text-sm font-medium ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </p>
    </div>
  );
};

export default KpiCard;