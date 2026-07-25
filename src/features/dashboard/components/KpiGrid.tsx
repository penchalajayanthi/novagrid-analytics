import KpiCard from "../../../components/ui/KpiCard";

interface Props {
  kpis: any;
}

const KpiGrid = ({ kpis }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

      <KpiCard
        title="Revenue"
        value={kpis.revenue.value}
        subtitle="Total Revenue"
        icon="revenue"
      />

      <KpiCard
        title="Employees"
        value={kpis.employees.value}
        subtitle="Total Employees"
        icon="employees"
      />

      <KpiCard
        title="Projects"
        value={kpis.projects.value}
        subtitle="Active Projects"
        icon="projects"
      />

      <KpiCard
        title="Customers"
        value={kpis.customers.value}
        subtitle="Total Customers"
        icon="customers"
      />

    </div>
  );
};

export default KpiGrid;