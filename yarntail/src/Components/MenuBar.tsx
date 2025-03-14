import React from "react";

const MenuBar: React.FC = () => {
  return (
    <nav className="bg-gray-700 text-white p-3 flex justify-center space-x-4">
      <a href="#" className="hover:text-blue-400">Home</a>
      <a href="#" className="hover:text-blue-400">About</a>
      <a href="#" className="hover:text-blue-400">Contact</a>
    </nav>
  );
};

export default MenuBar;
