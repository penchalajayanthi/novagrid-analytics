import { useMemo, useState } from "react";
import {
  addMonths,
  format,
  subMonths,
} from "date-fns";

import CalendarHeader from "../components/CalendarHeader";
import CalendarToolbar from "../components/CalendarToolbar";
import CalendarStats from "../components/CalendarStats";
import MonthView from "../components/MonthView";
import WeekView from "../components/WeekView";
import TodayEvents from "../components/TodayEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import EventModal from "../components/EventModal";

import { useCalendar } from "../hooks/useCalendar";

const Calendar = () => {
  const { events, loading } = useCalendar();

  const [currentDate, setCurrentDate] =
    useState(new Date());

  const [view, setView] =
    useState<"month" | "week">("month");

  const [search, setSearch] =
    useState("");

  const [type, setType] =
    useState("All");

  const [showModal, setShowModal] =
    useState(false);

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        event.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType =
        type === "All" ||
        event.type === type;

      return (
        matchesSearch &&
        matchesType
      );
    });
  }, [events, search, type]);

  if (loading) {
    return (
      <div className="h-[700px] animate-pulse rounded-2xl bg-slate-200" />
    );
  }

  return (
    <div className="space-y-6">

      <CalendarHeader
        currentMonth={format(
          currentDate,
          "MMMM yyyy"
        )}
        view={view}
        onPrev={() =>
          setCurrentDate(
            subMonths(currentDate, 1)
          )
        }
        onNext={() =>
          setCurrentDate(
            addMonths(currentDate, 1)
          )
        }
        onToday={() =>
          setCurrentDate(new Date())
        }
        onViewChange={setView}
        onAddEvent={() =>
          setShowModal(true)
        }
      />

      <CalendarStats
        events={filteredEvents}
      />

      <CalendarToolbar
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeChange={setType}
        onAddEvent={() =>
          setShowModal(true)
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">

        <div className="xl:col-span-3">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            {view === "month" ? (
              <MonthView
                currentDate={currentDate}
                events={filteredEvents}
                onSelectDate={() => {}}
              />
            ) : (
              <WeekView
                currentDate={currentDate}
                events={filteredEvents}
              />
            )}

          </div>

        </div>

        <div className="space-y-6">

          <TodayEvents
            events={filteredEvents}
          />

          <UpcomingEvents
            events={filteredEvents}
          />

        </div>

      </div>

      <EventModal
        open={showModal}
        onClose={() =>
          setShowModal(false)
        }
        onSave={(event) => {
          console.log(event);
          setShowModal(false);
        }}
      />

    </div>
  );
};

export default Calendar;