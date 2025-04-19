import React, { useState } from 'react';

const BookingModal = ({ isOpen, onClose, doctorName,availability }) => {

  const [selectedSlot, setSelectedSlot] = useState(null);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (selectedSlot) {
      alert(`Appointment booked with ${doctorName} at ${selectedSlot}`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Book Appointment</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">Doctor: {doctorName}</p>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Available Time Slots</h3>
          <div className="grid grid-cols-2 gap-2">
            {availability?.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`p-2 rounded border ${
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
          className={`w-full py-2 rounded ${
            selectedSlot
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Confirm Appointment
        </button>
      </div>
    </div>
  );
};

export default BookingModal; 