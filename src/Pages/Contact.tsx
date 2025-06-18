import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>

        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We'd love to hear from you! Fill out the form or reach out through the information below.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-start space-x-4">
              <Mail className="text-pink-500" size={26} />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-300">support@example.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-green-400" size={26} />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-400" size={26} />
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-300">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-xl shadow-lg space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label className="block text-sm text-gray-200 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-200 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-200 mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-pink-600 hover:bg-pink-700 transition rounded-lg font-semibold text-white shadow-md"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Optional Map */}
        { <div className="mt-12 w-full h-64">
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full rounded-lg border-none"
            loading="lazy"
          ></iframe>
        </div> }
      </div>
    </div>
  );
};

export default Contact;
