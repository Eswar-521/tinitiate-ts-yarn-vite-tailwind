
import { motion } from "framer-motion";
import { Mail, MapPin, Code2, Github, Linkedin } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-black flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-lg text-white p-8 rounded-3xl shadow-xl border border-white/20"
      >
        {/* Profile Picture */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center"
        >
          <img
            src="/profile.jpg" // place your image in public folder
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
          <h1 className="mt-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-yellow-300">
            Eswar Reddy
          </h1>
          <p className="text-sm text-gray-300 mt-1 text-center">
            Full Stack Developer | React • Node • Tailwind
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="mt-8 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <Mail className="text-pink-400" />
            <span>eswar@example.com</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <MapPin className="text-green-400" />
            <span>Hyderabad, India</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
          >
            <Code2 className="text-yellow-300" />
            <span>React, Node.js, Tailwind, MongoDB</span>
          </motion.div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Github className="text-white hover:text-gray-300" size={24} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
            <Linkedin className="text-white hover:text-blue-400" size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
