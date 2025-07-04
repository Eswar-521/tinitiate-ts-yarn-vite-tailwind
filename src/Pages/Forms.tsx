import { FaWpforms, FaPaperPlane } from "react-icons/fa";

const Forms = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          <FaWpforms className="inline-block mr-2 text-indigo-600" />
          Advanced Form
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full px-4 py-3 border rounded focus:outline-none focus:ring focus:ring-indigo-400"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition flex items-center justify-center"
          >
            <FaPaperPlane className="mr-2" /> Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Forms;
