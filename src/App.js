import React, { useState } from "react";
import { doctors, specialties } from "./mockData";
import DoctorCard from "./components/DoctorCard";

const App = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const filteredDoctors = selectedSpecialty === "All" 
    ? doctors 
    : doctors.filter(doc => doc.specialty === selectedSpecialty);

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Doctor Directory</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

    </div>
  );
};

export default App;