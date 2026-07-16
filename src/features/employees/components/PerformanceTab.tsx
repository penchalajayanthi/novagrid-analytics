import type { Employee } from "../types/employee.types";

interface Props {
  employee: Employee;
}

const PerformanceTab = ({ employee }: Props) => {
  const performance = employee.performance;

  const avgPerformance = Math.round(
    (performance.q1 +
      performance.q2 +
      performance.q3 +
      performance.q4) /
      4
  );

  const performanceColor = (value: number) => {
    if (value >= 90) return "bg-green-500";
    if (value >= 80) return "bg-blue-500";
    if (value >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const skillColor = (value: number) => {
    if (value >= 90) return "bg-green-500";
    if (value >= 80) return "bg-blue-500";
    if (value >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  const skills = employee.skills;

  return (
    <div className="space-y-8">
      {/* Summary Cards */}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Overall Rating
          </p>

          <h2 className="mt-2 text-4xl font-bold text-blue-600">
            {avgPerformance}%
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Average quarterly performance
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Top Skill
          </p>

          <h2 className="mt-2 text-2xl font-semibold">
            {employee.skills[0]?.name}
          </h2>

          <p className="mt-2 text-sm text-green-600">
            Strongest competency
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Skills Count
          </p>

          <h2 className="mt-2 text-4xl font-bold text-indigo-600">
            {employee.skills.length}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Professional skills
          </p>
        </div>
      </div>

     <div className="grid gap-6 lg:grid-cols-2">

  {/* Quarterly Performance */}

  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h2 className="mb-6 text-xl font-semibold">
      Quarterly Performance
    </h2>

    <div className="space-y-5">
      {Object.entries(performance).map(([quarter, value]) => (
        <div key={quarter}>
          <div className="mb-2 flex justify-between">
            <span className="font-medium uppercase">
              {quarter}
            </span>

            <span className="font-semibold">
              {value}%
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div
              className={`h-3 rounded-full transition-all ${performanceColor(
                value
              )}`}
              style={{ width: `${value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Skills Assessment */}

  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h2 className="mb-6 text-xl font-semibold">
      Skills Assessment
    </h2>

    <div className="space-y-5">
      {skills.map((skill) => (
        <div key={skill.name}>
          <div className="mb-2 flex justify-between">
            <span className="font-medium">
              {skill.name}
            </span>

            <span className="font-semibold">
              {skill.level}%
            </span>
          </div>

          <div className="h-3 rounded-full bg-slate-200">
            <div
              className={`h-3 rounded-full transition-all ${skillColor(
                skill.level
              )}`}
              style={{ width: `${skill.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>

</div>
    </div>
  );
};

export default PerformanceTab;