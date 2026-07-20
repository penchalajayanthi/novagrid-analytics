import { useEffect, useRef } from "react";
import type { Column } from "./types";
import { EmptyState, LoadingSkeleton } from "../../components/ui";
import {
  FiChevronUp,
  FiChevronDown,
  FiChevronsUp,
} from "react-icons/fi";

interface Props<T extends { id: number }> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;

  onRowClick?: (row: T) => void;

  sortBy?: keyof T | null;
  sortOrder?: "asc" | "desc";
  onSort?: (key: keyof T) => void;

  selectedRows: number[];
  onToggleRow: (id: number) => void;
  onToggleAll: () => void;
}

const DataTable = <T extends { id: number }>({
  columns,
  data,
  loading = false,
  onRowClick,
  sortBy,
  sortOrder,
  onSort,
  selectedRows,
  onToggleRow,
  onToggleAll,
}: Props<T>) => {
  const headerCheckboxRef =
    useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!headerCheckboxRef.current) return;

    headerCheckboxRef.current.indeterminate =
      selectedRows.length > 0 &&
      selectedRows.length < data.length;
  }, [selectedRows, data]);

  if (loading) {
    return <LoadingSkeleton rows={8} />;
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

      <div className="overflow-x-auto">

        <table className="min-w-[1250px] w-full">

          {/* Header */}

          <thead className="sticky top-0 z-20 bg-slate-50">

            <tr>

              <th className="w-14 border-b border-slate-200 px-4 py-4">

                <input
                  ref={headerCheckboxRef}
                  type="checkbox"
                  checked={
                    data.length > 0 &&
                    selectedRows.length === data.length
                  }
                  onChange={onToggleAll}
                  onClick={(e) => e.stopPropagation()}
                  className="h-4 w-4 cursor-pointer accent-blue-600"
                />

              </th>

              {columns.map((column) => (

                <th
                  key={String(column.key)}
                  style={{
                    width: column.width ?? "auto",
                  }}
                  onClick={() =>
                    column.sortable &&
                    onSort?.(column.key as keyof T)
                  }
                  className={`border-b border-slate-200 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 ${
                    column.sortable
                      ? "cursor-pointer select-none hover:bg-slate-100"
                      : ""
                  }`}
                >

                  <div className="flex items-center gap-2">

                    {column.header}

                    {column.sortable &&
                      (sortBy === column.key ? (
                        sortOrder === "asc" ? (
                          <FiChevronUp
                            size={16}
                            className="text-blue-600"
                          />
                        ) : (
                          <FiChevronDown
                            size={16}
                            className="text-blue-600"
                          />
                        )
                      ) : (
                        <FiChevronsUp
                          size={16}
                          className="text-slate-300"
                        />
                      ))}

                  </div>

                </th>

              ))}

            </tr>

          </thead>

          {/* Body */}

          <tbody>

            {data.length === 0 ? (

              <tr>

                <td
                  colSpan={columns.length + 1}
                  className="py-16"
                >

                  <EmptyState
                    title="No Employees Found"
                    description="Try changing your search or filters."
                  />

                </td>

              </tr>

            ) : (

              data.map((row) => {

                const isSelected =
                  selectedRows.includes(row.id);

                return (

                  <tr
                    key={row.id}
                    onClick={() => onRowClick?.(row)}
                    className={`cursor-pointer border-b border-slate-100 transition-all duration-200 hover:bg-blue-50 ${
                      isSelected
                        ? "bg-blue-50"
                        : "bg-white"
                    }`}
                  >

                    <td
                      className="px-4 text-center"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >

                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() =>
                          onToggleRow(row.id)
                        }
                        className="h-4 w-4 cursor-pointer accent-blue-600"
                      />

                    </td>

                    {columns.map((column) => (

                      <td
                        key={String(column.key)}
                        className="px-6 py-4 text-sm text-slate-700"
                      >

                        {column.render
                          ? column.render(row)
                          : String(
                              row[column.key as keyof T] ?? "-"
                            )}

                      </td>

                    ))}

                  </tr>

                );
              })

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default DataTable;