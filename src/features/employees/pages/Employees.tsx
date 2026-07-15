import DataTable from "../../../components/tables/DataTable";
import {
  SearchInput,
  Pagination,
  FilterSelect,
} from "../../../components/ui";

import { useTable } from "../../../hooks/useTable";

import { employeeColumns } from "../components/columns";
import { employees } from "../data/employees";

const Employees = () => {
  const {
    data,

    search,
    setSearch,

    filters,
    setFilters,

    sortBy,
    sortOrder,
    handleSort,

    currentPage,
    setCurrentPage,

    pageSize,
    setPageSize,

    totalPages,
    totalItems,
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

  // Dynamic Filter Options
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

  const locations = [
    ...new Set(
      employees.map((e) => e.location)
    ),
  ];

  const employmentTypes = [
    ...new Set(
      employees.map((e) => e.employmentType)
    ),
  ];

  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">
        Employees
      </h1>

      {/* Search */}

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search employees..."
      />

      {/* Filters */}

      <div className="flex flex-wrap items-center gap-3">

        <FilterSelect
          placeholder="Department"
          value={filters.department ?? ""}
          options={departments}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              department: value,
            }))
          }
        />

        <FilterSelect
          placeholder="Status"
          value={filters.status ?? ""}
          options={statuses}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              status: value,
            }))
          }
        />

        <FilterSelect
          placeholder="Location"
          value={filters.location ?? ""}
          options={locations}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              location: value,
            }))
          }
        />

        <FilterSelect
          placeholder="Employment Type"
          value={filters.employmentType ?? ""}
          options={employmentTypes}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              employmentType: value,
            }))
          }
        />

        <button
          onClick={() => setFilters({})}
          className="rounded-lg border border-red-300 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Clear Filters
        </button>

      </div>

      {/* Table */}

      <DataTable
        columns={employeeColumns}
        data={data}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />

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