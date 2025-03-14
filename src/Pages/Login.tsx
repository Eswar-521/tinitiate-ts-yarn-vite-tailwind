import React from "react";

const Login: React.FC = () => {
  return (
    <div className="bg-blue-500 shadow-lg p-6 rounded-md w-80 flex justify-center">
      <h2 className="text-lg font-semibold mb-3 text-center">Login</h2>
      <input type="email" placeholder="Email" className="w-full border p-2 mb-2 rounded" />
      <input type="password" placeholder="Password" className="w-full border p-2 mb-2 rounded" />
      <button className="bg-blue-500 text-white w-full p-2 rounded">Login</button>
      <p className="text-center mt-2 text-sm">
        Don't have an account? <a href="#" className="text-blue-500">Signup</a>
      </p>
    </div>
  );
};

export default Login;
