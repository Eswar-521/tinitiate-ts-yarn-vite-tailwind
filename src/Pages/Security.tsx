import { FaShieldAlt, FaLock, FaKey } from "react-icons/fa";

const Security = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          🔒 Security Center
        </h1>

        {/* Security status cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-100 p-6 rounded shadow hover:shadow-lg transition text-center">
            <FaShieldAlt className="text-green-600 text-3xl mb-2 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800">Secure</h2>
            <p className="text-gray-600">Your account is protected</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded shadow hover:shadow-lg transition text-center">
            <FaLock className="text-yellow-600 text-3xl mb-2 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800">2FA Enabled</h2>
            <p className="text-gray-600">Two-factor authentication active</p>
          </div>
          <div className="bg-red-100 p-6 rounded shadow hover:shadow-lg transition text-center">
            <FaKey className="text-red-600 text-3xl mb-2 mx-auto" />
            <h2 className="text-xl font-bold text-gray-800">Change Password</h2>
            <p className="text-gray-600">Last changed 3 months ago</p>
          </div>
        </div>

        {/* Recommendations section */}
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Security Best Practices</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Use a strong, unique password</li>
            <li>Keep your devices up to date</li>
            <li>Enable multi-factor authentication</li>
            <li>Review account activity regularly</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Security;
