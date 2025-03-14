import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, User, Briefcase, Mail, LogIn, UserPlus, Key } from "lucide-react"; // Icons

const LeftSidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname); // Track active button

  // Function to handle active button state
  const handleActive = (path) => {
    setActive(path);
  };

  return (
    <div className="w-72 h-screen bg-gray-900 text-white flex flex-col items-center shadow-xl transition-all">
      
      {/* Image at the Top */}
      <div className="flex flex-col items-center my-6">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-28 h-28 rounded-full border-4 border-white shadow-md hover:scale-110 transition-transform duration-300"
        />
        <h2 className="mt-3 text-xl font-semibold text-gray-300">Welcome</h2>
      </div>

      {/* Navigation Links */}
      <nav className="w-full">
        <ul className="space-y-3 w-full">
          {[
            { name: "Home", icon: Home, path: "/" },
            { name: "About", icon: Info, path: "/about" },
            { name: "Services", icon: Briefcase, path: "/services" },
            { name: "Profile", icon: User, path: "/profile" },
            { name: "Contact", icon: Mail, path: "/contact" },
          ].map(({ name, icon: Icon, path }) => (
            <li key={name}>
              <Link
                to={path}
                onClick={() => handleActive(path)}
                className={`flex items-center space-x-4 py-3 px-6 rounded-lg text-lg transition duration-300
                  ${active === path ? "bg-blue-600 shadow-lg scale-105" : "bg-gray-800 hover:bg-gray-700"}`}
              >
                <Icon size={22} />
                <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Login Section */}
      <div className="w-full px-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-3">Login</h3>
        <Link
          to="/login"
          onClick={() => handleActive("/login")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg text-lg transition duration-300 shadow-md
            ${active === "/login" ? "bg-green-600 shadow-lg scale-105" : "bg-green-700 hover:bg-green-600"}`}
        >
          <LogIn size={22} />
          <span>Login</span>
        </Link>
        <Link
          to="/forgot-password"
          className="text-sm text-gray-400 hover:text-gray-200 mt-2 block text-center"
        >
          <Key size={16} className="inline mr-1" />
          Forgot Password?
        </Link>
      </div>

      {/* Signup Section */}
      <div className="w-full px-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-300 mb-3">Signup</h3>
        <Link
          to="/signup"
          onClick={() => handleActive("/signup")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg text-lg transition duration-300 shadow-md
            ${active === "/signup" ? "bg-purple-600 shadow-lg scale-105" : "bg-purple-700 hover:bg-purple-600"}`}
        >
          <UserPlus size={22} />
          <span>Signup</span>
        </Link>
        <p className="text-sm text-gray-400 mt-2 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-300">
            Login here
          </Link>
        </p>
      </div>

    </div>
  );
};

export default LeftSidebar;
