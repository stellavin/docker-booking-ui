import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import { SlidersHorizontal } from "lucide-react";
import { specialties, doctors } from "../__mocks__/mockData";

const DoctorList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [specialtySearch, setSpecialtySearch] = useState("");

  const filteredDoctors = doctors.filter((doc) => {
    const matchesName = doc.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All" || doc.specialty === selectedSpecialty;
    return matchesName && matchesSpecialty;
  });

  // Filter specialties based on the search input
  const filteredSpecialties = specialties.filter((spec) =>
    spec.toLowerCase().includes(specialtySearch.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Search & Filter Bar */}
      <div className="flex items-center justify-between mb-6 relative">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 px-2 py-1 text-sm w-full max-w-sm"
        />

        {/* Filter Icon */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="ml-4 p-2 text-gray-700 hover:text-blue-500 transition"
          title="Filter by specialty"
        >
          <SlidersHorizontal className="w-6 h-6" />
        </button>

        {/* Specialties List with Search Input */}
        {showFilters && (
          <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 p-4 rounded-lg shadow max-w-sm z-10">
            {/* Specialty Search Input */}
            <input
              type="text"
              placeholder="Search specialties..."
              value={specialtySearch}
              onChange={(e) => setSpecialtySearch(e.target.value)}
              className="border-b border-gray-400 bg-transparent focus:outline-none focus:border-blue-500 px-2 py-1 text-sm w-full mb-4"
            />

            {/* Filtered Specialty List */}
            <ul className="space-y-2">
              <li
                onClick={() => setSelectedSpecialty("All")}
                className="cursor-pointer text-blue-500 hover:text-blue-700"
              >
                All Specialties
              </li>
              {filteredSpecialties.map((spec) => (
                <li
                  key={spec}
                  onClick={() => setSelectedSpecialty(spec)}
                  className="cursor-pointer text-blue-500 hover:text-blue-700"
                >
                  {spec}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
        {filteredDoctors.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default DoctorList;
