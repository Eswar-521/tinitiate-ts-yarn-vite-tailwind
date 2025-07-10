import { FaCalendarAlt } from "react-icons/fa";

const Calendar = () => {
  const today = new Date();
  const formattedToday = today.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Sample events
  const events = [
    { title: "Team Meeting", time: "10:00 AM", date: "Today" },
    { title: "Doctor Appointment", time: "3:30 PM", date: "Today" },
    { title: "Friend's Birthday", time: "All Day", date: "Tomorrow" },
  ];

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-emerald-400 mb-10 tracking-wide drop-shadow">
          📅 Calendar
        </h1>

        <div className="bg-slate-800/90 backdrop-blur rounded-2xl shadow-xl border border-slate-700 p-8 hover:shadow-2xl transition">
          <div className="flex items-center justify-center mb-4">
            <FaCalendarAlt className="text-blue-400 text-4xl mr-3 animate-pulse" />
            <h2 className="text-3xl font-bold tracking-tight">Your Events</h2>
          </div>

          {/* Live date */}
          <div className="text-center text-slate-300 mb-6">
            <p className="text-xl font-semibold">Today is {formattedToday}</p>
          </div>

          {/* Event list */}
          <div className="bg-slate-900 rounded-xl border border-slate-700 p-4 space-y-3">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-slate-700/50 rounded p-3 hover:bg-slate-600 transition"
              >
                <h3 className="text-lg font-bold text-emerald-300">{event.title}</h3>
                <p className="text-slate-300 text-sm">
                  {event.date} @ {event.time}
                </p>
              </div>
            ))}
          </div>

          {/* Calendar placeholder */}
          <div className="w-full h-96 mt-6 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center text-slate-400 text-lg font-mono">
            [Interactive calendar coming soon]
          </div>

          <p className="text-center text-slate-400 mt-6 text-base border-t border-slate-700 pt-4">
            You can integrate <strong>FullCalendar</strong> or <strong>react-big-calendar</strong>{" "}
            here for a fully interactive experience with scheduling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
