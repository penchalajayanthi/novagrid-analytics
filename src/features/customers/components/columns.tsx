import type { Column } from "../../../components/tables/types";
import type { Customer } from "../types/customer.types";

import {
  FiEye,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";

const HealthBadge = ({
  health,
}: {
  health: Customer["health"];
}) => {
  const styles = {
    Healthy:
      "bg-green-100 text-green-700",

    Watch:
      "bg-yellow-100 text-yellow-700",

    "At Risk":
      "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[health]}`}
    >
      {health}
    </span>
  );
};

export const customerColumns: Column<Customer>[] = [
  {
    key: "company",
    header: "Company",
    sortable: true,
    width: 300,

    render: (customer) => (
      <div className="flex items-center gap-3">

        <img
          src={customer.logo}
          alt={customer.company}
          className="h-11 w-11 rounded-full object-cover"
        />

        <div>

          <p className="font-semibold text-slate-900">
            {customer.company}
          </p>

          <p className="text-sm text-slate-500">
            {customer.contactName}
          </p>

        </div>

      </div>
    ),
  },

  {
    key: "email",
    header: "Email",
    sortable: true,
    width: 260,
  },

  {
    key: "segment",
    header: "Segment",
    sortable: true,
    width: 150,
  },

  {
    key: "lifetimeValue",
    header: "Lifetime Value",
    sortable: true,
    width: 180,

    render: (customer) => (
      <span className="font-semibold text-emerald-600">
        ₹{customer.lifetimeValue.toLocaleString()}
      </span>
    ),
  },

  {
    key: "health",
    header: "Health",
    sortable: true,
    width: 150,

    render: (customer) => (
      <HealthBadge
        health={customer.health}
      />
    ),
  },

  {
    key: "lastActivity",
    header: "Last Activity",
    sortable: true,
    width: 150,
  },

  {
    key: "actions",
    header: "Actions",
    width: 150,

    render: () => (
      <div className="flex items-center gap-3">

        <button
          className="rounded-lg p-2 hover:bg-blue-50"
        >
          <FiEye
            size={18}
            className="text-blue-600"
          />
        </button>

        <button
          className="rounded-lg p-2 hover:bg-green-50"
        >
          <FiEdit2
            size={18}
            className="text-green-600"
          />
        </button>

        <button
          className="rounded-lg p-2 hover:bg-red-50"
        >
          <FiTrash2
            size={18}
            className="text-red-600"
          />
        </button>

      </div>
    ),
    
  },
];