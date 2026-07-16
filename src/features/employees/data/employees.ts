import { faker } from "@faker-js/faker";
import type { Employee } from "../types/employee.types";

const departmentSkills = {
  Engineering: [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Express",
    "Docker",
    "AWS",
  ],
  HR: [
    "Recruitment",
    "Employee Relations",
    "Onboarding",
    "Performance Management",
    "Communication",
    "Conflict Resolution",
  ],
  Marketing: [
    "SEO",
    "Google Ads",
    "Content Marketing",
    "Brand Strategy",
    "Social Media",
    "Analytics",
  ],
  Sales: [
    "Negotiation",
    "CRM",
    "Lead Generation",
    "Customer Relations",
    "Presentation",
    "Communication",
  ],
  Finance: [
    "Excel",
    "Accounting",
    "Financial Analysis",
    "SAP",
    "Budgeting",
    "Power BI",
  ],
} as const;

export const employees: Employee[] = Array.from(
  { length: 120 },
  (_, index) => {
    const department = faker.helpers.arrayElement([
      "Engineering",
      "HR",
      "Marketing",
      "Sales",
      "Finance",
    ]) as keyof typeof departmentSkills;

    return {
      id: index + 1,

      avatar: faker.image.avatar(),

      name: faker.person.fullName(),

      email: faker.internet.email(),

      phone: faker.phone.number(),

      address: faker.location.streetAddress(),

      manager: faker.person.fullName(),

      role: faker.person.jobTitle(),

      department,

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

     salary: {
  band: faker.helpers.arrayElement([
    "L1",
    "L2",
    "L3",
    "L4",
  ]),

  basic: faker.number.int({
    min: 35000,
    max: 120000,
  }),

  hra: faker.number.int({
    min: 10000,
    max: 30000,
  }),

  allowance: faker.number.int({
    min: 5000,
    max: 15000,
  }),

  bonus: faker.number.int({
    min: 5000,
    max: 25000,
  }),

  net: faker.number.int({
    min: 55000,
    max: 180000,
  }),

  history: [
    {
      date: "Jan 2026",
      band: "L3",
      amount: faker.number.int({
        min: 70000,
        max: 150000,
      }),
    },
    {
      date: "Jan 2025",
      band: "L2",
      amount: faker.number.int({
        min: 60000,
        max: 130000,
      }),
    },
  ],
},

leave: {
  annual: faker.number.int({
    min: 5,
    max: 20,
  }),

  sick: faker.number.int({
    min: 2,
    max: 10,
  }),

  casual: faker.number.int({
    min: 2,
    max: 8,
  }),

  history: [
    {
      from: "10 Mar 2026",
      to: "12 Mar 2026",
      type: "Annual Leave",
      status: "Approved",
    },
    {
      from: "08 Jan 2026",
      to: "08 Jan 2026",
      type: "Sick Leave",
      status: "Pending",
    },
  ],
},

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

      skills: faker.helpers
        .arrayElements(departmentSkills[department], {
          min: 3,
          max: 6,
        })
        .map((skill) => ({
          name: skill,
          level: faker.number.int({
            min: 75,
            max: 100,
          }),
        })),
    };
  }
);