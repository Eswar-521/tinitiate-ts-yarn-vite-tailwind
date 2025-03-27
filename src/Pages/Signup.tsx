import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Create an Account</h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Signup Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition">
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
