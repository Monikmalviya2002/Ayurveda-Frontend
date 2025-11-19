// File: src/pages/Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!fullName || !email || !password || !confirmPassword)
      return setError("Please fill all fields.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");
    if (password !== confirmPassword)
      return setError("Passwords do not match.");

    console.log({ fullName, email, password, role });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700">🍃</div>
            <div>
              <h1 className="text-2xl font-extrabold text-black">Create Account</h1>
              <p className="text-sm text-black">Join as a user, doctor or admin</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <div className="text-sm text-red-600">{error}</div>}

            <label className="block">
              <span className="text-sm font-medium text-black">Full name</span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-100"
                placeholder="Your full name"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-black">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-100"
                placeholder="you@example.com"
                required
              />
            </label>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-black">Password</span>

                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-100"
                    placeholder="Create password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((s) => !s)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-600 hover:text-black"
                  >
                    {showPassword ? (
                      // eye-off icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.04.159-2.042.45-3.0M9.88 9.88A3 3 0 1114.12 14.12M3 3l18 18" />
                      </svg>
                    ) : (
                      // eye icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-medium text-black">Confirm Password</span>

                <div className="relative mt-1">
                  <input
                    type={showConfirm ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-pink-100"
                    placeholder="Confirm password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm((s) => !s)}
                    aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                    className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-600 hover:text-black"
                  >
                    {showConfirm ? (
                      // eye-off icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.04.159-2.042.45-3.0M9.88 9.88A3 3 0 1114.12 14.12M3 3l18 18" />
                      </svg>
                    ) : (
                      // eye icon
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
            </div>

            <div>
              <div className="text-sm font-medium text-black mb-2">Register as</div>
              <div className="flex gap-2">
                {["user", "doctor", "admin"].map((r) => (
                  <label
                    key={r}
                    className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border ${
                      role === r
                        ? "border-emerald-500 bg-emerald-50 shadow-sm"
                        : "border-gray-200"
                    }`}
                  >
                    <input
                      type="radio"
                      name="role"
                      value={r}
                      checked={role === r}
                      onChange={() => setRole(r)}
                      className="accent-emerald-500"
                    />
                    <div>
                      <div className="text-sm font-semibold text-black capitalize">{r}</div>
                      <div className="text-xs text-black">
                        {r === "user"
                          ? "Basic access"
                          : r === "doctor"
                          ? "Professional"
                          : "Admin"}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            >
              Create account
            </button>
          </form>
        </div>

        <div className="bg-emerald-50 px-6 py-4 text-center text-sm text-black">
          Already registered?{" "}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
