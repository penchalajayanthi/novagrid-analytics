import type { Column } from "./types";
import { EmptyState } from "../../components/ui";
import { LoadingSkeleton } from "../../components/ui";
interface Props<T> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  onRowClick?: (row: T) => void;
}
const DataTable = <T extends Record<string, unknown>>({
  columns,
  data,
  loading = false,
  onRowClick,
}: Props<T>) => {

  if (loading) {
    return <LoadingSkeleton rows={8} />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-md">
      <table className="min-w-full">
      <thead className="bg-slate-100">
  <tr>
    {columns.map((column) => (
      <th
        key={String(column.key)}
        className="px-6 py-4 text-left text-sm font-semibold text-slate-700"
        style={{ width: column.width }}
      >
        {column.header}
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
  );
};

export default DataTable;