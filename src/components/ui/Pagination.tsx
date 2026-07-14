interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;

  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) => {
  const startItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) * pageSize + 1;

  const endItem = Math.min(
    currentPage * pageSize,
    totalItems
  );

  return (
    <div className="mt-4 flex flex-col items-center justify-between gap-4 rounded-xl border bg-white p-4 shadow-sm md:flex-row">
      {/* Left */}
      <p className="text-sm text-slate-600">
        Showing{" "}
        <span className="font-semibold">
          {startItem}-{endItem}
        </span>{" "}
        of{" "}
        <span className="font-semibold">
          {totalItems}
        </span>{" "}
        employees
      </p>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Page Size */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-600">
            Rows:
          </span>

          <select
            value={pageSize}
            onChange={(e) =>
              onPageSizeChange(Number(e.target.value))
            }
            className="rounded-lg border px-2 py-1"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        {/* Previous */}
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="rounded-lg border px-3 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        <span className="font-medium">
          {currentPage} / {totalPages}
        </span>

        {/* Next */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="rounded-lg border px-3 py-2 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;