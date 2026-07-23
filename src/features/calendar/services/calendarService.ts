import { calendarEvents } from "../data/calendarData";

const delay = (ms = 500) =>
  new Promise((resolve) =>
    setTimeout(resolve, ms)
  );

export const calendarService = {
  async getEvents() {
    await delay();

    return calendarEvents;
  },

  async createEvent(event: any) {
    await delay();

    return {
      id: Date.now(),
      ...event,
    };
  },

  async updateEvent(
    id: number,
    payload: any
  ) {
    await delay();

    return {
      id,
      ...payload,
    };
  },
};