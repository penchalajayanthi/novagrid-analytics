import type { Employee } from "../types/employee.types";
import StatusBadge from "../../../components/ui/StatusBadge";

interface Props {
  employee: Employee;
}

const ProfileHeader = ({ employee }: Props) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="flex items-center gap-6">

        <img
          src={employee.avatar}
          alt={employee.name}
          className="h-24 w-24 rounded-full border object-cover"
        />

        <div>

          <h1 className="text-3xl font-bold">
            {employee.name}
          </h1>

          <p className="text-slate-500">
            {employee.role}
          </p>

          <div className="mt-3 flex flex-wrap gap-3">

            <span>{employee.department}</span>

            <span>•</span>

            <span>{employee.location}</span>

            <span>•</span>

            <StatusBadge
              status={employee.status}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfileHeader;