import React from "react";
import { motion } from "framer-motion";
import { Code, PenTool, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building fast, responsive websites using modern frameworks like React, Next.js, and Vite.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps using React Native and Expo with native performance.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Designing clean and engaging user experiences with Figma, Tailwind CSS, and Framer Motion.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Deploying and managing apps using AWS, Docker, GitHub Actions, and CI/CD pipelines.",
    color: "from-green-400 to-blue-500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-800 text-white py-16 px-4 md:px-10">
      <div className="text-center mb-16">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          Our Services
        </motion.h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          We specialize in delivering modern, scalable, and beautiful digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`bg-gradient-to-br ${service.color} p-6 rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer`}
          >
            <service.icon size={40} className="mb-4 text-white" />
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-white text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
