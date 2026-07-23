import { create } from "zustand";

import type {
  CalendarEvent,
} from "../types/calendar.types";

interface CalendarStore {
  selectedDate: Date;

  selectedEvent:
    | CalendarEvent
    | null;

  setSelectedDate: (
    date: Date
  ) => void;

  setSelectedEvent: (
    event: CalendarEvent | null
  ) => void;
}

export const useCalendarStore =
  create<CalendarStore>((set) => ({
    selectedDate: new Date(),

    selectedEvent: null,

    setSelectedDate: (
      selectedDate
    ) =>
      set({
        selectedDate,
      }),

    setSelectedEvent: (
      selectedEvent
    ) =>
      set({
        selectedEvent,
      }),
  }));