import { faker } from "@faker-js/faker";
import type {
  Project,
  Priority,
  TaskStatus,
} from "../types/project.types";

const statuses: TaskStatus[] = [
  "Backlog",
  "To Do",
  "In Progress",
  "In Review",
  "Done",
];

const priorities: Priority[] = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

const tags = [
  "UI",
  "Backend",
  "API",
  "Bug",
  "Feature",
  "Testing",
];

export const projects: Project[] = Array.from(
  { length: 5 },
  (_, index) => ({
    id: index + 1,

    name: faker.company.name(),

    client: faker.company.name(),

    description: faker.lorem.sentences(2),

    startDate: faker.date.past().toLocaleDateString(),

    endDate: faker.date.future().toLocaleDateString(),

    team: Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
    })),

    milestones: Array.from({ length: 4 }, (_, i) => ({
      id: i + 1,
      title: `Milestone ${i + 1}`,
      dueDate: faker.date.future().toLocaleDateString(),
      status: faker.helpers.arrayElement([
        "Upcoming",
        "In Progress",
        "Done",
      ]),
    })),

    tasks: Array.from({ length: 20 }, (_, taskIndex) => ({
      id: taskIndex + 1,

      title: faker.hacker.phrase(),

      description: faker.lorem.paragraph(),

      status: faker.helpers.arrayElement(statuses),

      priority: faker.helpers.arrayElement(priorities),

      assignees: [
        {
          id: 1,
          name: faker.person.fullName(),
          avatar: faker.image.avatar(),
        },
      ],

      dueDate: faker.date.future().toLocaleDateString(),

      tag: faker.helpers.arrayElement(tags),

      checklist: Array.from({ length: 4 }, (_, c) => ({
        id: c + 1,
        title: faker.hacker.verb(),
        completed: faker.datatype.boolean(),
      })),

      comments: [
        {
          id: 1,
          user: faker.person.fullName(),
          message: faker.lorem.sentence(),
          createdAt: faker.date.recent().toLocaleString(),
        },
      ],
    })),
  })
);