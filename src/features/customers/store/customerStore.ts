import { create } from "zustand";

import type {
  Customer,
  Note,
} from "../types/customer.types";

interface CustomerStore {
  customers: Customer[];

  setCustomers: (customers: Customer[]) => void;

  addTag: (
    customerId: number,
    tag: string
  ) => void;

  removeTag: (
    customerId: number,
    tag: string
  ) => void;

  addNote: (
    customerId: number,
    note: Note
  ) => void;
}

export const useCustomerStore =
  create<CustomerStore>((set) => ({
    customers: [],

    setCustomers: (customers) =>
      set({
        customers,
      }),

    addTag: (customerId, tag) =>
      set((state) => ({
        customers: state.customers.map(
          (customer) =>
            customer.id === customerId
              ? {
                  ...customer,
                  tags: customer.tags.includes(tag)
                    ? customer.tags
                    : [...customer.tags, tag],
                }
              : customer
        ),
      })),

    removeTag: (customerId, tag) =>
      set((state) => ({
        customers: state.customers.map(
          (customer) =>
            customer.id === customerId
              ? {
                  ...customer,
                  tags: customer.tags.filter(
                    (t) => t !== tag
                  ),
                }
              : customer
        ),
      })),

    addNote: (customerId, note) =>
      set((state) => ({
        customers: state.customers.map(
          (customer) =>
            customer.id === customerId
              ? {
                  ...customer,
                  notes: [
                    note,
                    ...customer.notes,
                  ],
                }
              : customer
        ),
      })),
  }));