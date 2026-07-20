import { useNavigate } from "react-router-dom";
import { FiDownload, FiRotateCcw } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { useEffect } from "react";
import { useCustomerStore } from "../store/customerStore";
import DataTable from "../../../components/tables/DataTable";
import {
  SearchInput,
  FilterSelect,
  Pagination,
} from "../../../components/ui";

import { customerColumns } from "../components/columns";
import CustomerStats from "../components/CustomerStats";
import { customers as customerData } from "../data/customers";
import { useCustomers } from "../hooks/useCustomers";

const Customers = () => {
  const navigate = useNavigate();
const { setCustomers } = useCustomerStore();

useEffect(() => {
  setCustomers(customerData);
}, [setCustomers]);
  const {
    customers,

    search,
    setSearch,

    segment,
    setSegment,

    health,
    setHealth,

    tag,
    setTag,

    sortBy,
    sortOrder,
    handleSort,

    currentPage,
    setCurrentPage,

    pageSize,
    setPageSize,

    totalItems,
    totalPages,

    clearFilters,
  } = useCustomers({
    data: customerData,
  });

  const segments = [
    ...new Set(
      customerData.map(
        (customer) => customer.segment
      )
    ),
  ];

  const healthOptions = [
    ...new Set(
      customerData.map(
        (customer) => customer.health
      )
    ),
  ];

  const tags = [
    ...new Set(
      customerData.flatMap(
        (customer) => customer.tags
      )
    ),
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Customer Management
        </h1>

        <p className="mt-1 text-slate-500">
          Manage customer accounts, relationships,
          purchases and support.
        </p>

      </div>

      {/* KPI */}

      <CustomerStats customers={customerData} />

      {/* Filters */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">

        <div className="grid gap-4 xl:grid-cols-5">

          <div className="xl:col-span-2">

            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search company or contact..."
            />

          </div>

          <FilterSelect
            value={segment}
            onChange={setSegment}
            options={segments}
            placeholder="Segment"
          />

          <FilterSelect
            value={health}
            onChange={setHealth}
            options={healthOptions}
            placeholder="Health"
          />

          <div className="flex gap-3">

            <FilterSelect
              value={tag}
              onChange={setTag}
              options={tags}
              placeholder="Tag"
            />

            <Tooltip title="Reset Filters">

              <button
                onClick={clearFilters}
                className="
                flex
                h-11
                items-center
                rounded-xl
                border
                border-red-200
                px-4
                text-red-600
                transition
                hover:bg-red-50
                "
              >
                <FiRotateCcw size={18} />
              </button>

            </Tooltip>

          </div>

        </div>

      </div>
            {/* Customer Directory */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center justify-between border-b px-6 py-5">

          <div>

            <h2 className="text-xl font-semibold">
              Customer Directory
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {totalItems} customer accounts
            </p>

          </div>

          <button
            onClick={() => {
              const headers = [
                "Company",
                "Contact",
                "Email",
                "Segment",
                "Health",
                "Lifetime Value",
                "Last Activity",
              ];

              const rows = customers.map((customer) => [
                customer.company,
                customer.contactName,
                customer.email,
                customer.segment,
                customer.health,
                customer.lifetimeValue,
                customer.lastActivity,
              ]);

              const csv = [
                headers.join(","),
                ...rows.map((row) => row.join(",")),
              ].join("\n");

              const blob = new Blob([csv], {
                type: "text/csv;charset=utf-8;",
              });

              const url =
                window.URL.createObjectURL(blob);

              const link =
                document.createElement("a");

              link.href = url;
              link.download = "customers.csv";

              link.click();

              window.URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            <FiDownload />

            Export CSV

          </button>

        </div>

        <DataTable
          columns={customerColumns}
          data={customers}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleSort}
          onRowClick={(customer) =>
            navigate(`/customers/${customer.id}`)
          }

          selectedRows={[]}
          onToggleRow={() => {}}
          onToggleAll={() => {}}
        />

      </div>

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />

    </div>
  );
};

export default Customers;