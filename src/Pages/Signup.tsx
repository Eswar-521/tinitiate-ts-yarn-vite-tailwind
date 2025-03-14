import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Signup</h1>
      <form className="space-y-4">
        <input 
          type="text" 
          placeholder="Full Name" 
          style={{ width: "300px", padding: "8px", fontSize: "16px", border: "1px solid gray", borderRadius: "5px" }}
        />
        <input 
          type="email" 
          placeholder="Email" 
          style={{ width: "300px", padding: "8px", fontSize: "16px", border: "1px solid gray", borderRadius: "5px" }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          style={{ width: "300px", padding: "8px", fontSize: "16px", border: "1px solid gray", borderRadius: "5px" }}
        />
        <button 
          style={{ backgroundColor: "green", color: "white", padding: "10px", borderRadius: "5px", width: "100%" }}
        >
          Sign Up
        </button>
      </form>
      <p className="mt-2">
        <Link to="/login" style={{ color: "blue" }}>Already have an account? Login</Link>
      </p>
    </div>
  );
};

export default Signup;
