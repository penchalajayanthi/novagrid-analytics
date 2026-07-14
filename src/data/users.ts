import type { User } from "../features/auth/types/auth.types";

export const users: User[] = [
  {
    id: "1",
    name: "Priya",
    email: "priya@novagrid.com",
    password: "Priya@123",
    role: "VP of Operations",
  },
  {
    id: "2",
    name: "Marcus",
    email: "marcus@novagrid.com",
    password: "Marcus@123",
    role: "Delivery Manager",
  },
  {
    id: "3",
    name: "Aditi",
    email: "aditi@novagrid.com",
    password: "Aditi@123",
    role: "People Operations Lead",
  },
  {
    id: "4",
    name: "Daniel",
    email: "daniel@novagrid.com",
    password: "Daniel@123",
    role: "Customer Success Manager",
  },
];