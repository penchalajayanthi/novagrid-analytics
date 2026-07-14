import { useMemo, useState } from "react";

interface UseTableProps<T> {
  data: T[];
  searchKeys: (keyof T)[];
}

export const useTable = <T extends Record<string, any>>({data,searchKeys,}: UseTableProps<T>) => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
 
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

const handleSort = (key: keyof T) => {
  if (sortBy === key) {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  } else {
    setSortBy(key);
    setSortOrder("asc");
  }
};

  return {
  data: sortedData,
  search,
  setSearch,
  sortBy,
  sortOrder,
  handleSort,
};
};