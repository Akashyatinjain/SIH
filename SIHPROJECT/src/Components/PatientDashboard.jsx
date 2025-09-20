import React from "react";

// patientData (go up 2 levels: from Patient → Components → src)
import { patientData } from "../Components/data/mockData";

// Import all components directly from Patient folder
import DashboardHeader from "../Components/Patient/DashboardHeader";
import PrakritiSnapshot from "../Components/Patient/PrakritiSnapshot";
import LifestyleLog from "../Components/Patient/LifestyleLog";
import Alerts from "../Components/Patient/Alerts";
import HerbalRecommendations from "../Components/Patient/HerbalRecommendations";
import WeightTrend from "../Components/Patient/WeightTrend";
import DietaryTracker from "../Components/Patient/DietaryTracker";
import ActiveDietPlan from "../Components/Patient/ActiveDietPlan";
import Appointments from "../Components/Patient/Appointments";
import MedicalRecords from "../Components/Patient/MedicalRecords";
export default function PatientDashboard() {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      <DashboardHeader patient={patientData} />

      {/* Main Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        {/* === COLUMN 1 === */}
        <div className="lg:col-span-1 xl:col-span-1 flex flex-col gap-8">
          <PrakritiSnapshot 
            prakriti={patientData.prakriti} 
            vikriti={patientData.vikriti} 
          />
          <Alerts alerts={patientData.alerts} />
          <HerbalRecommendations recommendations={patientData.herbalRecommendations} />
        </div>

        {/* === COLUMN 2 === */}
        <div className="lg:col-span-2 xl:col-span-2 flex flex-col gap-8">
          <WeightTrend data={patientData.weightTrend} />
          <DietaryTracker analysis={patientData.dietaryAnalysis} />
          <ActiveDietPlan plan={patientData.activeDietPlan} />
        </div>

        {/* === COLUMN 3 === */}
        <div className="lg:col-span-3 xl:col-span-1 flex flex-col gap-8 lg:order-first xl:order-last">
           <LifestyleLog log={patientData.lifestyleLog} />
           <Appointments list={patientData.appointments} />
           <MedicalRecords records={patientData.medicalRecords} />
        </div>
      </div>
    </div>
  );
}