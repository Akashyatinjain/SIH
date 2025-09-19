// src/App.jsx
import { useState, useEffect } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      title: "User Authentication & Roles",
      description: "Secure access with role-based permissions for practitioners and patients"
    },
    {
      title: "Patient Management Profiles",
      description: "Comprehensive patient tracking with health history and progress monitoring"
    },
    {
      title: "Food Database (8000+ items)",
      description: "Extensive database with detailed nutritional and Ayurvedic properties"
    },
    {
      title: "Automated Diet Chart Generator",
      description: "AI-powered personalized diet plans based on dosha analysis"
    },
    {
      title: "Recipe-based Diets + Auto Nutrient Analysis",
      description: "Complete meal plans with automatic nutritional calculations"
    },
    {
      title: "Printable Reports (PDF-ready)",
      description: "Professional reports for patients with actionable recommendations"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-amber-50 to-slate-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 shadow-sm bg-white/90 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center">
          <div className="bg-green-700 p-2 rounded-lg mr-3 shadow-md">
            <span className="text-white text-2xl">🌿</span>
          </div>
          <h1 className="text-2xl font-bold text-green-800">AyurDietCare</h1>
        </div>
        <div className="space-x-3">
          <button
            className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => {
              setIsSignup(true);
              setShowModal(true);
            }}
          >
            Sign Up
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            onClick={() => {
              setIsSignup(false);
              setShowModal(true);
            }}
          >
            Sign In
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-400 text-gray-900 font-semibold rounded-lg hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="max-w-xl space-y-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
              Ayurvedic-first
            </span>{" "}
            <span className="text-gray-800">Diet Management</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Combine modern nutrition science with ancient Ayurvedic principles — 
            Rasa, Hot/Cold properties, digestion ease, and personalized dosha balancing 
            for optimal health and wellness.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Create Account
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg hover:from-gray-900 hover:to-black transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Illustration */}
        <div className="mt-12 md:mt-0 relative z-10">
          <div className="w-96 h-64 bg-gradient-to-br from-green-100 to-amber-100 rounded-2xl flex items-center justify-center shadow-xl border-2 border-white relative overflow-hidden">
            <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-300 rounded-full blur-xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-amber-300 rounded-full blur-xl opacity-30"></div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-4 shadow-md">
                <span className="text-3xl text-white">📊</span>
              </div>
              <p className="text-gray-600 font-medium">Interactive Diet Chart Preview</p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="px-8 py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-amber-400 to-emerald-500"></div>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Core Features
          </h3>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Our platform combines ancient Ayurvedic wisdom with modern technology 
            to deliver personalized dietary recommendations.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl transition-all duration-500 transform ${
                  activeFeature === idx 
                    ? "bg-gradient-to-br from-green-50 to-amber-50 shadow-lg scale-105 border border-green-200" 
                    : "bg-white shadow-md hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveFeature(idx)}
              >
                <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                  activeFeature === idx ? "bg-green-600" : "bg-green-100"
                } transition-colors duration-300`}>
                  <span className={`text-xl ${activeFeature === idx ? "text-white" : "text-green-600"}`}>
                    {idx + 1}
                  </span>
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  activeFeature === idx ? "text-green-700" : "text-gray-800"
                }`}>
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Stats Section */}
      <section className="px-8 py-16 bg-gradient-to-r from-green-50 to-amber-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Trusted by Ayurvedic Practitioners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
              <div className="text-gray-600">Practitioners</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">10K+</div>
              <div className="text-gray-600">Patients Served</div>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <div className="text-4xl font-bold text-green-700 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Practice?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Ayurvedic practitioners who are modernizing their practice 
            with our powerful diet management platform.
          </p>
          <button 
            className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-lg font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            onClick={() => {
              setIsSignup(true);
              setShowModal(true);
            }}
          >
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gradient-to-r from-gray-900 to-black text-white py-8">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-green-600 p-2 rounded-lg mr-3">
                <span className="text-white text-xl">🌿</span>
              </div>
              <h2 className="text-xl font-bold">AyurDietCare</h2>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-center text-gray-400 mt-6">
            © 2025 AyurDietCare · All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Sign In / Sign Up Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative animate-scaleIn">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors p-1 rounded-full hover:bg-gray-100"
              onClick={() => setShowModal(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center mb-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4">
                <span className="text-2xl text-green-600">🌿</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {isSignup ? "Create Account" : "Welcome Back"}
              </h2>
              <p className="text-gray-600 mt-2">
                {isSignup ? "Join our Ayurvedic community today" : "Sign in to your account"}
              </p>
            </div>
            
            <form className="space-y-4 mt-6">
              {isSignup && (
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  />
                </div>
              )}
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <button className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg">
                {isSignup ? "Create Account" : "Sign In"}
              </button>
            </form>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                {isSignup ? "Already have an account? " : "Don't have an account? "}
                <button 
                  className="text-green-600 font-semibold hover:text-green-700 transition-colors"
                  onClick={() => setIsSignup(!isSignup)}
                >
                  {isSignup ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
} 
