// src/Components/Sidebar.jsx

import React, { useEffect } from "react";
import { 
  Activity, Users, User, Building, Stethoscope, Calendar, 
  TrendingUp, FileText, Menu, X, LogOut, Settings, ChevronDown 
} from "lucide-react";

export default function Sidebar({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {

  const UserMd = User;

  const mainTabs = [
    { key: "patients", label: "Patients", icon: <Users className="text-lg" /> },
    { key: "doctors", label: "Doctors", icon: <UserMd className="text-lg" /> },
    { key: "hospitals", label: "Hospitals", icon: <Building className="text-lg" /> },
    { key: "departments", label: "Departments", icon: <Stethoscope className="text-lg" /> },
  ];

  const otherTabs = [
    { key: "appointments", label: "Appointments", icon: <Calendar className="text-lg" /> },
    { key: "reports", label: "Reports", icon: <TrendingUp className="text-lg" /> },
    { key: "records", label: "Health Records", icon: <FileText className="text-lg" /> },
  ];

  const settingsTabs = [
    { key: "settings", label: "Settings", icon: <Settings className="text-lg" /> },
    { key: "logout", label: "Logout", icon: <LogOut className="text-lg" /> },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (sidebarOpen && !target.closest('.sidebar') && !target.closest('.sidebar-toggle')) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sidebarOpen, setSidebarOpen]);

  useEffect(() => {
    if (sidebarOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [sidebarOpen, setSidebarOpen]);

  const handleTabClick = (key) => {
    if (key === 'logout') {
      console.log('Logout clicked');
      // Add logout logic here
    } else {
      setActiveTab(key);
    }
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 bg-gradient-to-r from-green-800 to-green-900 shadow-lg z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-2">
            <Activity className="text-green-300" size={24} />
            <h1 className="text-lg font-semibold text-white tracking-wide">AyurDietCare</h1>
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="sidebar-toggle text-white hover:text-green-300 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 rounded p-1"
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`sidebar absolute left-0 right-0 bg-white shadow-xl border-t border-gray-200 transform transition-all duration-300 ease-in-out z-40 ${
            sidebarOpen 
              ? "translate-y-0 opacity-100 pointer-events-auto" 
              : "-translate-y-2 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col p-2 space-y-1 max-h-96 overflow-y-auto">
            {/* Main Section */}
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-2">
              Main
            </div>
            {mainTabs.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`flex items-center px-3 py-3 rounded-lg text-left font-medium transition-colors ${
                  activeTab === key
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                <span className="mr-3">{icon}</span>
                {label}
              </button>
            ))}

            {/* Other Section */}
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-2 mt-4">
              Other
            </div>
            {otherTabs.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`flex items-center px-3 py-3 rounded-lg text-left font-medium transition-colors ${
                  activeTab === key
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                <span className="mr-3">{icon}</span>
                {label}
              </button>
            ))}

            {/* Settings Section */}
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mb-2 mt-4">
              Settings
            </div>
            {settingsTabs.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => handleTabClick(key)}
                className={`flex items-center px-3 py-3 rounded-lg text-left font-medium transition-colors ${
                  key === 'logout'
                    ? "text-red-600 hover:bg-red-50 hover:text-red-700"
                    : activeTab === key
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                }`}
              >
                <span className="mr-3">{icon}</span>
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Spacer for mobile fixed header */}
      <div className="md:hidden h-16" />
      
      {/* Desktop Sidebar */}
      <aside className="sidebar hidden md:flex w-64 bg-gradient-to-b from-green-800 to-green-900 text-white flex-col shadow-xl">
        {/* Header */}
        <div className="p-5 text-xl font-bold border-b border-green-700 flex items-center">
          <Activity className="mr-3 text-green-300" size={24} />
          <span className="truncate">AyurDietCare</span>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-green-800">
          <p className="px-4 pt-2 pb-2 text-xs font-semibold text-green-400 uppercase tracking-wider">Main</p>
          {mainTabs.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 group ${
                activeTab === key 
                  ? "bg-green-700 shadow-md transform scale-105" 
                  : "hover:bg-green-700 hover:bg-opacity-70 hover:translate-x-1"
              }`}
            >
              <span className={`transition-colors ${activeTab === key ? 'text-green-100' : 'text-green-300 group-hover:text-green-100'}`}>
                {icon}
              </span>
              <span className="ml-3 font-medium">{label}</span>
            </button>
          ))}
          
          <p className="px-4 pt-6 pb-2 text-xs font-semibold text-green-400 uppercase tracking-wider">Other</p>
          {otherTabs.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 group ${
                activeTab === key 
                  ? "bg-green-700 shadow-md transform scale-105" 
                  : "hover:bg-green-700 hover:bg-opacity-70 hover:translate-x-1"
              }`}
            >
              <span className={`transition-colors ${activeTab === key ? 'text-green-100' : 'text-green-300 group-hover:text-green-100'}`}>
                {icon}
              </span>
              <span className="ml-3 font-medium">{label}</span>
            </button>
          ))}
          
          <p className="px-4 pt-6 pb-2 text-xs font-semibold text-green-400 uppercase tracking-wider">Settings</p>
          {settingsTabs.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all duration-200 group ${
                activeTab === key 
                  ? "bg-green-700 shadow-md transform scale-105" 
                  : "hover:bg-green-700 hover:bg-opacity-70 hover:translate-x-1"
              }`}
            >
              <span className={`transition-colors ${activeTab === key ? 'text-green-100' : 'text-green-300 group-hover:text-green-100'}`}>
                {icon}
              </span>
              <span className="ml-3 font-medium">{label}</span>
            </button>
          ))}
        </nav>
        
        {/* User Profile */}
        <div className="p-4 border-t border-green-700 bg-green-900 bg-opacity-50">
          <div className="flex items-center space-x-3 group cursor-pointer hover:bg-green-800 hover:bg-opacity-50 rounded-lg p-2 transition-all duration-200">
            <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">
              <UserMd className="text-green-200" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate group-hover:text-green-100">Dr. Smith</p>
              <p className="text-xs text-green-300 truncate">Administrator</p>
            </div>
            <button className="text-green-400 hover:text-white group-hover:rotate-180 transition-all duration-200">
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
