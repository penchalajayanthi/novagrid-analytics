import { useNavigate } from "react-router-dom";
import { FiDownload, FiTrash2, FiUserX, } from "react-icons/fi";
import DataTable from "../../../components/tables/DataTable";
import { SearchInput, Pagination, FilterSelect, } from "../../../components/ui";
import { useTable } from "../../../hooks/useTable";
import { employeeColumns } from "../components/columns";
import { employees } from "../data/employees";
import EmployeeStats from "../components/EmployeeStats";
import { FiRotateCcw } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";

const Employees = () => {
  const navigate = useNavigate();

  const {
    data,

    search,
    setSearch,

    filters,
    handleFilterChange,
    clearFilters,

    sortBy,
    sortOrder,
    handleSort,

    currentPage,
    setCurrentPage,

    pageSize,
    setPageSize,

    totalPages,
    totalItems,

    // Bulk Selection
    selectedRows,
    toggleRow,
    toggleAll,
    clearSelection,
  } = useTable({
    data: employees,
    searchKeys: [
      "name",
      "email",
      "department",
      "role",
      "status",
    ],
  });

  const departments = [
    ...new Set(
      employees.map((e) => e.department)
    ),
  ];

  const statuses = [
    ...new Set(
      employees.map((e) => e.status)
    ),
  ];

  const employmentTypes = [
    ...new Set(
      employees.map(
        (e) => e.employmentType
      )
    ),
  ];
  const exportCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Role",
      "Department",
      "Location",
      "Status",
      "Employment Type",
      "Join Date",
    ];

    const rows = data.map((employee) => [
      employee.name,
      employee.email,
      employee.role,
      employee.department,
      employee.location,
      employee.status,
      employee.employmentType,
      employee.joinDate,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "employees.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Employee Directory
        </h1>

        <p className="mt-2 text-slate-500">
          Manage employees, search records,
          monitor workforce and view employee
          profiles.
        </p>

      </div>

      {/* KPI */}

      <EmployeeStats employees={employees} />

      {/* Search & Filters */}

      <div className="rounded-2xl border bg-white p-5 shadow-sm">

        <div className="flex flex-wrap items-center gap-4">

          <div className="min-w-[200px] flex-1">
            <SearchInput
              value={search}
              onChange={setSearch}
              placeholder="Search employee..."
            />
          </div>

          <div className="w-48">
            <FilterSelect
              value={filters.department ?? ""}
              onChange={(value) =>
                handleFilterChange(
                  "department",
                  value
                )
              }
              options={departments}
              placeholder="Department"
            />
          </div>

          <div className="w-44">
            <FilterSelect
              value={filters.status ?? ""}
              onChange={(value) =>
                handleFilterChange(
                  "status",
                  value
                )
              }
              options={statuses}
              placeholder="Status"
            />
          </div>

          <div className="w-48">
            <FilterSelect
              value={filters.employmentType ?? ""}
              onChange={(value) =>
                handleFilterChange(
                  "employmentType",
                  value
                )
              }
              options={employmentTypes}
              placeholder="Employment"
            />
          </div>

          <Tooltip title="Reset Filters" arrow placement="top">
            <button
              onClick={clearFilters}
              className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-xl
      border
      border-red-200
      text-red-600
      transition-all
      duration-200
      hover:border-red-300
      hover:bg-red-50
    "
            >
              <FiRotateCcw size={18} />
            </button>
          </Tooltip>

        </div>

      </div>
      {/* Bulk Action Bar */}

      {selectedRows.length > 0 && (
        <div className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-6 py-4">

          <div className="font-semibold text-blue-700">
            {selectedRows.length} Employee
            {selectedRows.length > 1 ? "s" : ""} Selected
          </div>

          <div className="flex items-center gap-3">

            <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 transition hover:bg-slate-50">
              <FiDownload />
              Export
            </button>

            <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 transition hover:bg-slate-50">
              <FiUserX />
              Deactivate
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-red-300 bg-white px-4 py-2 text-red-600 transition hover:bg-red-50">
              <FiTrash2 />
              Delete
            </button>

            <button
              onClick={clearSelection}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100"
            >
              Clear Selection
            </button>

          </div>

        </div>
      )}

      {/* Employee Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <div className="flex items-center justify-between border-b px-6 py-5">

          <div>

            <h2 className="text-xl font-semibold">
              Employee Directory
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Showing {totalItems} employees
            </p>

          </div>

          <button
            onClick={exportCSV}
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Export CSV
          </button>

        </div>

        <DataTable
          columns={employeeColumns}
          data={data}
          selectedRows={selectedRows}
          onToggleRow={toggleRow}
          onToggleAll={toggleAll}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={handleSort}
          onRowClick={(employee) =>
            navigate(`/employees/${employee.id}`)
          }
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

export default Employees;