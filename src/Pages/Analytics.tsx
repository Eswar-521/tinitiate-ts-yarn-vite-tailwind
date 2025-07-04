import { FaChartBar, FaChartPie, FaChartLine } from "react-icons/fa";

const Analytics = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          📈 Analytics
        </h1>

        {/* Metrics cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-100 p-6 rounded shadow hover:shadow-lg transition text-center">
            <FaChartBar className="text-indigo-600 text-3xl mb-2 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800">150K</h2>
            <p className="text-gray-600">Total Views</p>
          </div>
          <div className="bg-green-100 p-6 rounded shadow hover:shadow-lg transition text-center">
            <FaChartPie className="text-green-600 text-3xl mb-2 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800">12,500</h2>
            <p className="text-gray-600">Active Users</p>
          </div>
          <div className="bg-pink-100 p-6 rounded shadow hover:shadow-lg transition text-center">
            <FaChartLine className="text-pink-600 text-3xl mb-2 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800">95%</h2>
            <p className="text-gray-600">Conversion Rate</p>
          </div>
        </div>

        {/* Placeholder for future charts */}
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Traffic Overview</h2>
          <div className="w-full h-64 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Chart.js or Recharts chart goes here
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
