import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
