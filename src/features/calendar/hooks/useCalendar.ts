import {
  useEffect,
  useState,
} from "react";

import { calendarService } from "../services/calendarService";

import type {
  CalendarEvent,
} from "../types/calendar.types";

export const useCalendar = () => {
  const [events, setEvents] =
    useState<CalendarEvent[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const data =
        await calendarService.getEvents();

      setEvents(data);

      setLoading(false);
    };

    load();
  }, []);

  return {
    events,
    loading,
  };
};