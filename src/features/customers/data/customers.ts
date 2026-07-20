import { faker } from "@faker-js/faker";
import type { Customer } from "../types/customer.types";

const segments = [
  "Enterprise",
  "SMB",
  "Startup",
] as const;

const health = [
  "Healthy",
  "Watch",
  "At Risk",
] as const;

const tags = [
  "VIP",
  "Renewal",
  "Premium",
  "High Value",
  "Lead",
  "Partner",
  "Finance",
  "Support",
];

export const customers: Customer[] = Array.from(
  { length: 100 },
  (_, index) => ({
    id: index + 1,

    company: faker.company.name(),

    logo: faker.image.avatar(),

    contactName: faker.person.fullName(),

    email: faker.internet.email(),

    phone: faker.phone.number(),

    website: faker.internet.url(),

    address: faker.location.streetAddress(),

    segment:
      faker.helpers.arrayElement(segments),

    health:
      faker.helpers.arrayElement(health),

    lifetimeValue:
      faker.number.int({
        min: 100000,
        max: 5000000,
      }),

    lastActivity:
      faker.date.recent().toLocaleDateString(),

    tags: faker.helpers.arrayElements(tags, {
      min: 2,
      max: 4,
    }),

    purchaseHistory: Array.from(
      { length: faker.number.int({ min: 3, max: 8 }) },
      (_, i) => ({
        id: i + 1,

        order: `ORD-${faker.number.int({
          min: 1000,
          max: 9999,
        })}`,

        value: faker.number.int({
          min: 10000,
          max: 200000,
        }),

        date:
          faker.date.past().toLocaleDateString(),

        status:
          faker.helpers.arrayElement([
            "Completed",
            "Pending",
            "Cancelled",
          ]),
      })
    ),

    support: {
      openTickets:
        faker.number.int({
          min: 0,
          max: 6,
        }),

      sla:
        faker.helpers.arrayElement([
          "On Track",
          "Delayed",
        ]),
    },

    notes: [
      {
        id: 1,

        user: "Admin",

        message:
          faker.lorem.sentence(),

        createdAt:
          faker.date.recent().toLocaleString(),
      },
    ],
  })
);