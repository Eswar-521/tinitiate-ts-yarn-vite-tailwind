import { FaCalendarAlt } from "react-icons/fa";

const Calendar = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📅 Calendar
        </h1>

        {/* Calendar placeholder */}
        <div className="bg-white rounded shadow hover:shadow-lg transition p-6">
          <div className="flex items-center justify-center mb-4">
            <FaCalendarAlt className="text-blue-600 text-3xl mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Your Events</h2>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Calendar component goes here
          </div>
          <p className="text-center text-gray-600 mt-4">
            You can integrate <strong>FullCalendar</strong> or <strong>react-big-calendar</strong> here for a fully interactive calendar experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
