import ProjectHeader from "../components/ProjectHeader";
import ProjectStats from "../components/ProjectStats";
import MilestonesTimeline from "../components/MilestonesTimeline";
import TeamMembers from "../components/TeamMembers";

const ProjectProfile = () => {
  return (
    <div className="space-y-8">

      {/* Project Header */}
      <ProjectHeader />

      {/* Statistics */}
      <ProjectStats />

      {/* Bottom Grid */}
      <div className="grid gap-8 lg:grid-cols-2">

        {/* Left */}
        <MilestonesTimeline />

        {/* Right */}
        <TeamMembers />

      </div>

    </div>
  );
};

export default ProjectProfile;