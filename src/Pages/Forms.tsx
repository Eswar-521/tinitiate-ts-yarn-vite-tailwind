import { 
  FaWpforms, 
  FaPaperPlane, 
  FaPhoneAlt, 
  FaUser, 
  FaEnvelope, 
  FaComments, 
  FaFileUpload, 
  FaCalendarAlt 
} from "react-icons/fa";

const Forms = () => {
  return (
    <section className="min-h-screen bg-yellow-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8 space-y-6 border-2 border-red-600">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-4 flex items-center justify-center gap-2">
          <FaWpforms className="text-red-600" /> Feature-Rich Contact Form
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-red-700 font-semibold mb-2 flex items-center gap-2">
              <FaUser /> Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-red-300 rounded focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-red-700 font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-red-300 rounded focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-red-700 font-semibold mb-2 flex items-center gap-2">
              <FaPhoneAlt /> Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-red-300 rounded focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-red-700 font-semibold mb-2 flex items-center gap-2">
              <FaCalendarAlt /> Appointment Date
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-red-300 rounded focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-red-700 font-semibold mb-2 flex items-center gap-2">
              <FaFileUpload /> Attach File
            </label>
            <input
              type="file"
              className="w-full px-4 py-3 border border-red-300 rounded focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          <div>
            <label className="block text-red-700 font-semibold mb-2 flex items-center gap-2">
              <FaComments /> Message
            </label>
            <textarea
              placeholder="Enter your message"
              rows={4}
              className="w-full px-4 py-3 border border-red-300 rounded focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="newsletter"
              className="accent-red-600"
            />
            <label htmlFor="newsletter" className="text-red-700 font-semibold">
              Subscribe to our newsletter
            </label>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition flex items-center gap-2"
            >
              <FaPaperPlane /> Send
            </button>
            <button
              type="reset"
              className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Forms;
