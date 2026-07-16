import type { Employee } from "../types/employee.types";
import {
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiXCircle,
} from "react-icons/fi";

interface Props {
  employee: Employee;
}

const LeaveTab = ({ employee }: Props) => {
  const { leave } = employee;

  return (
    <div className="space-y-6">

      {/* Leave Summary */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiCalendar
            className="mb-3 text-blue-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Annual Leave
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {leave.annual}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Days Remaining
          </p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiCalendar
            className="mb-3 text-green-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Sick Leave
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {leave.sick}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Days Remaining
          </p>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiCalendar
            className="mb-3 text-orange-500"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Casual Leave
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {leave.casual}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Days Remaining
          </p>
        </div>

      </div>

      {/* Leave History */}

      <div className="overflow-hidden rounded-xl border bg-white shadow-sm">

        <div className="border-b px-6 py-4">

          <h2 className="text-lg font-semibold">
            Leave Request History
          </h2>

        </div>

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                From
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                To
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Leave Type
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {leave.history.map((item, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4">
                  {item.from}
                </td>

                <td className="px-6 py-4">
                  {item.to}
                </td>

                <td className="px-6 py-4">
                  {item.type}
                </td>

                <td className="px-6 py-4">

                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status === "Approved" && (
                      <FiCheckCircle />
                    )}

                    {item.status === "Pending" && (
                      <FiClock />
                    )}

                    {item.status === "Rejected" && (
                      <FiXCircle />
                    )}

                    {item.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default LeaveTab;