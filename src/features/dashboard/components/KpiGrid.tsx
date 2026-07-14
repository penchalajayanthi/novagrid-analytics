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
        change={kpis.revenue.change}
      />

      <KpiCard
        title="Employees"
        value={kpis.employees.value}
        change={kpis.employees.change}
      />

      <KpiCard
        title="Projects"
        value={kpis.projects.value}
        change={kpis.projects.change}
      />

      <KpiCard
        title="Customers"
        value={kpis.customers.value}
        change={kpis.customers.change}
      />
    </div>
  );
};

export default KpiGrid;