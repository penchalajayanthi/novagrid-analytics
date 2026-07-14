import type { ReactNode } from "react";

export interface Column<T> {
  key: keyof T;
  header: string;
  width?: string;
  sortable?: boolean;
  render?: (row: T) => ReactNode;
}