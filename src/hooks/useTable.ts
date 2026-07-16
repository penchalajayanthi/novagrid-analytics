import { useEffect, useMemo, useState } from "react";

interface UseTableProps<T extends { id: number }> {
  data: T[];
  searchKeys: (keyof T)[];
}

export const useTable = <
  T extends Record<string, any> & { id: number }
>({
  data,
  searchKeys,
}: UseTableProps<T>) => {
  // Search
  const [search, setSearch] = useState("");

  // Filters
  const [filters, setFilters] = useState<
    Partial<Record<keyof T, string>>
  >({});

  // Sorting
  const [sortBy, setSortBy] =
    useState<keyof T | null>(null);

  const [sortOrder, setSortOrder] =
    useState<"asc" | "desc">("asc");

  // Pagination
  const [currentPage, setCurrentPage] =
    useState(1);

  const [pageSize, setPageSize] =
    useState(10);

  // Bulk Selection
  const [selectedRows, setSelectedRows] =
    useState<number[]>([]);

  // Reset page
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filters]);

  // Search
  const searchedData = useMemo(() => {
    if (!search) return data;

    return data.filter((item) =>
      searchKeys.some((key) =>
        String(item[key])
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [data, search, searchKeys]);

  // Filters
  const filteredData = useMemo(() => {
    return searchedData.filter((item) =>
      Object.entries(filters).every(([key, value]) => {
        if (!value) return true;

        return (
          String(item[key as keyof T]) === value
        );
      })
    );
  }, [searchedData, filters]);

  // Sorting
  const sortedData = useMemo(() => {
    if (!sortBy) return filteredData;

    return [...filteredData].sort((a, b) => {
      const first = String(a[sortBy]).toLowerCase();
      const second = String(b[sortBy]).toLowerCase();

      return sortOrder === "asc"
        ? first.localeCompare(second)
        : second.localeCompare(first);
    });
  }, [filteredData, sortBy, sortOrder]);

  // Pagination
  const totalItems = sortedData.length;

  const totalPages = Math.ceil(
    totalItems / pageSize
  );

  const paginatedData = useMemo(() => {
    const start =
      (currentPage - 1) * pageSize;

    return sortedData.slice(
      start,
      start + pageSize
    );
  }, [sortedData, currentPage, pageSize]);

  // Sort
  const handleSort = (key: keyof T) => {
    if (sortBy === key) {
      setSortOrder((prev) =>
        prev === "asc" ? "desc" : "asc"
      );
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  // Filter
  const handleFilterChange = (
    key: keyof T,
    value: string
  ) => {
    setCurrentPage(1);

    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Clear Filters
  const clearFilters = () => {
    setSearch("");
    setFilters({});
    setCurrentPage(1);
  };

  // Toggle Row
  const toggleRow = (id: number) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((rowId) => rowId !== id)
        : [...prev, id]
    );
  };

  // Toggle All (Current Page)
  const toggleAll = () => {
    const pageIds = paginatedData.map(
      (item) => item.id
    );

    const allSelected = pageIds.every((id) =>
      selectedRows.includes(id)
    );

    if (allSelected) {
      setSelectedRows((prev) =>
        prev.filter(
          (id) => !pageIds.includes(id)
        )
      );
    } else {
      setSelectedRows((prev) => [
        ...new Set([...prev, ...pageIds]),
      ]);
    }
  };

  // Clear Selection
  const clearSelection = () => {
    setSelectedRows([]);
  };

  return {
    data: paginatedData,

    search,
    setSearch,

    filters,
    setFilters,
    handleFilterChange,
    clearFilters,

    sortBy,
    sortOrder,
    handleSort,

    currentPage,
    setCurrentPage,

    pageSize,
    setPageSize,

    totalItems,
    totalPages,

    // Bulk Selection
    selectedRows,
    toggleRow,
    toggleAll,
    clearSelection,
  };
};