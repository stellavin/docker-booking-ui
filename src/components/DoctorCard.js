import React from "react";

const DoctorCard = ({ doctor }) => (
  <div
    className="border rounded-lg p-4 shadow hover:shadow-lg"
    role="region"
    aria-label={`Doctor ${doctor.name}`}
  >
    <img
      src={doctor.photo}
      alt={`Photo of ${doctor.name}`}
      className="w-full h-40 object-cover rounded"
    />
    <h2 className="text-xl font-semibold mt-2">{doctor.name}</h2>
    <p>Specialty: {doctor.specialty}</p>
    <p>Rating: {doctor.rating}</p>
    <p>Location: {doctor.location}</p>
    <button
      className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={() => alert(`Booking appointment with ${doctor.name}`)}
      aria-label={`Book appointment with ${doctor.name}`}
    >
      Book Appointment
    </button>
  </div>
);

export default DoctorCard;