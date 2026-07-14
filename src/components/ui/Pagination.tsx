interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-end gap-2 py-4">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border px-3 py-2 disabled:opacity-50"
      >
        Previous
      </button>

      <span className="font-medium">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border px-3 py-2 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;