import { projects } from "../data/projects";

const TeamMembers = () => {
  const members = projects[0].team;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-xl font-bold text-slate-800">
          Team Members
        </h2>

        <span className="text-sm text-slate-500">
          {members.length} Members
        </span>

      </div>

      <div className="space-y-4">

        {members.map((member) => (

          <div
            key={member.id}
            className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >

            <div className="flex items-center gap-4">

              <img
                src={member.avatar}
                alt={member.name}
                className="h-12 w-12 rounded-full border object-cover"
              />

              <div>

                <h3 className="font-semibold text-slate-800">
                  {member.name}
                </h3>

               

              </div>

            </div>

            <div className="text-right">

              <div className="flex items-center justify-end gap-2">

                <span className="h-3 w-3 rounded-full bg-green-500"></span>

                <span className="text-sm font-medium text-green-600">
                  Online
                </span>

              </div>

              <p className="mt-2 text-xs text-slate-500">
                Active Now
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default TeamMembers;