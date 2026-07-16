import type { Employee } from "../types/employee.types";

interface Props {
  employee: Employee;
}

const OverviewTab = ({ employee }: Props) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-4 text-lg font-semibold">
          Personal Information
        </h2>

        <div className="space-y-3">

          <p>
            <strong>Email:</strong>{" "}
            {employee.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {employee.phone}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {employee.address}
          </p>

        </div>

      </div>

      <div className="rounded-xl bg-white p-6 shadow">

        <h2 className="mb-4 text-lg font-semibold">
          Employment
        </h2>

        <div className="space-y-3">

          <p>
            <strong>Manager:</strong>{" "}
            {employee.manager}
          </p>

          <p>
            <strong>Department:</strong>{" "}
            {employee.department}
          </p>

          <p>
            <strong>Employment:</strong>{" "}
            {employee.employmentType}
          </p>

          <p>
            <strong>Joined:</strong>{" "}
            {employee.joinDate}
          </p>

        </div>

      </div>

    </div>
  );
};

export default OverviewTab;