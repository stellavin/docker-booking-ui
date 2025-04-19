import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, doctorName, availability, doctorId, specialty, location }) => {

  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (selectedSlot) {
      // Get existing appointments from localStorage
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      
      // Create new appointment
      const newAppointment = {
        id: Date.now(), // Use timestamp as unique ID
        doctorId,
        doctorName,
        specialty,
        date: new Date().toISOString().split('T')[0], // Today's date
        time: selectedSlot,
        location,
        status: 'Upcoming'
      };

      // Remove any existing appointment for this doctor
      const updatedAppointments = existingAppointments.filter(
        appointment => appointment.doctorId !== doctorId
      );

      // Add the new appointment
      updatedAppointments.push(newAppointment);

      // Save to localStorage
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

      alert(`Appointment booked with ${doctorName} at ${selectedSlot}`);
      onClose();
    }
  };

  // Get existing appointments to check current booking
  const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
  const currentBooking = existingAppointments.find(
    appointment => appointment.doctorId === doctorId
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md transform transition-all duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Book Appointment</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">Doctor: {doctorName}</p>
        
        {currentBooking && (
          <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800">
              You currently have an appointment at {currentBooking.time}. 
              Booking a new time will replace your existing appointment.
            </p>
          </div>
        )}
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
          <div className="grid grid-cols-2 gap-2">
            {availability?.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-2 rounded border transition-colors duration-200 ${
                  selectedSlot === slot
                    ? 'bg-blue-500 text-white border-blue-500'
                    : 'border-gray-300 hover:border-blue-500'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleConfirm}
          disabled={!selectedSlot}
          className={`w-full py-2 rounded transition-colors duration-200 ${
            selectedSlot
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {currentBooking ? 'Replace Existing Appointment' : 'Confirm Appointment'}
        </button>
      </div>
    </div>
  );
};

export default BookingModal; 