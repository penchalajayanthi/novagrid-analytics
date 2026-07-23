import type {
  TeamMember,
} from "../types/collaboration.types";

interface Props {
  members: TeamMember[];
}

const OnlineMembers = ({
  members,
}: Props) => {
  const online =
    members.filter(
      (member) =>
        member.status ===
        "Online"
    );

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-lg font-bold">
        Online Members
      </h2>

      <div className="flex flex-wrap gap-5">

        {online.map((member) => (

          <div
            key={member.id}
            className="flex flex-col items-center"
          >

            <div className="relative">

              <img
                src={member.avatar}
                alt={member.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-green-500" />

            </div>

            <p className="mt-2 text-sm font-semibold">
              {member.name}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default OnlineMembers;