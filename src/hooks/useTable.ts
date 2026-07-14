import { useMemo, useState } from "react";
import { useEffect } from "react";

interface UseTableProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
}

export const useTable = <T extends Record<string, any>>({data,searchKeys,}: UseTableProps<T>) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] =useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
  setCurrentPage(1);
}, [search]);

  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter((item) =>
      searchKeys.some((key) =>
        String(item[key])
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
  }, [data, search, searchKeys]);
  
  const sortedData = useMemo(() => {
  if (!sortBy) return filteredData;
  
  return [...filteredData].sort((a, b) => {
    const first = String(a[sortBy]).toLowerCase();
    const second = String(b[sortBy]).toLowerCase();

    if (sortOrder === "asc") {
      return first.localeCompare(second);
    }

    return second.localeCompare(first);
  });
}, [filteredData, sortBy, sortOrder]);

const totalItems = sortedData.length;

const totalPages = Math.ceil(totalItems / pageSize);
const paginatedData = useMemo(() => {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;

  return sortedData.slice(start, end);
}, [sortedData, currentPage, pageSize]);

const handleSort = (key: keyof T) => {
  if (sortBy === key) {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  } else {
    setSortBy(key);
    setSortOrder("asc");
  }
};

  return {
  data: paginatedData,
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
};
};