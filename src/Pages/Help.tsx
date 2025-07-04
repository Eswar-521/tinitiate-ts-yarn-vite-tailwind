import { FaQuestionCircle, FaEnvelope, FaPhone } from "react-icons/fa";

const Help = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaQuestionCircle className="inline-block mr-2 text-blue-600" />
          Help & Support
        </h1>

        <div className="space-y-6">
          <div className="bg-blue-100 p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-sm">
              Find quick answers to common questions about using our platform.
            </p>
          </div>

          <div className="bg-blue-100 p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Support</h2>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaEnvelope className="text-blue-600" /> support@example.com
              <FaPhone className="text-blue-600 ml-4" /> +1 (555) 123-4567
            </div>
          </div>

          <div className="bg-blue-100 p-4 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Live Chat</h2>
            <p className="text-gray-600 text-sm">
              Our team is available for live chat during business hours.
            </p>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition">
              Start Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
