import React from "react";
import {
  SiTypescript,
  SiYarn,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 py-5 shadow-md animate-fade-in">
      <div className="container mx-auto px-4 flex items-center justify-center flex-wrap gap-4">
        {/* Project Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
        

          {/* Tech Icons beside the title */}
          <span className="flex items-center gap-3 text-white text-2xl md:text-3xl">
            <SiTypescript className="hover:text-blue-400 transition-transform duration-300 hover:scale-110" title="TypeScript" /><span>ts</span>
            <SiYarn className="hover:text-cyan-300 transition-transform duration-300 hover:scale-110" title="Yarn" /><span>yarn</span>
            <SiVite className="hover:text-yellow-300 transition-transform duration-300 hover:scale-110" title="Vite" /><span>vite</span>
            <SiTailwindcss className="hover:text-teal-300 transition-transform duration-300 hover:scale-110" title="Tailwind CSS" /><span>Tailwind</span>
          </span>
        </h1>
      </div>

      {/* Fade animation */}
      <style>
        {`
          @keyframes fade-in {
            0% { opacity: 0; transform: translateY(-10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 1s ease-out forwards;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
