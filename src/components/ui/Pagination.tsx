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
  // onPageSizeChange,
}: PaginationProps) => {
  const start =
    totalItems === 0
      ? 0
      : (currentPage - 1) * pageSize + 1;

  const end = Math.min(
    currentPage * pageSize,
    totalItems
  );

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl border bg-white px-6 py-4 shadow-sm md:flex-row">

      <p className="text-sm text-slate-500">
        Showing{" "}
        <span className="font-semibold">
          {start}
        </span>{" "}
        to{" "}
        <span className="font-semibold">
          {end}
        </span>{" "}
        of{" "}
        <span className="font-semibold">
          {totalItems}
        </span>{" "}
        results
      </p>

      <div className="flex items-center gap-2">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="flex h-9 w-9 items-center justify-center rounded-lg border text-slate-500 hover:bg-slate-100 disabled:opacity-40"
        >
          ‹
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium transition ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "border hover:bg-slate-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="flex h-9 w-9 items-center justify-center rounded-lg border text-slate-500 hover:bg-slate-100 disabled:opacity-40"
        >
          ›
        </button>

      </div>

    </div>
  );
};

export default Pagination;