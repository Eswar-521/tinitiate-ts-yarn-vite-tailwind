import { FaUsers, FaChartLine, FaDollarSign, FaTasks } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Dashboard = () => {
  // dummy graph data
  const data = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 3000 },
    { month: "Mar", revenue: 4500 },
    { month: "Apr", revenue: 5000 },
    { month: "May", revenue: 6000 },
    { month: "Jun", revenue: 7000 },
  ];

  return (
    <section className="min-h-screen bg-emerald-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-10">
          📊 Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-emerald-50 rounded-xl border border-emerald-400 p-6 shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center justify-center">
            <FaUsers className="text-emerald-600 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-emerald-800">1,200</h2>
            <p className="text-emerald-700">Users</p>
          </div>
          <div className="bg-sky-50 rounded-xl border border-sky-400 p-6 shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center justify-center">
            <FaChartLine className="text-sky-600 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-sky-800">85%</h2>
            <p className="text-sky-700">Growth</p>
          </div>
          <div className="bg-yellow-50 rounded-xl border border-yellow-400 p-6 shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center justify-center">
            <FaDollarSign className="text-yellow-600 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-yellow-800">$24K</h2>
            <p className="text-yellow-700">Revenue</p>
          </div>
          <div className="bg-purple-50 rounded-xl border border-purple-400 p-6 shadow-md hover:shadow-xl transition hover:scale-105 flex flex-col items-center justify-center">
            <FaTasks className="text-purple-600 text-4xl mb-2" />
            <h2 className="text-2xl font-bold text-purple-800">32</h2>
            <p className="text-purple-700">Tasks</p>
          </div>
        </div>

        {/* Graph Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-300 transition hover:shadow-2xl mb-10">
          <h2 className="text-2xl font-bold text-emerald-800 mb-4">
            Revenue Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-300 transition hover:shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-emerald-800">
              Recent Activity
            </h2>
            <button className="text-sm text-emerald-700 hover:underline hover:text-emerald-900 transition">
              View All
            </button>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:bg-emerald-50 rounded p-2 transition">
              ✅ User John registered an account
            </li>
            <li className="hover:bg-emerald-50 rounded p-2 transition">
              ✅ Sales report generated
            </li>
            <li className="hover:bg-emerald-50 rounded p-2 transition">
              ✅ New product added to the catalog
            </li>
            <li className="hover:bg-emerald-50 rounded p-2 transition">
              ✅ Security settings updated
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
