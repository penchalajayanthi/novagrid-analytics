import type { Column } from "./types";
import { EmptyState } from "../../components/ui";
import { LoadingSkeleton } from "../../components/ui";
import { FiChevronUp, FiChevronDown, FiChevronsUp, } from "react-icons/fi";


interface Props<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  onRowClick?: (row: T) => void;

  sortBy?: keyof T | null;
  sortOrder?: "asc" | "desc";
  onSort?: (key: keyof T) => void;
}

const DataTable = <T extends object>({
  columns,
  data,
  loading = false,
  onRowClick,
  sortBy,
  sortOrder,
  onSort,
}: Props<T>) => {
  if (loading) {
    return <LoadingSkeleton rows={8} />;
  }

  return (
   <div className="overflow-hidden rounded-xl border bg-white shadow-md">
  <div className="max-h-[280px] overflow-y-auto">
      <table className="min-w-full">
       <thead className="sticky top-0 z-10 bg-slate-100">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                onClick={() =>
                  column.sortable && onSort?.(column.key)
                }
                className={`px-6 py-4 text-left text-sm font-semibold text-slate-700 ${column.sortable
                  ? "cursor-pointer select-none hover:bg-slate-200"
                  : ""
                  }`}
              >
                <div className="flex items-center gap-2">
                  {column.header}

                  {column.sortable && (
                    sortBy === column.key ? (
                      sortOrder === "asc" ? (
                        <FiChevronUp className="text-blue-600" size={16} />
                      ) : (
                        <FiChevronDown className="text-blue-600" size={16} />
                      )
                    ) : (
                      <FiChevronsUp
                        className="text-gray-300"
                        size={16}
                      />
                    )
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="px-6 py-10"
              >
                <EmptyState
                  title="No Records Found"
                  description="Try changing your search or filters."
                />
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={index}
                onClick={() => onRowClick?.(row)}
                className="cursor-pointer border-t transition-colors hover:bg-slate-50"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-sm text-slate-700"
                  >
                    {column.render
                      ? column.render(row)
                      : String(row[column.key] ?? "-")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataTable;