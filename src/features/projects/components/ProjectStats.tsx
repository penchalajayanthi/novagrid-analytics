import KpiCard from "../../../components/ui/KpiCard";
import { useProjectStore } from "../store/projectStore";

const ProjectStats = () => {
  const { tasks } = useProjectStore();

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Done"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks / totalTasks) * 100
        );

  return (
    <div className="grid gap-6 md:grid-cols-4">
      <KpiCard
        title="Total Tasks"
        value={totalTasks}
        subtitle="Across all projects"
        icon="projects"
      />

      <KpiCard
        title="Completed"
        value={completedTasks}
        subtitle={`${progress}% Completed`}
        icon="active"
      />

      <KpiCard
        title="In Progress"
        value={inProgressTasks}
        subtitle="Currently Working"
        icon="employees"
      />

      <KpiCard
        title="Progress"
        value={`${progress}%`}
        subtitle="Overall Completion"
        icon="progress"
      />
    </div>
  );
};

export default ProjectStats;