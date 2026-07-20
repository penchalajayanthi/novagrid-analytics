import KpiCard from "../../../components/ui/KpiCard";
import type { Customer } from "../types/customer.types";

interface Props {
  customers: Customer[];
}

const CustomerStats = ({ customers }: Props) => {
  const totalCustomers = customers.length;

  const healthyCustomers = customers.filter(
    (customer) => customer.health === "Healthy"
  ).length;

  const enterpriseCustomers = customers.filter(
    (customer) => customer.segment === "Enterprise"
  ).length;

  const totalRevenue = customers.reduce(
    (sum, customer) => sum + customer.lifetimeValue,
    0
  );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KpiCard
        title="Total Customers"
        value={totalCustomers}
        subtitle="Registered Accounts"
        icon="customers"
      />

      <KpiCard
        title="Healthy Accounts"
        value={healthyCustomers}
        subtitle="Performing Well"
        icon="active"
      />

      <KpiCard
        title="Lifetime Value"
        value={`₹${(
          totalRevenue / 10000000
        ).toFixed(1)}Cr`}
        subtitle="Combined Revenue"
        icon="salary"
      />

      <KpiCard
        title="Enterprise"
        value={enterpriseCustomers}
        subtitle="Large Businesses"
        icon="employees"
      />

    </div>
  );
};

export default CustomerStats;