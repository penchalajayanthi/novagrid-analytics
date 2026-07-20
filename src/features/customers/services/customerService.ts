import { customers } from "../data/customers";

export const customerService = {
  getCustomers: () => customers,

  getCustomerById: (id: number) =>
    customers.find(
      (customer) => customer.id === id
    ),
};