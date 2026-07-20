import type { Customer } from "../types/customer.types";

interface Props {
  customer: Customer;
}

const CustomerHeader = ({ customer }: Props) => {
  const healthColor = {
    Healthy:
      "bg-green-100 text-green-700 border-green-200",

    Watch:
      "bg-amber-100 text-amber-700 border-amber-200",

    "At Risk":
      "bg-red-100 text-red-700 border-red-200",
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          <img
            src={customer.logo}
            alt={customer.company}
            className="h-20 w-20 rounded-2xl border object-cover"
          />

          <div>

            <h1 className="text-3xl font-bold text-slate-900">
              {customer.company}
            </h1>

            <p className="mt-1 text-slate-600">
              {customer.contactName}
            </p>

            <p className="text-sm text-slate-500">
              {customer.email}
            </p>

            <p className="text-sm text-slate-500">
              {customer.phone}
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col items-start gap-3 lg:items-end">

          <span
            className={`rounded-full border px-4 py-2 text-sm font-semibold ${
              healthColor[customer.health]
            }`}
          >
            {customer.health}
          </span>

          <div className="text-right">

            <p className="text-sm text-slate-500">
              Lifetime Value
            </p>

            <h2 className="text-3xl font-bold text-blue-600">
              ₹
              {customer.lifetimeValue.toLocaleString()}
            </h2>

          </div>

        </div>

      </div>

      {/* Bottom Info */}

      <div className="mt-6 grid gap-5 border-t pt-6 md:grid-cols-4">

        <div>

          <p className="text-xs uppercase text-slate-400">
            Segment
          </p>

          <p className="mt-1 font-semibold">
            {customer.segment}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase text-slate-400">
            Website
          </p>

          <p className="mt-1 font-semibold">
            {customer.website}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase text-slate-400">
            Last Activity
          </p>

          <p className="mt-1 font-semibold">
            {customer.lastActivity}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase text-slate-400">
            Address
          </p>

          <p className="mt-1 font-semibold">
            {customer.address}
          </p>

        </div>

      </div>

    </div>
  );
};

export default CustomerHeader;