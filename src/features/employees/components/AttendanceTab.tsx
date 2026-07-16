import type { Employee } from "../types/employee.types";
import {
  FiCheckCircle,
  FiXCircle,
  FiCalendar,
} from "react-icons/fi";

interface Props {
  employee: Employee;
}

const AttendanceTab = ({ employee }: Props) => {
  const total =
    employee.attendance.present +
    employee.attendance.absent +
    employee.attendance.leave;

  const percentage = Math.round(
    (employee.attendance.present / total) * 100
  );

  return (
    <div className="space-y-6">

      <div className="grid gap-6 md:grid-cols-4">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiCheckCircle
            className="mb-3 text-green-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Present Days
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {employee.attendance.present}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiXCircle
            className="mb-3 text-red-500"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Absent Days
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {employee.attendance.absent}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiCalendar
            className="mb-3 text-blue-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Leave Days
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {employee.attendance.leave}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Attendance %
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {percentage}%
          </h2>
        </div>

      </div>

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <div className="mb-2 flex justify-between">
          <span className="font-medium">
            Attendance Progress
          </span>

          <span className="font-semibold">
            {percentage}%
          </span>
        </div>

        <div className="h-3 rounded-full bg-slate-200">

          <div
            className="h-3 rounded-full bg-blue-600"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default AttendanceTab;