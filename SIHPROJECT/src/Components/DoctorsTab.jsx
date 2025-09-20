import React, { useState, useMemo } from "react";
import { 
  FaUserMd, 
  FaHospital, 
  FaChartLine, 
  FaStar, 
  FaSearch, 
  FaFilter, 
  FaTimes,
  FaCalendarAlt,
  FaClock
} from "react-icons/fa";

// Mock data for doctors with more details
const doctors = [
  { 
    id: 1, 
    name: "Dr. Priya Sharma", 
    specialty: "Cardiology", 
    rating: 4.8, 
    reviews: 142,
    experience: "12 years", 
    hospital: "City Hospital", 
    available: true,
    nextAvailable: "Today, 3:00 PM",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  { 
    id: 2, 
    name: "Dr. Raj Mehta", 
    specialty: "Dermatology", 
    rating: 4.5, 
    reviews: 89,
    experience: "8 years", 
    hospital: "Skin Care Center", 
    available: true,
    nextAvailable: "Today, 5:30 PM",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  { 
    id: 3, 
    name: "Dr. Anil Reddy", 
    specialty: "Orthopedic", 
    rating: 4.7, 
    reviews: 216,
    experience: "15 years", 
    hospital: "Bone & Joint Clinic", 
    available: false,
    nextAvailable: "Tomorrow, 10:00 AM",
    image: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  { 
    id: 4, 
    name: "Dr. Sunita Kapoor", 
    specialty: "Ayurveda", 
    rating: 4.9, 
    reviews: 304,
    experience: "20 years", 
    hospital: "Ayurvedic Wellness Center", 
    available: true,
    nextAvailable: "Today, 4:15 PM",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  { 
    id: 5, 
    name: "Dr. Amit Patel", 
    specialty: "Pediatrics", 
    rating: 4.6, 
    reviews: 178,
    experience: "10 years", 
    hospital: "Children's Hospital", 
    available: true,
    nextAvailable: "Today, 6:00 PM",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  { 
    id: 6, 
    name: "Dr. Neha Singh", 
    specialty: "Neurology", 
    rating: 4.8, 
    reviews: 231,
    experience: "14 years", 
    hospital: "Neuro Care Institute", 
    available: true,
    nextAvailable: "Today, 2:45 PM",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
];

// Specialty options for filtering
const specialties = [
  "All Specialties",
  "Cardiology",
  "Dermatology",
  "Orthopedic",
  "Ayurveda",
  "Pediatrics",
  "Neurology"
];

export default function DoctorsTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const filteredDoctors = useMemo(() => {
    let result = [...doctors];
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(doc => 
        doc.name.toLowerCase().includes(query) || 
        doc.specialty.toLowerCase().includes(query) ||
        doc.hospital.toLowerCase().includes(query)
      );
    }
    
    // Apply specialty filter
    if (selectedSpecialty !== "All Specialties") {
      result = result.filter(doc => doc.specialty === selectedSpecialty);
    }
    
    // Apply availability filter
    if (availabilityFilter === "available") {
      result = result.filter(doc => doc.available);
    } else if (availabilityFilter === "not-available") {
      result = result.filter(doc => !doc.available);
    }
    
    // Apply sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "experience") {
      result.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    return result;
  }, [searchQuery, selectedSpecialty, availabilityFilter, sortBy]);

  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Find Your Doctor</h2>
      
      {/* Search and Filter Bar */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name, specialty, or hospital..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <button 
            className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={toggleFilters}
          >
            <FaFilter className="mr-2" /> 
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
          
          <div className="ml-auto">
            <select 
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Sort by Rating</option>
              <option value="experience">Sort by Experience</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Filters</h3>
            <button 
              onClick={() => {
                setSelectedSpecialty("All Specialties");
                setAvailabilityFilter("all");
              }}
              className="text-sm text-green-600 hover:text-green-800"
            >
              Clear All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialty</label>
              <select 
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
              <select 
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="all">All Availability</option>
                <option value="available">Available Today</option>
                <option value="not-available">Not Available</option>
              </select>
            </div>
          </div>
        </div>
      )}
      
      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found
        </p>
      </div>
      
      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map(doc => (
            <div key={doc.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <img 
                      src={doc.image} 
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate">{doc.name}</h3>
                    <p className="text-green-600 font-medium">{doc.specialty}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={i < Math.floor(doc.rating) ? "text-yellow-400" : "text-gray-300"} 
                          size={14}
                        />
                      ))}
                      <span className="ml-2 text-gray-500 text-sm">
                        {doc.rating} ({doc.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <p className="flex items-center">
                    <FaHospital className="mr-2 text-green-500" /> 
                    <span className="truncate">{doc.hospital}</span>
                  </p>
                  <p className="flex items-center">
                    <FaChartLine className="mr-2 text-green-500" /> 
                    {doc.experience} experience
                  </p>
                  {doc.available && (
                    <p className="flex items-center">
                      <FaClock className="mr-2 text-green-500" /> 
                      Next: {doc.nextAvailable}
                    </p>
                  )}
                </div>
                
                <div className={`mt-4 text-sm font-medium ${doc.available ? 'text-green-600' : 'text-red-600'}`}>
                  {doc.available ? 'Available Today' : 'Not Available'}
                </div>
                
                <button 
                  className={`mt-4 w-full py-2 rounded-lg font-medium transition-colors ${doc.available 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} 
                  disabled={!doc.available}
                >
                  {doc.available ? 'Book Appointment' : 'Check Availability'}
                </button>
                
                {doc.available && (
                  <button className="mt-2 w-full py-2 rounded-lg border border-green-600 text-green-600 font-medium hover:bg-green-50 transition-colors">
                    <FaCalendarAlt className="inline mr-2" /> View Schedule
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <FaUserMd className="mx-auto text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
