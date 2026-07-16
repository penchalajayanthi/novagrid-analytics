import {
  Users,
  UserCheck,
  UserX,
  IndianRupee,
} from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: "employees" | "active" | "inactive" | "salary";
}

const KpiCard = ({
  title,
  value,
  subtitle,
  icon,
}: KpiCardProps) => {
  const icons = {
    employees: (
      <Users className="h-7 w-7 text-blue-600" />
    ),
    active: (
      <UserCheck className="h-7 w-7 text-green-600" />
    ),
    inactive: (
      <UserX className="h-7 w-7 text-red-600" />
    ),
    salary: (
      <IndianRupee className="h-7 w-7 text-amber-600" />
    ),
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-800">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div className="rounded-xl bg-slate-100 p-3">
          {icons[icon]}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;