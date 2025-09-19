import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In:", { email, password });
    // backend auth yaha connect hoga
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-amber-50 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden border border-gray-100">
        {/* Background Decoration */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

        {/* Logo + Title */}
        <div className="text-center mb-8 relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-green-600 rounded-full shadow-md mb-3">
            <span className="text-2xl text-white">🌿</span>
          </div>
          <h1 className="text-2xl font-bold text-green-800">AyurDietCare</h1>
          <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 focus:border-green-500 outline-none transition"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-lg shadow-md hover:from-green-700 hover:to-emerald-700 transition transform hover:-translate-y-0.5"
          >
            Sign In
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-sm text-gray-500 mt-6 relative z-10">
          Don’t have an account?{" "}
          <a href="/signup" className="text-green-700 font-medium hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
