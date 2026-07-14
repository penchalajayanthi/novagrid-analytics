interface Props {
  data: any[];
}

const ProjectStatus = ({ data }: Props) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-6 text-lg font-semibold text-slate-800">
        Project Status
      </h2>

      <div className="space-y-5">
        {data.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>

              <span className="text-sm font-semibold text-gray-800">
                {item.count}
              </span>
            </div>

            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className={`${item.color} h-2 rounded-full`}
                style={{ width: `${item.percentage}%` }}
              />
            </div>

            <p className="mt-1 text-right text-xs text-gray-500">
              {item.percentage}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStatus;