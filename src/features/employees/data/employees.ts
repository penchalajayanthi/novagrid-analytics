import { faker } from "@faker-js/faker";
import type { Employee } from "../types/employee.types";

export const employees: Employee[] = Array.from(
  { length: 120 },
  (_, index) => ({
    id: index + 1,

    avatar: faker.image.avatar(),

    name: faker.person.fullName(),

    email: faker.internet.email(),

    role: faker.person.jobTitle(),

    department: faker.helpers.arrayElement([
      "Engineering",
      "HR",
      "Marketing",
      "Sales",
      "Finance",
    ]),

    location: faker.helpers.arrayElement([
      "Hyderabad",
      "Bangalore",
      "Chennai",
      "Pune",
    ]),

    status: faker.helpers.arrayElement([
      "Active",
      "Inactive",
    ]),

    employmentType: faker.helpers.arrayElement([
      "Full Time",
      "Part Time",
      "Contract",
    ]),

    joinDate: faker.date
      .past()
      .toLocaleDateString(),
  })
);