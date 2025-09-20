import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleFocus = (field) => setIsFocused({ ...isFocused, [field]: true });
  const handleBlur = (field) => setIsFocused({ ...isFocused, [field]: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log("Sign In:", { email, password, role });
      navigate("/dashboard");
    }, 1000);
  };

  const handleDemoLogin = () => {
    setRole("patient");
    setEmail("demo@ayurdietcare.com");
    setPassword("demopassword");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/70 via-amber-50/50 to-white px-4 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-[60%] left-[70%] w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] left-[80%] w-20 h-20 bg-green-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">

        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-t-3xl"></div>

        {/* Logo and Title */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg mb-4 transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
            <span className="text-4xl text-white">🌿</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
            AyurDietCare
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">Sign in to continue your wellness journey</p>
        </div>

        {/* Role Selector */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            type="button"
            onClick={() => setRole("patient")}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              role === "patient"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50"
            }`}
          >
            Patient
          </button>
          <button
            type="button"
            onClick={() => setRole("doctor")}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
              role === "doctor"
                ? "bg-emerald-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50"
            }`}
          >
            Doctor
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.email || email
                  ? 'top-1 text-xs text-emerald-600 font-medium'
                  : 'top-3 text-gray-500 text-sm'
              }`}
            >
              Email / Username
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pt-6 pb-2 px-4 border-0 border-b-2 border-gray-200 focus:border-emerald-500 focus:ring-0 outline-none transition-all duration-300 bg-white/90 text-gray-800 rounded-none"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                isFocused.password || password
                  ? 'top-1 text-xs text-emerald-600 font-medium'
                  : 'top-3 text-gray-500 text-sm'
              }`}
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onFocus={() => handleFocus('password')}
              onBlur={() => handleBlur('password')}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pt-6 pb-2 px-4 pr-10 border-0 border-b-2 border-gray-200 focus:border-emerald-500 focus:ring-0 outline-none transition-all duration-300 bg-white/90 text-gray-800 rounded-none"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
              )}
            </button>
          </div>

          {/* Remember / Forgot */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input type="checkbox" className="sr-only" id="remember-me" />
                <div className="w-4 h-4 border border-gray-300 rounded-sm bg-white flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-600 opacity-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <span className="ml-2 text-gray-600 select-none">Remember me</span>
            </label>
            <a
              href="/forgot-password"
              className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors focus:outline-none focus:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit & Demo Buttons */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-75 disabled:transform-none disabled:hover:shadow-md flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </>
            ) : (
              "Sign In"
            )}
          </button>

          <button
            type="button"
            onClick={handleDemoLogin}
            className="w-full py-3 border border-emerald-500 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Try Demo Account
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 text-sm">or continue with</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Social Sign-in */}
        <button className="w-full py-3 flex justify-center items-center bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors font-medium text-gray-700">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        {/* Extra Links */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="/signup" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors focus:outline-none focus:underline">
            Sign up now
          </a>
        </p>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) scale(1.05); opacity: 0.4; }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        input:checked + div {
          background-color: rgb(5 150 105);
          border-color: rgb(5 150 105);
        }
        input:checked + div svg {
          opacity: 1;
        }
      `}</style>

    </div>
  );
};

export default SignIn;
