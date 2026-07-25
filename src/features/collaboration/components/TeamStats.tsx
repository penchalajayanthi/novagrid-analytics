import KpiCard from "../../../components/ui/KpiCard";

import type {
  CollaborationStats,
} from "../types/collaboration.types";

interface Props {
  stats: CollaborationStats | null;
  loading: boolean;
}

const TeamStats = ({
  stats,
  loading,
}: Props) => {
  if (loading || !stats) {
    return (
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-36 animate-pulse rounded-2xl bg-slate-200"
            />
          )
        )}
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KpiCard
        title="Members"
        value={stats.totalMembers}
        subtitle="Team Members"
        icon="customers"
      />

      <KpiCard
        title="Online"
        value={stats.onlineMembers}
        subtitle="Currently Active"
        icon="employees"
      />

      <KpiCard
        title="Messages"
        value={stats.totalMessages}
        subtitle="Total Messages"
        icon="projects"
      />

      <KpiCard
        title="Files"
        value={stats.sharedFiles}
        subtitle="Shared Files"
        icon="files"
      />

    </div>
  );
};

export default TeamStats;