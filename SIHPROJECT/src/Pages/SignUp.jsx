import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Add this

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "patient", // default role
    certificates: [],
    specialization: "",
  });
  const navigate = useNavigate(); // ✅ Initialize

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState({ password: false, confirmPassword: false });
  const [termsChecked, setTermsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFocus = (field) => setIsFocused({ ...isFocused, [field]: true });
  const handleBlur = (field) => setIsFocused({ ...isFocused, [field]: false });
  const handleChange = (field, value) => setFormData({ ...formData, [field]: value });

   const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);

  // fake delay just for UX
  setTimeout(() => {
    setIsLoading(false);
    navigate("/dashboard"); // ✅ Redirect works
  }, 1000);
};

  const handleDemoSignup = () => {
    setFormData({
      name: "Demo User",
      email: "demo@ayurdietcare.com",
      password: "demopassword",
      confirmPassword: "demopassword",
      role: "patient",
      certificates: [],
      specialization: "",
    });
    setTermsChecked(true);
  };

  const doctorOptions = [
    "Dermatologist",
    "Oncologist",
    "Cardiologist",
    "Endocrinologist",
    "Gastroenterologist",
    "Neurologist",
    "Obstetrics and gynaecology",
    "Ophthalmologist",
    "Family doctor",
    "Psychiatrist",
    "Pediatricians",
    "Allergist",
    "Geriatrician",
    "Internal medicine",
    "Nephrologist",
    "Orthopedics",
    "Anesthesiologist",
    "Infectious disease physician",
    "Radiologist",
    "General physicians",
    "Hematologist",
    "Surgeon",
    "Urologist",
    "Colorectal surgery",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50/70 via-amber-50/50 to-white px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-[10%] left-[5%] w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-[60%] left-[70%] w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-[20%] left-[80%] w-20 h-20 bg-green-200 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        
        {/* Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-t-3xl"></div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg mb-4 transform transition-transform duration-500 hover:scale-105 hover:rotate-3">
            <span className="text-4xl text-white">🌿</span>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent">
            AyurDietCare
          </h1>
          <p className="text-gray-500 text-sm mt-2 font-medium">Create an account to start your wellness journey</p>
        </div>

        {/* Role Selector */}
        <div className="flex justify-center mb-6 space-x-4">
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: "patient" })}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${formData.role === "patient" ? "bg-emerald-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50"}`}
          >
            Patient
          </button>
          <button
            type="button"
            onClick={() => setFormData({ ...formData, role: "doctor" })}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${formData.role === "doctor" ? "bg-emerald-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-emerald-50"}`}
          >
            Doctor
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name */}
          <div className="relative">
            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${isFocused.name || formData.name ? 'top-1 text-xs text-emerald-600 font-medium' : 'top-3 text-gray-500 text-sm'}`}>Full Name</label>
            <input
              type="text"
              value={formData.name}
              onFocus={() => handleFocus("name")}
              onBlur={() => handleBlur("name")}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full pt-6 pb-2 px-4 border-0 border-b-2 border-gray-200 focus:border-emerald-500 outline-none bg-white/90 text-gray-800 rounded-none"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${isFocused.email || formData.email ? 'top-1 text-xs text-emerald-600 font-medium' : 'top-3 text-gray-500 text-sm'}`}>Email</label>
            <input
              type="email"
              value={formData.email}
              onFocus={() => handleFocus("email")}
              onBlur={() => handleBlur("email")}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full pt-6 pb-2 px-4 border-0 border-b-2 border-gray-200 focus:border-emerald-500 outline-none bg-white/90 text-gray-800 rounded-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${isFocused.password || formData.password ? 'top-1 text-xs text-emerald-600 font-medium' : 'top-3 text-gray-500 text-sm'}`}>Password</label>
            <input
              type={showPassword.password ? "text" : "password"}
              value={formData.password}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              onChange={(e) => handleChange("password", e.target.value)}
              className="w-full pt-6 pb-2 px-4 pr-10 border-0 border-b-2 border-gray-200 focus:border-emerald-500 outline-none bg-white/90 text-gray-800 rounded-none"
              required
            />
            <button type="button" onClick={() => setShowPassword({ ...showPassword, password: !showPassword.password })} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 focus:outline-none">
              {showPassword.password ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${isFocused.confirmPassword || formData.confirmPassword ? 'top-1 text-xs text-emerald-600 font-medium' : 'top-3 text-gray-500 text-sm'}`}>Confirm Password</label>
            <input
              type={showPassword.confirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onFocus={() => handleFocus("confirmPassword")}
              onBlur={() => handleBlur("confirmPassword")}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
              className="w-full pt-6 pb-2 px-4 pr-10 border-0 border-b-2 border-gray-200 focus:border-emerald-500 outline-none bg-white/90 text-gray-800 rounded-none"
              required
            />
            <button type="button" onClick={() => setShowPassword({ ...showPassword, confirmPassword: !showPassword.confirmPassword })} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-600 focus:outline-none">
              {showPassword.confirmPassword ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M3 3l18 18" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Doctor Only Fields */}
          {formData.role === "doctor" && (
            <div className="space-y-4">
              {/* Certificates Upload */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2">Upload Certificates</label>
                <input
                  type="file"
                  multiple
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      certificates: [...formData.certificates, ...Array.from(e.target.files)],
                    })
                  }
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
                />
                {formData.certificates.length > 0 && (
                  <ul className="mt-2 max-h-40 overflow-y-auto border rounded-md p-2 bg-gray-50 text-neutral-950">
                    {formData.certificates.map((file, idx) => (
                      <li key={idx} className="flex justify-between items-center text-sm mb-1">
                        <span className="truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => {
                            const newFiles = formData.certificates.filter((_, i) => i !== idx);
                            setFormData({ ...formData, certificates: newFiles });
                          }}
                          className="text-red-500 hover:text-red-700 font-medium ml-2"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Specialization */}
              <div className="relative">
                <label htmlFor="specialization" className="absolute left-4 transition-all duration-300 pointer-events-none top-1 text-xs text-emerald-600 font-medium">
                  Specialization
                </label>
                <select
                  id="specialization"
                  value={formData.specialization}
                  onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                  className="w-full pt-6 pb-2 px-4 border-0 border-b-2 border-gray-200 focus:border-emerald-500 outline-none bg-white/90 text-gray-800 rounded-none"
                  required
                >
                  <option value="" disabled>Select your specialization</option>
                  {doctorOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Terms & Submit */}
          <div className="flex flex-col gap-2">
            <label className="flex items-center cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                className="mr-2 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              I accept the <a href="/terms" className="text-emerald-600 font-medium hover:text-emerald-700">Terms & Conditions</a>
            </label>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-green-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>

            <button
              type="button"
              onClick={handleDemoSignup}
              className="w-full py-3 border border-emerald-500 text-emerald-600 font-medium rounded-xl hover:bg-emerald-50 transition-colors duration-300"
            >
              Try Demo Account
            </button>
          </div>
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
          Do you  have an account?{" "}
          <a href="/signin" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors focus:outline-none focus:underline">
            Sign In
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
      `}</style>
    </div>
  );
};

export default SignUp;

