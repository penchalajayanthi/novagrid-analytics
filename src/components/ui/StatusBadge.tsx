interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const colors =
    status === "Active"
      ? "bg-green-100 text-green-700"
      : status === "Inactive"
      ? "bg-red-100 text-red-700"
      : "bg-yellow-100 text-yellow-700";

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${colors}`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;