import React, { useState } from "react";
import { 
  FaStethoscope, 
  FaUserMd, 
  FaSearch, 
  FaFilter,
  FaArrowRight,
  FaClock,
  FaStar,
  FaPhone,
  FaCalendarAlt
} from "react-icons/fa";

// Department icons mapping
const departmentIcons = {
  "Cardiology": "❤️",
  "Dermatology": "🔬",
  "Orthopedics": "🦴",
  "Ayurveda": "🌿",
  "Pediatrics": "🧸",
  "Neurology": "🧠",
  "Dentistry": "🦷",
  "Ophthalmology": "👁️",
  "Psychiatry": "🧠",
  "Emergency": "🚑"
};

// Department colors mapping
const departmentColors = {
  "Cardiology": "red",
  "Dermatology": "purple",
  "Orthopedics": "blue",
  "Ayurveda": "green",
  "Pediatrics": "pink",
  "Neurology": "indigo",
  "Dentistry": "teal",
  "Ophthalmology": "cyan",
  "Psychiatry": "gray",
  "Emergency": "orange"
};

// Mock data for departments with more details
const departments = [
  { 
    id: 1, 
    name: "Cardiology", 
    description: "Specializing in heart and cardiovascular health, our cardiology department offers comprehensive care for all cardiac conditions.", 
    doctors: 12, 
    rating: 4.8,
    waitTime: "15 mins",
    services: ["Echocardiogram", "Angioplasty", "Cardiac CT", "Stress Test", "Pacemaker Implantation"]
  },
  { 
    id: 2, 
    name: "Dermatology", 
    description: "Expert care for skin, hair, and nail conditions with advanced treatments and cosmetic procedures.", 
    doctors: 8, 
    rating: 4.5,
    waitTime: "10 mins",
    services: ["Acne Treatment", "Skin Cancer Screening", "Laser Therapy", "Psoriasis Treatment", "Cosmetic Dermatology"]
  },
  { 
    id: 3, 
    name: "Orthopedics", 
    description: "Comprehensive care for bones, joints, muscles, and sports injuries with surgical and non-surgical treatments.", 
    doctors: 15, 
    rating: 4.7,
    waitTime: "20 mins",
    services: ["Joint Replacement", "Arthroscopy", "Fracture Care", "Sports Medicine", "Spinal Surgery"]
  },
  { 
    id: 4, 
    name: "Ayurveda", 
    description: "Traditional holistic healing approaches combining ancient wisdom with modern healthcare practices.", 
    doctors: 6, 
    rating: 4.9,
    waitTime: "5 mins",
    services: ["Panchakarma", "Herbal Medicine", "Yoga Therapy", "Diet Consultation", "Detoxification"]
  },
  { 
    id: 5, 
    name: "Pediatrics", 
    description: "Specialized healthcare for children from newborns to adolescents with child-friendly approaches.", 
    doctors: 10, 
    rating: 4.6,
    waitTime: "25 mins",
    services: ["Vaccinations", "Growth Monitoring", "Child Nutrition", "Developmental Assessment", "Adolescent Care"]
  },
  { 
    id: 6, 
    name: "Neurology", 
    description: "Expert diagnosis and treatment for brain, spinal cord, and nervous system disorders.", 
    doctors: 7, 
    rating: 4.8,
    waitTime: "30 mins",
    services: ["EEG", "EMG", "Stroke Care", "Epilepsy Treatment", "Headache Management"]
  },
  { 
    id: 7, 
    name: "Dentistry", 
    description: "Complete dental care services from routine checkups to advanced surgical procedures.", 
    doctors: 9, 
    rating: 4.4,
    waitTime: "15 mins",
    services: ["Dental Implants", "Teeth Whitening", "Root Canal", "Orthodontics", "Oral Surgery"]
  },
  { 
    id: 8, 
    name: "Ophthalmology", 
    description: "Comprehensive eye care services including vision correction and treatment of eye diseases.", 
    doctors: 5, 
    rating: 4.7,
    waitTime: "10 mins",
    services: ["Cataract Surgery", "LASIK", "Glaucoma Treatment", "Retina Care", "Pediatric Ophthalmology"]
  },
  { 
    id: 9, 
    name: "Emergency", 
    description: "24/7 emergency care for urgent medical conditions with state-of-the-art trauma center.", 
    doctors: 18, 
    rating: 4.9,
    waitTime: "Immediate",
    services: ["Trauma Care", "Critical Care", "Emergency Surgery", "Toxicology", "Disaster Management"]
  }
];

// All available department names for filtering
const allDepartments = departments.map(dept => dept.name);

export default function DepartmentsTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [showFilters, setShowFilters] = useState(false);

  const filteredDepartments = departments.filter(dept => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.services.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Department filter
    const matchesDepartment = selectedDepartment === "All Departments" || 
      dept.name === selectedDepartment;
    
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Medical Departments</h2>
      
      {/* Search and Filter Bar */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search departments by name or services..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter className="mr-2" /> 
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
      </div>
      
      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Filter by Department</h3>
            <button 
              onClick={() => setSelectedDepartment("All Departments")}
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Clear Filter
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDepartment("All Departments")}
              className={`px-3 py-1 rounded-full text-sm ${selectedDepartment === "All Departments" 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              All Departments
            </button>
            {allDepartments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 py-1 rounded-full text-sm ${selectedDepartment === dept 
                  ? `bg-${departmentColors[dept]}-600 text-white` 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          {filteredDepartments.length} department{filteredDepartments.length !== 1 ? 's' : ''} found
        </p>
      </div>
      
      {/* Departments Grid */}
      {filteredDepartments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDepartments.map(dept => (
            <div key={dept.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-${departmentColors[dept.name]}-100 rounded-lg flex items-center justify-center mr-4`}>
                    <span className="text-xl">{departmentIcons[dept.name]}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">{dept.name}</h3>
                    <div className="flex items-center">
                      <FaUserMd className="text-gray-500 mr-1" size={12} />
                      <span className="text-gray-500 text-sm">{dept.doctors} doctors</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{dept.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={i < Math.floor(dept.rating) ? "text-yellow-400" : "text-gray-300"} 
                        size={12}
                      />
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">{dept.rating}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <FaClock className="mr-1" size={12} />
                    <span>~{dept.waitTime}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Key Services:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dept.services.slice(0, 3).map((service, idx) => (
                      <span key={idx} className={`bg-${departmentColors[dept.name]}-100 text-${departmentColors[dept.name]}-800 text-xs px-2 py-1 rounded-full`}>
                        {service}
                      </span>
                    ))}
                    {dept.services.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        +{dept.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    View Department <FaArrowRight className="ml-2" size={12} />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <FaPhone size={14} />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <FaCalendarAlt size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <FaStethoscope className="mx-auto text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No departments found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}