import type { Employee } from "../types/employee.types";
import {
  FiDollarSign,
  FiTrendingUp,
  FiCreditCard,
} from "react-icons/fi";

interface Props {
  employee: Employee;
}

const SalaryTab = ({ employee }: Props) => {
  const { salary } = employee;

  return (
    <div className="space-y-6">

      {/* Salary Summary */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiDollarSign
            className="mb-3 text-green-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Salary Band
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {salary.band}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiTrendingUp
            className="mb-3 text-blue-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Monthly Net Salary
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            ₹{salary.net.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <FiCreditCard
            className="mb-3 text-purple-600"
            size={28}
          />

          <p className="text-sm text-slate-500">
            Annual Package
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            ₹{(salary.net * 12).toLocaleString()}
          </h2>
        </div>

      </div>

      {/* Salary Components */}

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-lg font-semibold">
          Salary Components
        </h2>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="flex justify-between rounded-lg border p-4">
            <span>Basic Salary</span>
            <span className="font-semibold">
              ₹{salary.basic.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between rounded-lg border p-4">
            <span>HRA</span>
            <span className="font-semibold">
              ₹{salary.hra.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between rounded-lg border p-4">
            <span>Allowance</span>
            <span className="font-semibold">
              ₹{salary.allowance.toLocaleString()}
            </span>
          </div>

          <div className="flex justify-between rounded-lg border p-4">
            <span>Bonus</span>
            <span className="font-semibold">
              ₹{salary.bonus.toLocaleString()}
            </span>
          </div>

        </div>

      </div>

      {/* Salary History */}

      <div className="rounded-xl border bg-white shadow-sm">

        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold">
            Salary History
          </h2>
        </div>

        <table className="w-full">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Effective Date
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Band
              </th>

              <th className="px-6 py-3 text-left text-sm font-semibold">
                Monthly Salary
              </th>

            </tr>

          </thead>

          <tbody>

            {salary.history.map((item, index) => (

              <tr
                key={index}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4">
                  {item.date}
                </td>

                <td className="px-6 py-4">
                  {item.band}
                </td>

                <td className="px-6 py-4 font-semibold text-green-600">
                  ₹{item.amount.toLocaleString()}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SalaryTab;