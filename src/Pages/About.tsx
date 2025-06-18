import React from "react";
import { motion } from "framer-motion";

// Dummy team data
const teamMembers = [
  { name: "Eswar", role: "Frontend Engineer", avatar: "https://i.pravatar.cc/150?img=32" },
  { name: "Kiran", role: "Backend Developer", avatar: "https://i.pravatar.cc/150?img=36" },
  { name: "Divya", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=47" },
  { name: "Ravi", role: "DevOps Specialist", avatar: "https://i.pravatar.cc/150?img=14" },
];

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 opacity-60"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-noise z-0 opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 md:px-20 text-white flex flex-col items-center">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        <motion.p
          className="mt-6 text-center max-w-3xl text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We are passionate creators building modern web apps using cutting-edge technologies.
          From UI design to full-stack engineering, our diverse team works together to deliver impactful solutions.
        </motion.p>

        {/* Vision/Tech/Goal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12 w-full max-w-5xl">
          {[
            {
              title: "🌟 Our Vision",
              color: "from-cyan-400 to-blue-500",
              text: "To innovate digital experiences that inspire and empower people worldwide.",
            },
            {
              title: "💻 Technologies",
              color: "from-pink-500 to-fuchsia-600",
              text: "React, TypeScript, Tailwind, Node.js, MongoDB, GraphQL, and more.",
            },
            {
              title: "🤝 Collaboration",
              color: "from-green-400 to-emerald-600",
              text: "Working with clients and teams to build beautiful, functional products.",
            },
            {
              title: "🎯 Our Goal",
              color: "from-yellow-400 to-orange-500",
              text: "To continuously grow, share knowledge, and contribute to the tech community.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg hover:scale-105 transform transition-transform duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.3 }}
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <motion.div
          className="mt-20 w-full max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-white underline decoration-pink-500">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full shadow-lg border-4 border-white"
                />
                <h4 className="mt-4 text-lg font-bold text-pink-300">{member.name}</h4>
                <p className="text-sm text-gray-200">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
