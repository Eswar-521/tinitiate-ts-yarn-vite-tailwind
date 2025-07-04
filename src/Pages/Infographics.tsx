import { FaChartPie, FaChartLine, FaChartBar } from "react-icons/fa";

const Infographics = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaChartPie className="inline-block mr-2 text-pink-600" />
          Infographics Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-lg p-6 shadow hover:scale-105 transition">
            <FaChartBar size={40} className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Sales Statistics</h2>
            <p className="text-sm">Compare sales across quarters with detailed bar charts.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-lg p-6 shadow hover:scale-105 transition">
            <FaChartPie size={40} className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Market Share</h2>
            <p className="text-sm">Pie charts showing the distribution of market segments.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg p-6 shadow hover:scale-105 transition">
            <FaChartLine size={40} className="mb-4" />
            <h2 className="text-xl font-bold mb-2">Growth Trends</h2>
            <p className="text-sm">Analyze growth patterns and future projections.</p>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-600">
          <p>Extend this dashboard with dynamic charts using Chart.js, ApexCharts, or D3.js.</p>
        </div>
      </div>
    </section>
  );
};

export default Infographics;
