import React, { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaStar, 
  FaClock, 
  FaSearch,
  FaFilter,
  FaDirections
} from "react-icons/fa";

// Mock hospital data
const hospitals = [
  { 
    id: 1, 
    name: "City Hospital", 
    address: "123 Main Street, Downtown", 
    distance: "2.5", 
    rating: 4.7,
    reviews: 284,
    specialties: ["Cardiology", "Neurology", "Emergency", "Surgery", "Oncology"],
    facilities: ["Emergency", "Pharmacy", "ICU", "Ambulance", "Cafeteria"],
    phone: "+1 (555) 123-4567",
    hours: "24/7",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 2, 
    name: "Medicare Center", 
    address: "456 Oak Avenue, Westside", 
    distance: "5.1", 
    rating: 4.3,
    reviews: 156,
    specialties: ["Dermatology", "Pediatrics", "Dentistry", "Ophthalmology", "ENT"],
    facilities: ["Pharmacy", "Lab", "Pediatric Ward", "Cafeteria", "Parking"],
    phone: "+1 (555) 987-6543",
    hours: "6:00 AM - 10:00 PM",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 3, 
    name: "Ayurvedic Wellness Center", 
    address: "789 Yoga Road, East District", 
    distance: "3.7", 
    rating: 4.9,
    reviews: 327,
    specialties: ["Ayurveda", "Yoga Therapy", "Nutrition", "Meditation", "Panchakarma"],
    facilities: ["Herbal Garden", "Yoga Studio", "Meditation Hall", "Diet Counseling", "Parking"],
    phone: "+1 (555) 456-7890",
    hours: "7:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 4, 
    name: "Bone & Joint Clinic", 
    address: "321 Fitness Lane, Northside", 
    distance: "4.2", 
    rating: 4.5,
    reviews: 198,
    specialties: ["Orthopedics", "Physiotherapy", "Sports Medicine", "Rehabilitation", "Rheumatology"],
    facilities: ["X-Ray", "Physiotherapy", "Gym", "Pharmacy", "Parking"],
    phone: "+1 (555) 234-5678",
    hours: "8:00 AM - 9:00 PM",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 5, 
    name: "Children's Medical Institute", 
    address: "567 Playground Blvd, South District", 
    distance: "6.3", 
    rating: 4.8,
    reviews: 412,
    specialties: ["Pediatrics", "Neonatology", "Vaccination", "Child Psychology", "Nutrition"],
    facilities: ["Play Area", "Pediatric ICU", "Vaccination Center", "Pharmacy", "Cafeteria"],
    phone: "+1 (555) 765-4321",
    hours: "24/7",
    image: "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  { 
    id: 6, 
    name: "Mental Wellness Center", 
    address: "654 Serenity Street, West Hills", 
    distance: "7.8", 
    rating: 4.6,
    reviews: 231,
    specialties: ["Psychiatry", "Psychology", "Counseling", "Addiction Therapy", "Stress Management"],
    facilities: ["Therapy Rooms", "Group Therapy Hall", "Library", "Meditation Garden", "Cafeteria"],
    phone: "+1 (555) 876-5432",
    hours: "8:00 AM - 8:00 PM",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

// Unique specialties for filters
const allSpecialties = Array.from(new Set(hospitals.flatMap(h => h.specialties))).sort();

export default function HospitalsTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("distance");

  const toggleSpecialty = (specialty) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty) ? prev.filter(s => s !== specialty) : [...prev, specialty]
    );
  };

  const filteredHospitals = hospitals.filter(hospital => {
    const matchesSearch =
      searchQuery === "" ||
      hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hospital.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesSpecialty =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.some(s => hospital.specialties.includes(s));

    return matchesSearch && matchesSpecialty;
  });

  const sortedHospitals = [...filteredHospitals].sort((a, b) => {
    if (sortBy === "distance") return parseFloat(a.distance) - parseFloat(b.distance);
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Hospital Network</h2>

      {/* Search & Filter */}
      <div className="mb-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search hospitals by name, address, or specialty..."
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>

          <div className="ml-auto">
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="distance">Sort by Distance</option>
              <option value="rating">Sort by Rating</option>
              <option value="name">Sort by Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-700">Filter by Specialty</h3>
            <button
              onClick={() => setSelectedSpecialties([])}
              className="text-sm text-green-600 hover:text-green-800"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {allSpecialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => toggleSpecialty(specialty)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedSpecialties.includes(specialty)
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results Count */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          {sortedHospitals.length} hospital{sortedHospitals.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Hospitals Grid */}
      {sortedHospitals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedHospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg text-gray-800">{hospital.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                      {hospital.distance} km
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <FaMapMarkerAlt className="mr-2 text-green-600" />
                    <span className="text-sm">{hospital.address}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < Math.floor(hospital.rating) ? "text-yellow-400" : "text-gray-300"}
                        size={14}
                      />
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">
                      {hospital.rating} ({hospital.reviews})
                    </span>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.slice(0, 3).map((spec, idx) => (
                        <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                      {hospital.specialties.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{hospital.specialties.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Facilities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.facilities.slice(0, 3).map((facility, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {facility}
                        </span>
                      ))}
                      {hospital.facilities.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                          +{hospital.facilities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FaClock className="mr-2 text-green-600" />
                    <span>{hospital.hours}</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  <a
                    href={`tel:${hospital.phone}`}
                    className="flex items-center justify-center text-blue-600 hover:text-blue-800 px-3 py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <FaPhone className="mr-2" /> Call
                  </a>
                  <button className="flex items-center justify-center text-gray-700 hover:text-gray-900 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <FaDirections className="mr-2" /> Directions
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
          <FaMapMarkerAlt className="mx-auto text-gray-400 text-4xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No hospitals found</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
