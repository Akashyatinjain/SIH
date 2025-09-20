import React from "react";
import { FaSearch, FaBell, FaUserMd } from "react-icons/fa";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="bg-white shadow-sm py-4 px-6 flex justify-between items-center border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <FaBell className="text-gray-600" />
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center border border-green-300 shadow-sm">
          <FaUserMd className="text-green-700" />
        </div>
      </div>
    </header>
  );
}
