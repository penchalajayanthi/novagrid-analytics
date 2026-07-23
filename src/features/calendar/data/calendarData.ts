import { faker } from "@faker-js/faker";

import type {
  CalendarEvent,
} from "../types/calendar.types";

const eventTypes = [
  "Meeting",
  "Deadline",
  "Presentation",
  "Holiday",
  "Training",
] as const;

export const calendarEvents: CalendarEvent[] =
  Array.from({ length: 35 }, (_, index) => ({
    id: index + 1,

    title: faker.company.catchPhrase(),

    description: faker.lorem.sentence(),

    type: faker.helpers.arrayElement(
      eventTypes
    ),

    start: faker.date.soon({
      days: 30,
    }).toISOString(),

    end: faker.date.soon({
      days: 31,
    }).toISOString(),

    location:
      faker.location.city(),

    attendees: Array.from(
      { length: faker.number.int({ min: 2, max: 5 }) },
      (_, id) => ({
        id,

        name: faker.person.fullName(),

        avatar:
          faker.image.avatar(),
      })
    ),
  }));