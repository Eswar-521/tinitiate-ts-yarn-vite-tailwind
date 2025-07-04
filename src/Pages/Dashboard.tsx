import { FaUsers, FaChartLine, FaDollarSign, FaTasks } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          📊 Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-green-100 rounded shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center">
            <FaUsers className="text-green-600 text-3xl mb-2" />
            <h2 className="text-xl font-bold text-gray-800">1,200</h2>
            <p className="text-gray-600">Users</p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-100 rounded shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center">
            <FaChartLine className="text-blue-600 text-3xl mb-2" />
            <h2 className="text-xl font-bold text-gray-800">85%</h2>
            <p className="text-gray-600">Growth</p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-100 rounded shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center">
            <FaDollarSign className="text-yellow-600 text-3xl mb-2" />
            <h2 className="text-xl font-bold text-gray-800">$24K</h2>
            <p className="text-gray-600">Revenue</p>
          </div>

          {/* Card 4 */}
          <div className="bg-purple-100 rounded shadow p-6 hover:shadow-lg transition flex flex-col items-center justify-center">
            <FaTasks className="text-purple-600 text-3xl mb-2" />
            <h2 className="text-xl font-bold text-gray-800">32</h2>
            <p className="text-gray-600">Tasks</p>
          </div>
        </div>

        <div className="bg-white rounded shadow p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <ul className="space-y-2 text-gray-700">
            <li>✅ User John registered an account</li>
            <li>✅ Sales report generated</li>
            <li>✅ New product added to the catalog</li>
            <li>✅ Security settings updated</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
