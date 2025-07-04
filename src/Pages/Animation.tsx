import { FaMagic, FaBolt } from "react-icons/fa";

const Animation = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          <FaMagic className="inline-block mr-2 text-indigo-600" />
          Animation Showcase
        </h1>

        {/* Example Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-indigo-100 rounded shadow hover:shadow-lg transition transform hover:scale-105">
            <FaBolt className="text-indigo-600 text-3xl mb-4 animate-bounce" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Bouncing Icon</h2>
            <p className="text-gray-600 text-sm">
              This icon demonstrates a simple bounce animation using Tailwind's utilities.
            </p>
          </div>

          <div className="p-6 bg-indigo-100 rounded shadow hover:shadow-lg transition transform hover:rotate-2">
            <FaMagic className="text-indigo-600 text-3xl mb-4 animate-pulse" />
            <h2 className="text-xl font-bold text-gray-800 mb-2">Pulsing Icon</h2>
            <p className="text-gray-600 text-sm">
              This uses Tailwind’s <code>animate-pulse</code> class to add a subtle pulsing effect.
            </p>
          </div>
        </div>

        {/* Placeholder for future Lottie/Framer Motion animations */}
        <div className="mt-10 text-center text-gray-600">
          <p>
            Extend this page by embedding advanced animations with <strong>Lottie</strong> or{" "}
            <strong>Framer Motion</strong> for richer effects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Animation;
