import {
    FiCalendar,
    FiChevronLeft,
    FiChevronRight,
    FiPlus,
} from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
interface CalendarHeaderProps {
    currentMonth: string;
    view: "month" | "week";

    onPrev: () => void;
    onNext: () => void;
    onToday: () => void;

    onViewChange: (
        view: "month" | "week"
    ) => void;

    onAddEvent: () => void;
}

const CalendarHeader = ({
    currentMonth,
    view,
    onPrev,
    onNext,
    onToday,
    onViewChange,
    onAddEvent,
}: CalendarHeaderProps) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">

                {/* LEFT */}

                <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">

                        <FiCalendar
                            className="text-blue-600"
                            size={25}
                        />

                    </div>

                    <div>

                        <h1 className="text-3xl font-bold text-slate-800">
                            Calendar
                        </h1>

                        <p className="mt-1 text-slate-500">
                            Schedule meetings, deadlines and important events.
                        </p>

                    </div>

                </div>

                {/* RIGHT */}

                <div className="flex flex-wrap items-center justify-end gap-3">

                    {/* Month Navigation */}

                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50">

                        <button
                            onClick={onPrev}
                            className="rounded-l-xl p-3 transition hover:bg-slate-200"
                        >
                            <FiChevronLeft size={18} />
                        </button>

                        <div className="min-w-[170px] px-5 text-center">

                            <h2 className="font-semibold text-slate-800">
                                {currentMonth}
                            </h2>

                        </div>

                        <button
                            onClick={onNext}
                            className="rounded-r-xl p-3 transition hover:bg-slate-200"
                        >
                            <FiChevronRight size={18} />
                        </button>

                    </div>

                    {/* Today */}

                    <button
                        onClick={onToday}
                        className="rounded-xl border border-blue-600 px-5 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
                    >
                        Today
                    </button>

                    {/* View */}

                    <div className="flex overflow-hidden rounded-xl border border-slate-200">

                        <button
                            onClick={() =>
                                onViewChange("month")
                            }
                            className={`px-5 py-3 font-medium transition ${view === "month"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            Month
                        </button>

                        <button
                            onClick={() =>
                                onViewChange("week")
                            }
                            className={`px-5 py-3 font-medium transition ${view === "week"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            Week
                        </button>

                    </div>

                    {/* Add Event */}

                    <Tooltip title="Add Event" arrow placement="top">
                        <button
                            onClick={onAddEvent}
                            className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow transition hover:bg-blue-700"
                        >
                            <FiPlus size={20} />
                        </button>
                    </Tooltip>

                </div>

            </div>

        </div>
    );
};

export default CalendarHeader;