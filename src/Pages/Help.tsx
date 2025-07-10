import { FaQuestionCircle, FaEnvelope, FaPhone, FaComments } from "react-icons/fa";

const Help = () => {
  return (
    <section className="min-h-screen bg-sky-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8 border border-sky-300">
        <h1 className="text-4xl font-extrabold text-center text-sky-800 mb-10 flex items-center justify-center gap-3">
          <FaQuestionCircle className="text-sky-600 animate-pulse" />
          Help & Support
        </h1>

        <div className="space-y-8">
          {/* FAQ */}
          <div className="border-l-4 border-sky-600 bg-white p-5 rounded-xl shadow hover:shadow-2xl transition hover:scale-105">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-sky-600 text-white p-2 rounded-full">
                <FaQuestionCircle />
              </span>
              <h2 className="text-xl font-bold text-sky-800">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-sky-700 text-sm mb-2">
              Find quick answers to common questions about using our platform.
            </p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded transition w-fit">
              View FAQs
            </button>
          </div>

          {/* Contact Support */}
          <div className="border-l-4 border-green-600 bg-white p-5 rounded-xl shadow hover:shadow-2xl transition hover:scale-105">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-600 text-white p-2 rounded-full">
                <FaEnvelope />
              </span>
              <h2 className="text-xl font-bold text-green-800">
                Contact Support
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 text-green-700 text-sm mt-2">
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <FaEnvelope className="text-green-600" />
                support@example.com
              </div>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <FaPhone className="text-green-600" />
                +1 (555) 123-4567
              </div>
            </div>
            <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition w-fit">
              Send Email
            </button>
          </div>

          {/* Live Chat */}
          <div className="border-l-4 border-purple-600 bg-white p-5 rounded-xl shadow hover:shadow-2xl transition hover:scale-105">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-purple-600 text-white p-2 rounded-full">
                <FaComments />
              </span>
              <h2 className="text-xl font-bold text-purple-800">Live Chat</h2>
            </div>
            <p className="text-purple-700 text-sm mb-2">
              Our team is available for live chat during business hours.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition w-fit flex items-center gap-2">
              <FaComments /> Start Chat
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
