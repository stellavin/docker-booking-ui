import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DoctorCard from './components/DoctorCard';
import Appointments from './components/Appointments';
import { FaHome, FaCalendarAlt, FaSearch, FaStar } from 'react-icons/fa';
import { doctors, specialties } from './mockData';

function App() {
  const [currentView, setCurrentView] = useState('doctors');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [minRating, setMinRating] = useState(0);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'All' || doctor.specialty === selectedSpecialty;
    const matchesRating = doctor.rating >= minRating;
    return matchesSearch && matchesSpecialty && matchesRating;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setCurrentView('doctors')}
            className={`flex items-center space-x-2 px-4 py-2 ${
              currentView === 'doctors'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaHome />
            <span>Find Doctors</span>
          </button>
          <button
            onClick={() => setCurrentView('appointments')}
            className={`flex items-center space-x-2 px-4 py-2 ${
              currentView === 'appointments'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <FaCalendarAlt />
            <span>My Appointments</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'doctors' ? (
          <>
            {/* Search and Filters */}
            <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:space-x-4">
              {/* Search Bar */}
              <div className="relative flex-1">
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search doctors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Specialty Filter */}
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Specialties</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>

              {/* Rating Filter */}
              <select
                value={minRating}
                onChange={(e) => setMinRating(Number(e.target.value))}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={0}>All Ratings</option>
                <option value={4.5}>4.5+ Stars</option>
                <option value={4}>4+ Stars</option>
                <option value={3.5}>3.5+ Stars</option>
              </select>
            </div>

            {/* Results Count */}
            <p className="text-gray-600 mb-4">
              Showing {filteredDoctors.length} of {doctors.length} doctors
            </p>

            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>

            {/* No Results Message */}
            {filteredDoctors.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">No doctors found matching your criteria</p>
              </div>
            )}
          </>
        ) : (
          <Appointments />
        )}
      </main>
    </div>
  );
}

export default App;