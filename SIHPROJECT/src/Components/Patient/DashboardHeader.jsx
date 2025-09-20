// src/components/DashboardHeader.jsx
import React from 'react';
import { FaPrint, FaCalendarAlt, FaWeight, FaRulerVertical, FaHeartbeat } from 'react-icons/fa';

const StatCard = ({ icon, label, value }) => {
    const Icon = icon;
    return (
        <div className="bg-white rounded-lg p-4 flex items-center shadow-sm">
            <div className="p-3 bg-green-100 text-green-600 rounded-full mr-4">
                <Icon size={20} />
            </div>
            <div>
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-lg font-bold text-gray-800">{value}</p>
            </div>
        </div>
    );
};

const DashboardHeader = ({ patient }) => {
    return (
        <div className="mb-8">
            {/* Top Row: Title and Actions */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{patient.name}</h1>
                    <p className="text-gray-500">{`${patient.age} years old, ${patient.gender} • Predominant Dosha: ${patient.dosha}`}</p>
                </div>
                <div className="flex space-x-2 mt-4 md:mt-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition">
                        <FaPrint className="mr-2" /> Print Report
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center transition">
                        <FaCalendarAlt className="mr-2" /> Schedule
                    </button>
                </div>
            </div>
            
            {/* Bottom Row: Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <StatCard icon={FaWeight} label="Weight" value={patient.keyStats.weight} />
                <StatCard icon={FaRulerVertical} label="Height" value={patient.keyStats.height} />
                <StatCard icon={FaHeartbeat} label="BMI" value={patient.keyStats.bmi} />
            </div>
        </div>
    );
};

export default DashboardHeader;