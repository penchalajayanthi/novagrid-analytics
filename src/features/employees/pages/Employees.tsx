import DataTable from "../../../components/tables/DataTable";
import SearchInput from "../../../components/ui/SearchInput";
import { useTable } from "../../../hooks/useTable";

import { employeeColumns } from "../components/columns";
import { employees } from "../data/employees";
import { Pagination } from "../../../components/ui";
const Employees = () => {
  const {
    data,
    search,
    setSearch,

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

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold">
        Employees
      </h1>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search employees..."
      />

      <DataTable
        columns={employeeColumns}
        data={data}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        pageSize={pageSize}
        totalItems={totalItems}
        onPageChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
};

export default Employees;