import KpiCard from "../../../components/ui/KpiCard";
import type { Employee } from "../types/employee.types";

interface Props {
  employees: Employee[];
}

const EmployeeStats = ({ employees }: Props) => {
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees =
    totalEmployees - activeEmployees;

  const averageSalary = Math.round(
    employees.reduce(
      (sum, employee) => sum + employee.salary,
      0
    ) /
      totalEmployees /
      100000
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KpiCard
        title="Total Employees"
        value={totalEmployees}
        subtitle="+12 this month"
        icon="employees"
      />

      <KpiCard
        title="Active Employees"
        value={activeEmployees}
        subtitle="Currently working"
        icon="active"
      />

      <KpiCard
        title="Inactive Employees"
        value={inactiveEmployees}
        subtitle="On leave / inactive"
        icon="inactive"
      />

      <KpiCard
        title="Average Salary"
        value={`₹${averageSalary}L`}
        subtitle="+8% this year"
        icon="salary"
      />

    </div>
  );
};

export default EmployeeStats;