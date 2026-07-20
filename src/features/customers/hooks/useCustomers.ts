import { useMemo, useState, useEffect } from "react";
import type { Customer } from "../types/customer.types";

interface Props {
  data: Customer[];
}

export const useCustomers = ({ data }: Props) => {
  const [search, setSearch] = useState("");

  const [segment, setSegment] = useState("");

  const [health, setHealth] = useState("");

  const [tag, setTag] = useState("");

  const [sortBy, setSortBy] =
    useState<keyof Customer | null>(null);

  const [sortOrder, setSortOrder] =
    useState<"asc" | "desc">("asc");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [pageSize, setPageSize] =
    useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, segment, health, tag]);

  const filtered = useMemo(() => {
    return data.filter((customer) => {
      const matchesSearch =
        customer.company
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        customer.contactName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        customer.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSegment =
        !segment ||
        customer.segment === segment;

      const matchesHealth =
        !health ||
        customer.health === health;

      const matchesTag =
        !tag ||
        customer.tags.includes(tag);

      return (
        matchesSearch &&
        matchesSegment &&
        matchesHealth &&
        matchesTag
      );
    });
  }, [
    data,
    search,
    segment,
    health,
    tag,
  ]);

  const sorted = useMemo(() => {
    if (!sortBy) return filtered;

    return [...filtered].sort((a, b) => {
      const first = String(
        a[sortBy]
      ).toLowerCase();

      const second = String(
        b[sortBy]
      ).toLowerCase();

      return sortOrder === "asc"
        ? first.localeCompare(second)
        : second.localeCompare(first);
    });
  }, [
    filtered,
    sortBy,
    sortOrder,
  ]);

  const totalItems = sorted.length;

  const totalPages = Math.ceil(
    totalItems / pageSize
  );

  const customers = useMemo(() => {
    const start =
      (currentPage - 1) * pageSize;

    return sorted.slice(
      start,
      start + pageSize
    );
  }, [
    sorted,
    currentPage,
    pageSize,
  ]);

  const handleSort = (
    key: keyof Customer
  ) => {
    if (sortBy === key) {
      setSortOrder((prev) =>
        prev === "asc"
          ? "desc"
          : "asc"
      );
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const clearFilters = () => {
    setSearch("");
    setSegment("");
    setHealth("");
    setTag("");
  };

  return {
    customers,

    search,
    setSearch,

    segment,
    setSegment,

    health,
    setHealth,

    tag,
    setTag,

    sortBy,
    sortOrder,
    handleSort,

    currentPage,
    setCurrentPage,

    pageSize,
    setPageSize,

    totalItems,
    totalPages,

    clearFilters,
  };
};