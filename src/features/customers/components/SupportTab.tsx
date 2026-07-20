import type { Customer } from "../types/customer.types";

interface Props {
  customer: Customer;
}

const SupportTab = ({ customer }: Props) => {
  const healthColors = {
    Healthy:
      "bg-green-100 text-green-700 border-green-200",

    Watch:
      "bg-yellow-100 text-yellow-700 border-yellow-200",

    "At Risk":
      "bg-red-100 text-red-700 border-red-200",
  };

  const slaColors = {
    "On Track":
      "bg-green-100 text-green-700",

    Delayed:
      "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-6">

      {/* KPI Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Open Tickets
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {customer.support.openTickets}
          </h2>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            SLA Status
          </p>

          <div className="mt-3">

            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                slaColors[customer.support.sla]
              }`}
            >
              {customer.support.sla}
            </span>

          </div>

        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Customer Health
          </p>

          <div className="mt-3">

            <span
              className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                healthColors[customer.health]
              }`}
            >
              {customer.health}
            </span>

          </div>

        </div>

      </div>

      {/* Details */}

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-6 text-xl font-semibold">
          Support Overview
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          <div>

            <p className="text-sm text-slate-500">
              Current Open Tickets
            </p>

            <p className="mt-2 text-lg font-semibold">
              {customer.support.openTickets}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              SLA Compliance
            </p>

            <p className="mt-2 text-lg font-semibold">
              {customer.support.sla}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Customer Health
            </p>

            <p className="mt-2 text-lg font-semibold">
              {customer.health}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Last Activity
            </p>

            <p className="mt-2 text-lg font-semibold">
              {customer.lastActivity}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SupportTab;