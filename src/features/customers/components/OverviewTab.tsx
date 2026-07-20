import type { Customer } from "../types/customer.types";

interface Props {
  customer: Customer;
}

const OverviewTab = ({ customer }: Props) => {
  return (
    <div className="grid gap-6 lg:grid-cols-2">

      {/* Company Information */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-lg font-semibold">
          Company Information
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-xs uppercase text-slate-400">
              Company
            </p>

            <p className="font-medium">
              {customer.company}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Website
            </p>

            <a
              href={`https://${customer.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              {customer.website}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Address
            </p>

            <p>{customer.address}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Segment
            </p>

            <p>{customer.segment}</p>
          </div>

        </div>

      </div>

      {/* Contact Information */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-lg font-semibold">
          Contact Information
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-xs uppercase text-slate-400">
              Primary Contact
            </p>

            <p>{customer.contactName}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Email
            </p>

            <p>{customer.email}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Phone
            </p>

            <p>{customer.phone}</p>
          </div>

          <div>
            <p className="text-xs uppercase text-slate-400">
              Last Activity
            </p>

            <p>{customer.lastActivity}</p>
          </div>

        </div>

      </div>

      {/* Customer Summary */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-lg font-semibold">
          Customer Summary
        </h2>

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-xl bg-slate-50 p-4">

            <p className="text-sm text-slate-500">
              Lifetime Value
            </p>

            <h3 className="mt-2 text-2xl font-bold text-blue-600">
              ₹{customer.lifetimeValue.toLocaleString()}
            </h3>

          </div>

          <div className="rounded-xl bg-slate-50 p-4">

            <p className="text-sm text-slate-500">
              Open Tickets
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {customer.support.openTickets}
            </h3>

          </div>

        </div>

      </div>

      {/* Tags */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <h2 className="mb-5 text-lg font-semibold">
          Tags
        </h2>

        <div className="flex flex-wrap gap-3">

          {customer.tags.map((tag) => (

            <span
              key={tag}
              className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

    </div>
  );
};

export default OverviewTab;