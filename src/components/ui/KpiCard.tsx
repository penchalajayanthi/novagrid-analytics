import {
  Users,
  UserCheck,
  UserX,
  IndianRupee,
  Building2,
  HeartPulse,
  FolderKanban,
  TrendingUp, Award,
} from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: string;
}


const KpiCard = ({
  title,
  value,
  subtitle,
  icon,
}: KpiCardProps) => {
  const icons: Record<string, JSX.Element> = {
    // Employee Module
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

    // Customer Module
    customers: (
      <Building2 className="h-7 w-7 text-indigo-600" />
    ),

    healthy: (
      <HeartPulse className="h-7 w-7 text-green-600" />
    ),

    revenue: (
      <IndianRupee className="h-7 w-7 text-emerald-600" />
    ),

    enterprise: (
      <Building2 className="h-7 w-7 text-purple-600" />
    ),
    projects: (
      <FolderKanban className="h-7 w-7 text-indigo-600" />
    ),

    progress: (
      <TrendingUp className="h-7 w-7 text-emerald-600" />
    ),

    performance: (
      <Award className="h-7 w-7 text-violet-600" />
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
          {icons[icon] ?? (
            <Users className="h-7 w-7 text-slate-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default KpiCard;