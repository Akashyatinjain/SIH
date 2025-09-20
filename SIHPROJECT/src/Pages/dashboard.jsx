import React, { useState } from "react";

// Component Imports
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import PatientsTab from "../Components/PatientDashboard";
import DoctorsTab from "../Components/DoctorsTab";
import HospitalsTab from "../Components/HospitalsTab";
import DepartmentsTab from "../Components/DepartmentsTab";

// Placeholder Components
const AppointmentsTab = () => <div className="p-6 sm:p-8"><h1 className="text-2xl sm:text-3xl font-bold">Appointments</h1></div>;
const ReportsTab = () => <div className="p-6 sm:p-8"><h1 className="text-2xl sm:text-3xl font-bold">Reports</h1></div>;
const HealthRecordsTab = () => <div className="p-6 sm:p-8"><h1 className="text-2xl sm:text-3xl font-bold">Health Records</h1></div>;
const SettingsTab = () => <div className="p-6 sm:p-8"><h1 className="text-2xl sm:text-3xl font-bold">Settings</h1></div>;

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("patients");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const contentMap = {
    patients: <PatientsTab searchQuery={searchQuery} />,
    doctors: <DoctorsTab searchQuery={searchQuery} />,
    hospitals: <HospitalsTab searchQuery={searchQuery} />,
    departments: <DepartmentsTab searchQuery={searchQuery} />,
    appointments: <AppointmentsTab />,
    reports: <ReportsTab />,
    records: <HealthRecordsTab />,
    settings: <SettingsTab />,
  };

  const defaultContent = <div className="p-6">Welcome to the Dashboard</div>;

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* Sidebar */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 transition-all duration-300">
          {contentMap[activeTab] || defaultContent}
        </div>
      </main>
    </div>
  );
}
