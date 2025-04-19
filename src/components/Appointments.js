import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaStethoscope } from 'react-icons/fa';
import { appointments } from '../mockData';

const Appointments = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{appointment.doctorName}</h2>
                <div className="flex items-center mt-1 text-gray-600">
                  <FaStethoscope className="mr-2" />
                  <span>{appointment.specialty}</span>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                appointment.status === 'Upcoming' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {appointment.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center text-gray-600">
                <FaCalendarAlt className="mr-2 text-blue-500" />
                <div>
                  <p className="font-medium">{appointment.date}</p>
                  <p className="text-sm">{appointment.time}</p>
                </div>
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <p>{appointment.location}</p>
              </div>
            </div>

            <div className="mt-4 flex justify-end space-x-3">
              <button className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
                Reschedule
              </button>
              <button className="px-4 py-2 text-sm text-red-600 hover:text-red-800 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments; 