// File: src/pages/Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) return setError("Please fill all fields.");
    console.log({ email, password, role });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700">🍃</div>
            <div>
              <h1 className="text-2xl font-extrabold text-black">Welcome Back</h1>
              <p className="text-sm text-black">Sign in to continue your wellness journey</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {error && <div className="text-sm text-red-600">{error}</div>}

            <label className="block">
              <span className="text-sm font-medium text-black">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-black">Password</span>

              <div className="relative mt-1">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  placeholder="Enter Password"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-600 hover:text-black"
                >
                  {showPassword ? (
                    // eye-off icon (closed eye)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.04.159-2.042.45-3.0M9.88 9.88A3 3 0 1114.12 14.12M3 3l18 18" />
                    </svg>
                  ) : (
                    // eye icon (open eye)
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9a3 3 0 100 6 3 3 0 000-6z" />
                    </svg>
                  )}
                </button>
              </div>
            </label>

            <div>
              <div className="text-sm font-medium text-black mb-2">Login as</div>
              <div className="flex gap-2">
                {["user", "doctor", "admin"].map((r) => (
                  <label
                    key={r}
                    className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg border ${
                      role === r ? "border-emerald-500 bg-emerald-50 shadow-sm" : "border-gray-200"
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
                    <div className="text-sm text-black capitalize">{r}</div>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <Link to="/forgot" className="text-green-700 font-semibold hover:underline">Forgot password?</Link>
              <Link to="/signup" className="text-green-700 font-semibold hover:underline">Create account</Link>
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-green-500 text-white font-semibold shadow-md hover:opacity-95 transition"
            >
              Login
            </button>
          </form>
        </div>

        <div className="bg-emerald-50 px-6 py-4 text-center text-sm text-black">
          Secure • Fast • Easy
        </div>
      </div>
    </div>
  );
}
