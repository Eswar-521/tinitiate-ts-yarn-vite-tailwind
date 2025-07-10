import { useState } from "react";
import { FaMagic, FaBolt, FaStop, FaPlay, FaTachometerAlt } from "react-icons/fa";

const Animation = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [speed, setSpeed] = useState("animate-bounce");

  const toggleAnimation = () => setIsAnimating((prev) => !prev);

  const changeSpeed = (newSpeed: string) => setSpeed(newSpeed);

  return (
    <section className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-slate-800/90 backdrop-blur rounded-2xl p-10 shadow-2xl border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-400 mb-10 tracking-wide drop-shadow">
          <FaMagic className="inline-block mr-3 text-indigo-400 animate-spin-slow" />
          Animation Showcase
        </h1>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={toggleAnimation}
            className="flex items-center px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-700 transition"
          >
            {isAnimating ? (
              <>
                <FaStop className="mr-2" /> Stop
              </>
            ) : (
              <>
                <FaPlay className="mr-2" /> Start
              </>
            )}
          </button>
          <div className="flex items-center gap-2">
            <FaTachometerAlt />
            <select
              onChange={(e) => changeSpeed(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded px-2 py-1"
            >
              <option value="animate-bounce">Bounce</option>
              <option value="animate-pulse">Pulse</option>
              <option value="animate-spin">Spin</option>
              <option value="animate-none">None</option>
            </select>
          </div>
        </div>

        {/* Example Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-6 bg-indigo-700/80 backdrop-blur rounded-2xl border border-indigo-500 shadow
             hover:shadow-2xl transform hover:scale-105 transition duration-500
             ${isAnimating ? speed : "animate-none"}`}
          >
            <FaBolt className="text-yellow-400 text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Animated Icon</h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              The animation mode is controlled dynamically by the dropdown.
            </p>
          </div>

          <div
            className={`p-6 bg-purple-700/80 backdrop-blur rounded-2xl border border-purple-500 shadow
             hover:shadow-2xl transform hover:rotate-3 transition duration-500
             ${isAnimating ? speed : "animate-none"}`}
          >
            <FaMagic className="text-cyan-300 text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Magic Pulse</h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              Try combining start/stop and switching animation speed for effects.
            </p>
          </div>

          {/* Slide-in Card */}
          <div
            className={`p-6 bg-rose-700/80 backdrop-blur rounded-2xl border border-rose-500 shadow
            hover:shadow-2xl transform transition duration-500
            ${isAnimating ? "animate-slide-in" : ""}`}
          >
            <FaMagic className="text-pink-300 text-4xl mb-4" />
            <h2 className="text-2xl font-bold mb-2 tracking-tight">Slide In</h2>
            <p className="text-slate-200 text-sm leading-relaxed">
              This card demonstrates a slide-in animation when activated.
            </p>
          </div>
        </div>

        {/* Placeholder for future advanced Lottie/Framer Motion */}
        <div className="mt-12 text-center text-slate-400 border-t border-slate-700 pt-6 text-base">
          <p>
            You can extend this with <strong>Lottie</strong> or{" "}
            <strong>Framer Motion</strong> for more advanced animations next.
          </p>
        </div>
      </div>

      {/* Custom Slide-In animation style */}
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 1s ease forwards;
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Animation;
