import { useEffect, useMemo, useState } from "react";

interface UseTableProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
}

export const useTable = <T extends Record<string, any>>({
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
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Reset page whenever search or filters change
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

        return String(item[key as keyof T]) === value;
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
  const totalPages = Math.ceil(totalItems / pageSize);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    return sortedData.slice(start, end);
  }, [sortedData, currentPage, pageSize]);

  // Sorting handler
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

  return {
    data: paginatedData,

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

    totalItems,
    totalPages,
  };
};