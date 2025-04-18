import React from "react";

const DoctorCard = () => (
  <div
    className="border rounded-lg p-4 shadow hover:shadow-lg"
    role="region"
    aria-label={`Doctor stella`}
  >
    <img
      src={""}
      alt={`Photo of stella`}
      className="w-full h-40 object-cover rounded"
    />
    <h2 className="text-xl font-semibold mt-2">Stella Sikhila</h2>
    <p>Specialty: Nurse</p>
    <p>Rating: 2</p>
    <p>Location: Nairobi</p>
    <button
      className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      aria-label={`Book appointment with stella`}
    >
      Book Appointment
    </button>
  </div>
);

export default DoctorCard;
