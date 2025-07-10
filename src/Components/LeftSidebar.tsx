import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home, Info, User, Briefcase, Mail, LogIn,
  UserPlus, Key, ShoppingCart, Box, Search,
  Table, FileText, BarChart, Headphones, Video, Film,
  MousePointer, Edit3, Calendar, Shield, HelpCircle,
  LayoutDashboard, PieChart
} from "lucide-react";
import logo from "../assets/logo.png";

const LeftSidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [logoImage, setLogoImage] = useState<string | null>(null);

  const handleActive = (path: string) => setActive(path);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-72 h-screen bg-gray-900 text-white flex flex-col items-center shadow-xl transition-all overflow-y-auto">
      
      {/* Uploadable Logo */}
      <div className="flex flex-col items-center my-6">
        <label htmlFor="logo-upload" className="cursor-pointer group">
          <img
            src={logoImage || logo}
            alt="Logo"
            className="w-28 h-28 rounded-full border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300 object-cover"
          />
          <input
            type="file"
            id="logo-upload"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          <p className="text-xs text-gray-400 mt-2 group-hover:text-white">Click to upload logo</p>
        </label>
        <h2 className="mt-3 text-xl font-semibold text-gray-300">Welcome</h2>
      </div>

      {/* Navigation Links */}
      <nav className="w-full px-4 space-y-4 text-base font-semibold">
        {/* Home */}
        <Link
          to="/"
          onClick={() => handleActive("/")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/" ? "bg-blue-600 shadow-lg scale-105" : "hover:bg-gray-700 transition"}`}
        >
          <Home size={20} /> <span>Home</span>
        </Link>

        {/* Profile */}
        <Link
          to="/profile"
          onClick={() => handleActive("/profile")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/profile" ? "bg-blue-600 shadow-lg scale-105" : "hover:bg-gray-700 transition"}`}
        >
          <User size={20} /> <span>Profile</span>
        </Link>

        {/* Login */}
        <Link
          to="/login"
          onClick={() => handleActive("/login")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/login" ? "bg-green-600 shadow-lg scale-105" : "hover:bg-green-700 transition"}`}
        >
          <LogIn size={20} /> <span>Login</span>
        </Link>

        {/* Signup */}
        <Link
          to="/signup"
          onClick={() => handleActive("/signup")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/signup" ? "bg-purple-600 shadow-lg scale-105" : "hover:bg-purple-700 transition"}`}
        >
          <UserPlus size={20} /> <span>Signup</span>
        </Link>

        {/* Catalog */}
        <Link
          to="/catalog"
          onClick={() => handleActive("/catalog")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/catalog" ? "bg-yellow-600 shadow-lg scale-105" : "hover:bg-yellow-700 transition"}`}
        >
          <Box size={20} /> <span>Catalog</span>
        </Link>

        {/* Services + Subpages */}
        <h3 className="mt-4 px-6 text-gray-400 uppercase text-xs">Services</h3>
        {[
          { name: "Search", icon: Search, path: "/search" },
          { name: "Comparison", icon: BarChart, path: "/comparison" },
          { name: "Comparison Table", icon: Table, path: "/comparisontable" },
          { name: "Forms", icon: FileText, path: "/forms" },
          { name: "Data Tables", icon: Table, path: "/datatable" },
          { name: "Infographics", icon: PieChart, path: "/infographics" },
          { name: "Audio", icon: Headphones, path: "/audio" },
          { name: "Video", icon: Video, path: "/video" },
          { name: "Animation", icon: Film, path: "/animation" },
          { name: "Drag & Drop", icon: MousePointer, path: "/drag-drop" },
          { name: "Online Editor", icon: Edit3, path: "/editor" },
          { name: "Shopping Cart", icon: ShoppingCart, path: "/shopping-cart" },
          { name: "Calendar", icon: Calendar, path: "/calendar" },
        ].map(({ name, icon: Icon, path }) => (
          <Link
            key={name}
            to={path}
            onClick={() => handleActive(path)}
            className={`flex items-center space-x-4 py-3 px-6 rounded-lg
              ${active === path ? "bg-indigo-600 shadow-lg scale-105" : "hover:bg-gray-700 transition"}`}
          >
            <Icon size={20} /> <span>{name}</span>
          </Link>
        ))}

        {/* Dashboard */}
        <Link
          to="/dashboard"
          onClick={() => handleActive("/dashboard")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/dashboard" ? "bg-cyan-600 shadow-lg scale-105" : "hover:bg-cyan-700 transition"}`}
        >
          <LayoutDashboard size={20} /> <span>Dashboard</span>
        </Link>

        {/* Analytics */}
        <Link
          to="/analytics"
          onClick={() => handleActive("/analytics")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/analytics" ? "bg-rose-600 shadow-lg scale-105" : "hover:bg-rose-700 transition"}`}
        >
          <PieChart size={20} /> <span>Analytics</span>
        </Link>

        {/* Security */}
        <Link
          to="/security"
          onClick={() => handleActive("/security")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/security" ? "bg-slate-600 shadow-lg scale-105" : "hover:bg-slate-700 transition"}`}
        >
          <Shield size={20} /> <span>Security</span>
        </Link>

        {/* About */}
        <Link
          to="/about"
          onClick={() => handleActive("/about")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/about" ? "bg-gray-600 shadow-lg scale-105" : "hover:bg-gray-700 transition"}`}
        >
          <Info size={20} /> <span>About</span>
        </Link>

        {/* Contact */}
        <Link
          to="/contact"
          onClick={() => handleActive("/contact")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/contact" ? "bg-gray-600 shadow-lg scale-105" : "hover:bg-gray-700 transition"}`}
        >
          <Mail size={20} /> <span>Contact</span>
        </Link>

        {/* Help */}
        <Link
          to="/help"
          onClick={() => handleActive("/help")}
          className={`flex items-center space-x-4 py-3 px-6 rounded-lg
            ${active === "/help" ? "bg-orange-600 shadow-lg scale-105" : "hover:bg-orange-700 transition"}`}
        >
          <HelpCircle size={20} /> <span>Help</span>
        </Link>
      </nav>
    </div>
  );
};

export default LeftSidebar;
