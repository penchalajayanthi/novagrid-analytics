import { faker } from "@faker-js/faker";
import type { Employee } from "../types/employee.types";

export const employees: Employee[] = Array.from(
  { length: 120 },
  (_, index) => ({
    id: index + 1,

    avatar: faker.image.avatar(),

    name: faker.person.fullName(),

    email: faker.internet.email(),

    phone: faker.phone.number(),

    address: faker.location.streetAddress(),

    manager: faker.person.fullName(),

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

    joinDate: faker.date.past().toLocaleDateString(),

    salary: faker.number.int({
      min: 400000,
      max: 1800000,
    }),

    leaveBalance: faker.number.int({
      min: 2,
      max: 24,
    }),

    attendance: {
      present: faker.number.int({
        min: 180,
        max: 240,
      }),

      absent: faker.number.int({
        min: 0,
        max: 15,
      }),

      leave: faker.number.int({
        min: 0,
        max: 20,
      }),
    },

    performance: {
      q1: faker.number.int({
        min: 70,
        max: 100,
      }),

      q2: faker.number.int({
        min: 70,
        max: 100,
      }),

      q3: faker.number.int({
        min: 70,
        max: 100,
      }),

      q4: faker.number.int({
        min: 70,
        max: 100,
      }),
    },

    skills: faker.helpers.arrayElements(
      [
        "React",
        "TypeScript",
        "Node.js",
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "Express",
        "Leadership",
        "Communication",
      ],
      {
        min: 3,
        max: 6,
      }
    ),
  })
);