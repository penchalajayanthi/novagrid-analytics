import { FiInbox } from "react-icons/fi";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

const EmptyState = ({
  title = "No Data Found",
  description = "There is nothing to display at the moment.",
  icon,
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500">
        {icon ?? <FiInbox size={32} />}
      </div>

      <h3 className="text-lg font-semibold text-slate-800">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
};

export default EmptyState;