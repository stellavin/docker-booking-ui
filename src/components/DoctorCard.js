import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaStethoscope } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import BookingModal from './BookingModal';

const DoctorCard = ({ doctor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-500 hover:scale-[1.02] max-w-sm bg-white">
      {/* Image and action buttons */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={doctor.photo}
          alt={`Photo of ${doctor.name}`}
          className="w-full h-44 object-cover"
        />
        {/* Top right icons (share, like) */}
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white p-2 rounded-md shadow">
            <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 12v1a9 9 0 0018 0v-1M12 5v14m0-14L8 9m4-4l4 4" />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-md shadow">
            <svg className="w-4 h-4 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 017.5 3c1.74 0 3.41.81 4.5 2.09A6.36 6.36 0 0116.5 3 5.5 5.5 0 0122 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Badge, Rating, and Name */}
      <div className="mt-3 flex items-center gap-2">
        <span className="text-sm text-gray-600 bg-green-100 text-green-600 px-2 py-0.5 rounded">{doctor.specialty}</span>
        <div className="flex items-center text-yellow-500 text-sm ml-auto">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="text-gray-600 text-sm ml-1">{doctor.rating} Rating</span>
        </div>
      </div>

      {/* Name */}
      <h2 className="text-lg font-bold mt-1 text-blue-900">{doctor.name}</h2>

      {/* Location */}
      <div className="flex items-center text-sm text-gray-600 mt-1">
        <FaMapMarkerAlt className="mr-1 text-blue-900" />
        {doctor.location}
      </div>

      {/* Divider */}
      <div className="border-t mt-3 mb-2"></div>

      {/* Buttons and Doctor Count */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-navbar hover:bg-green-500 transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg flex items-center gap-1"
        >
          Book Appointment <HiArrowRight />
        </button>
        <div className="flex items-center gap-1 text-sm text-blue-900">
          <FaStethoscope />
          {doctor?.patientsCount} Patients Seen
        </div>
      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={doctor.name}
      />
    </div>
  );
};

export default DoctorCard;
