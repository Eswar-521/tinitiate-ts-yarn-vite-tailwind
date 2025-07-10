import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";

const Analytics = () => {
  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-emerald-400 mb-10 tracking-tight drop-shadow">
          📈 Analytics Dashboard
        </h1>

        <div className="text-center text-slate-400 mb-8 text-base">
          {today}
        </div>

        {/* Metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition text-center border border-slate-700">
            <FaChartBar className="text-indigo-400 text-4xl mb-3 mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold text-emerald-300">150K</h2>
            <p className="text-slate-300">Total Views</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition text-center border border-slate-700">
            <FaChartPie className="text-green-400 text-4xl mb-3 mx-auto animate-spin" />
            <h2 className="text-2xl font-bold text-emerald-300">12,500</h2>
            <p className="text-slate-300">Active Users</p>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition text-center border border-slate-700">
            <FaChartLine className="text-pink-400 text-4xl mb-3 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-emerald-300">95%</h2>
            <p className="text-slate-300">Conversion Rate</p>
          </div>
        </div>

        {/* Chart placeholder */}
        <div className="bg-slate-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition border border-slate-700">
          <h2 className="text-3xl font-bold text-emerald-300 mb-6">Traffic Overview</h2>
          <div className="w-full h-64 bg-slate-900 rounded flex items-center justify-center text-slate-500 text-lg font-mono border border-slate-700">
            [Chart.js or Recharts visualization goes here]
          </div>
          <p className="text-center text-slate-400 mt-4 border-t border-slate-700 pt-4">
            Add interactive charts with Chart.js or Recharts in the future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
