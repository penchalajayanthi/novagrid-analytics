import type { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  className?: string;
}

const SectionCard = ({
  title,
  children,
  action,
  className = "",
}: SectionCardProps) => {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
        <h2 className="text-lg font-semibold text-slate-800">
          {title}
        </h2>

        {action && <div>{action}</div>}
      </div>

      {/* Body */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default SectionCard;