import React, { useState } from "react";
import { 
  FaUserInjured, 
  FaUserMd, 
  FaHospital, 
  FaStethoscope, 
  FaSearch, 
  FaBell, 
  FaBars,
  FaTimes,
  FaCalendarAlt,
  FaChartLine,
  FaNotesMedical,
  FaClinicMedical,
  FaPlus,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
  FaFilter
} from "react-icons/fa";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("patients");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showPatientForm, setShowPatientForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    diseases: "",
    allergies: "",
    medications: "",
    emergencyContact: ""
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Patient Data:", formData);
    alert("Patient data saved successfully!");
    setFormData({
      name: "",
      age: "",
      gender: "",
      bloodGroup: "",
      diseases: "",
      allergies: "",
      medications: "",
      emergencyContact: ""
    });
    setShowPatientForm(false);
  };

  // Mock data
  const doctors = [
    { id: 1, name: "Dr. Sharma", specialty: "Cardiology", rating: 4.8, experience: "12 years", hospital: "City Hospital", available: true },
    { id: 2, name: "Dr. Mehta", specialty: "Dermatology", rating: 4.5, experience: "8 years", hospital: "Skin Care Center", available: true },
    { id: 3, name: "Dr. Reddy", specialty: "Orthopedic", rating: 4.7, experience: "15 years", hospital: "Bone & Joint Clinic", available: false },
    { id: 4, name: "Dr. Kapoor", specialty: "Ayurveda", rating: 4.9, experience: "20 years", hospital: "Ayurvedic Wellness Center", available: true },
    { id: 5, name: "Dr. Patel", specialty: "Pediatrics", rating: 4.6, experience: "10 years", hospital: "Children's Hospital", available: true },
    { id: 6, name: "Dr. Singh", specialty: "Neurology", rating: 4.8, experience: "14 years", hospital: "Neuro Care Institute", available: true },
  ];

  const hospitals = [
    { id: 1, name: "City Hospital", address: "123 Main Street", distance: "2.5 km", specialties: ["Cardiology", "Neurology", "Emergency"] },
    { id: 2, name: "Medicare Center", address: "456 Oak Avenue", distance: "5.1 km", specialties: ["Dermatology", "Pediatrics", "Dentistry"] },
    { id: 3, name: "Ayurvedic Wellness Center", address: "789 Yoga Road", distance: "3.7 km", specialties: ["Ayurveda", "Yoga Therapy", "Nutrition"] },
    { id: 4, name: "Bone & Joint Clinic", address: "321 Fitness Lane", distance: "4.2 km", specialties: ["Orthopedics", "Physiotherapy", "Sports Medicine"] },
  ];

  const departments = [
    { id: 1, name: "Cardiology", description: "Heart and cardiovascular health", doctors: 12 },
    { id: 2, name: "Dermatology", description: "Skin, hair, and nail conditions", doctors: 8 },
    { id: 3, name: "Orthopedics", description: "Bones, joints, and muscles", doctors: 15 },
    { id: 4, name: "Ayurveda", description: "Traditional holistic healing", doctors: 6 },
    { id: 5, name: "Pediatrics", description: "Healthcare for children", doctors: 10 },
    { id: 6, name: "Neurology", description: "Brain and nervous system", doctors: 7 },
  ];

  const filteredDoctors = formData.diseases
    ? doctors.filter(doc => 
        doc.specialty.toLowerCase().includes(formData.diseases.toLowerCase())
      )
    : doctors;

  const renderContent = () => {
    switch (activeTab) {
      case "patients":
        return (
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Patient Management</h2>
              <button 
                onClick={() => setShowPatientForm(!showPatientForm)}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaPlus className="mr-2" /> New Patient
              </button>
            </div>
            
            {showPatientForm && (
              <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-medium mb-4 text-gray-700">Register New Patient</h3>
                <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["name","age","gender","bloodGroup","diseases","allergies","medications","emergencyContact"].map(field => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{field === "diseases" ? "Medical History / Issues" : field.charAt(0).toUpperCase() + field.slice(1)}</label>
                      {field === "gender" ? (
                        <select name="gender" value={formData.gender} onChange={handleFormChange} className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      ) : (
                        <input
                          name={field}
                          type={field === "age" ? "number" : "text"}
                          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                          value={formData[field]}
                          onChange={handleFormChange}
                          className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required={field !== "bloodGroup" && field !== "diseases" && field !== "allergies" && field !== "medications"}
                        />
                      )}
                    </div>
                  ))}
                  <div className="md:col-span-2 flex justify-end space-x-3 mt-4">
                    <button type="button" onClick={() => setShowPatientForm(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                      Cancel
                    </button>
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                      Save Patient
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-medium mb-4 text-gray-700">Recent Patients</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["Name","Age","Gender","Blood Group","Last Visit","Actions"].map(head => (
                        <th key={head} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{head}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {["Rahul Kumar","Priya Singh","Amit Patel"].map((p,i) => (
                      <tr key={i}>
                        <td className="px-6 py-4 whitespace-nowrap">{p}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{[42,35,28][i]}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{["Male","Female","Male"][i]}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{["B+","O+","A+"][i]}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{["12 Oct 2023","10 Oct 2023","9 Oct 2023"][i]}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 cursor-pointer">View</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case "doctors":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Doctors Directory</h2>
            <div className="mb-6 flex items-center justify-between">
              <div className="relative w-64">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search doctors..."
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100">
                <FaFilter className="mr-2" /> Filter
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map(doc => (
                <div key={doc.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <FaUserMd className="text-green-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{doc.name}</h3>
                        <p className="text-green-600">{doc.specialty}</p>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < Math.floor(doc.rating) ? "text-yellow-400" : "text-gray-300"} />
                          ))}
                          <span className="ml-2 text-gray-500">{doc.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-600">
                      <p className="flex items-center"><FaHospital className="mr-2" /> {doc.hospital}</p>
                      <p className="flex items-center mt-2"><FaChartLine className="mr-2" /> {doc.experience} experience</p>
                    </div>
                    <div className={`mt-4 text-sm font-medium ${doc.available ? 'text-green-600' : 'text-red-600'}`}>
                      {doc.available ? 'Available Today' : 'Not Available'}
                    </div>
                    <button className={`mt-4 w-full py-2 rounded-lg ${doc.available ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-200 text-gray-500 cursor-not-allowed'}`} disabled={!doc.available}>
                      {doc.available ? 'Book Appointment' : 'Not Available'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "hospitals":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Hospital Network</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hospitals.map(hospital => (
                <div key={hospital.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{hospital.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <FaMapMarkerAlt className="mr-2 text-green-600" />
                      <span>{hospital.address}</span>
                      <span className="ml-4 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{hospital.distance} away</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {hospital.specialties.map((spec, idx) => (
                          <span key={idx} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">{spec}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="flex items-center text-blue-600 hover:text-blue-800">
                        <FaPhone className="mr-1" /> Call
                      </button>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case "departments":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Medical Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map(dept => (
                <div key={dept.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <FaStethoscope className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{dept.name}</h3>
                        <p className="text-gray-500 text-sm">{dept.doctors} doctors</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{dept.description}</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                      View Department
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Dashboard Overview</h2>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <p className="text-gray-600">Welcome to the AyurDietCare Dashboard! Select a category from the sidebar to get started.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 bg-green-700 text-white p-2 rounded-lg shadow-md"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`w-64 bg-gradient-to-b from-green-900 to-green-800 text-white flex flex-col shadow-xl fixed md:relative h-full z-40 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-6 text-2xl font-bold border-b border-green-700 flex items-center">
          <FaClinicMedical className="mr-2 text-green-300" />
          AyurDietCare
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[{ key: "patients", label: "Patients", icon: <FaUserInjured className="mr-3" /> },
            { key: "doctors", label: "Doctors", icon: <FaUserMd className="mr-3" /> },
            { key: "hospitals", label: "Hospitals", icon: <FaHospital className="mr-3" /> },
            { key: "departments", label: "Departments", icon: <FaStethoscope className="mr-3" /> }].map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => { setActiveTab(key); setSidebarOpen(false); }}
              className={`flex items-center w-full px-4 py-3 rounded-lg transition-all ${activeTab === key ? "bg-green-700 shadow-md" : "hover:bg-green-700 hover:bg-opacity-60"}`}
            >
              {icon} {label}
            </button>
          ))}
          <div className="pt-8 mt-8 border-t border-green-700">
            {[{label:"Appointments",icon:<FaCalendarAlt className="mr-3"/>},
              {label:"Reports",icon:<FaChartLine className="mr-3"/>},
              {label:"Health Records",icon:<FaNotesMedical className="mr-3"/>}].map((item,i)=>(
              <button key={i} className="flex items-center w-full px-4 py-3 rounded-lg hover:bg-green-700 hover:bg-opacity-60 transition-all">{item.icon} {item.label}</button>
            ))}
          </div>
        </nav>
        <div className="p-4 border-t border-green-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center shadow-md">
              <FaUserMd />
            </div>
            <div>
              <p className="font-medium">Dr. Smith</p>
              <p className="text-xs text-green-300">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-0 transition-all duration-300">
        {/* Header */}
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

        {/* Content */}
        <div className="p-6">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
