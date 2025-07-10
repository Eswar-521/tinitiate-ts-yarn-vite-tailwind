import { useState, useEffect } from "react";
import { FaShieldAlt, FaLock, FaKey, FaUserCheck, FaExclamationTriangle } from "react-icons/fa";

const Security = () => {
  const [passwordStrength, setPasswordStrength] = useState("Strong");
  const [lastLogin, setLastLogin] = useState("");
  const [is2FAEnabled, setIs2FAEnabled] = useState(true);
  const [loginActivity, setLoginActivity] = useState<string[]>([]);

  useEffect(() => {
    // Imagine this came from an API
    setLastLogin("2025-07-05 14:23");
    setPasswordStrength("Strong");
    setIs2FAEnabled(true);
    setLoginActivity([
      "2025-07-05 14:23 - India (Chrome)",
      "2025-07-03 09:15 - Germany (Edge)",
      "2025-07-01 17:40 - USA (Firefox)",
    ]);
  }, []);

  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-emerald-400 mb-10 tracking-tight drop-shadow">
          🔒 Security Center
        </h1>

        {/* Security status cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-slate-800 border border-green-600/50 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition text-center">
            <FaShieldAlt className="text-green-400 text-4xl mb-3 mx-auto animate-pulse" />
            <h2 className="text-2xl font-bold text-emerald-300">Secure</h2>
            <p className="text-slate-300">Your account is protected</p>
          </div>
          <div className="bg-slate-800 border border-yellow-600/50 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition text-center">
            <FaLock className="text-yellow-400 text-4xl mb-3 mx-auto animate-bounce" />
            <h2 className="text-2xl font-bold text-amber-300">2FA {is2FAEnabled ? "Enabled" : "Disabled"}</h2>
            <p className="text-slate-300">
              Two-factor authentication is {is2FAEnabled ? "active" : "not active"}
            </p>
          </div>
          <div className="bg-slate-800 border border-rose-600/50 p-6 rounded-xl shadow hover:shadow-2xl hover:scale-105 transition text-center">
            <FaKey className="text-rose-400 text-4xl mb-3 mx-auto animate-spin" />
            <h2 className="text-2xl font-bold text-rose-300">Password</h2>
            <p className="text-slate-300">Strength: {passwordStrength}</p>
          </div>
        </div>

        {/* Dynamic details */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow hover:shadow-2xl transition mb-8">
          <h2 className="text-3xl font-bold text-emerald-300 mb-6">Security Details</h2>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 text-slate-300 text-base">
            <div>
              <FaUserCheck className="inline mr-2 text-green-400" />
              Last Login: <span className="font-mono">{lastLogin}</span>
            </div>
            <div>
              Password Strength:{" "}
              <span
                className={`font-bold ${
                  passwordStrength === "Strong"
                    ? "text-green-400"
                    : passwordStrength === "Medium"
                    ? "text-yellow-400"
                    : "text-rose-400"
                }`}
              >
                {passwordStrength}
              </span>
            </div>
          </div>
        </div>

        {/* Login activity timeline */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow hover:shadow-2xl transition mb-8">
          <h2 className="text-3xl font-bold text-emerald-300 mb-6">Recent Login Activity</h2>
          <ul className="space-y-3 text-slate-300 font-mono">
            {loginActivity.map((entry, index) => (
              <li
                key={index}
                className="border-b border-slate-700 pb-2 hover:text-emerald-300 transition"
              >
                {entry}
              </li>
            ))}
          </ul>
        </div>

        {/* Suspicious activity alert placeholder */}
        <div className="bg-slate-800 border border-red-700 p-8 rounded-xl shadow hover:shadow-2xl transition mb-8">
          <h2 className="text-3xl font-bold text-rose-400 mb-6 flex items-center">
            <FaExclamationTriangle className="mr-2 animate-pulse" />
            Suspicious Activity Alerts
          </h2>
          <p className="text-slate-300 mb-2">
            No suspicious activity detected at this time.
          </p>
          <p className="text-slate-400 text-sm">
            We continuously monitor for unusual logins and will alert you here if something is wrong.
          </p>
        </div>

        {/* Recommendations */}
        <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl shadow hover:shadow-2xl transition">
          <h2 className="text-3xl font-bold text-emerald-300 mb-6">Security Best Practices</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 text-base">
            <li>Use a strong, unique password</li>
            <li>Keep your devices up to date</li>
            <li>Enable multi-factor authentication</li>
            <li>Review account activity regularly</li>
          </ul>
          <p className="text-center text-slate-400 mt-6 border-t border-slate-700 pt-4">
            Contact our security team for advanced support if needed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
