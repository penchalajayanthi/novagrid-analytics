import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | string;
  header: string;
width?: number | string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
}