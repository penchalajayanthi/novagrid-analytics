export type EventType =
  | "Meeting"
  | "Deadline"
  | "Presentation"
  | "Holiday"
  | "Training";

export interface CalendarAttendee {
  id: number;
  name: string;
  avatar: string;
}

export interface CalendarEvent {
  id: number;

  title: string;

  description: string;

  type: EventType;

  start: string;

  end: string;

  location: string;

  attendees: CalendarAttendee[];
}