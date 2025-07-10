import { FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa";

const Infographics = () => {
  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto bg-slate-800/90 backdrop-blur rounded-2xl p-10 shadow-2xl border border-slate-700 transition-all duration-500">
        <h1 className="text-5xl font-extrabold text-center text-emerald-400 mb-12 drop-shadow-md tracking-wide">
          <FaChartPie className="inline-block mr-3 text-cyan-400" />
          Infographics Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-rose-800/80 backdrop-blur rounded-2xl p-6 border border-rose-500 shadow hover:scale-105 hover:bg-rose-700/90 transition duration-300">
            <FaChartBar size={48} className="mb-4 text-yellow-300 drop-shadow" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Sales Statistics</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Compare sales across quarters with clear, actionable bar charts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-purple-800/80 backdrop-blur rounded-2xl p-6 border border-purple-500 shadow hover:scale-105 hover:bg-purple-700/90 transition duration-300">
            <FaChartPie size={48} className="mb-4 text-cyan-300 drop-shadow" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Market Share</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Pie charts showing the distribution of market segments with crisp labels.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-800/80 backdrop-blur rounded-2xl p-6 border border-blue-500 shadow hover:scale-105 hover:bg-blue-700/90 transition duration-300">
            <FaChartLine size={48} className="mb-4 text-emerald-300 drop-shadow" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Growth Trends</h2>
            <p className="text-sm text-slate-200 leading-relaxed">
              Analyze growth patterns and future projections with trend lines.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center text-slate-400 text-base border-t border-slate-700 pt-6">
          <p>
            You can extend this dashboard with interactive charts
            using Chart.js, ApexCharts, or D3.js for even deeper analytics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infographics;
