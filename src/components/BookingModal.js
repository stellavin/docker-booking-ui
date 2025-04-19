import React, { useState } from 'react';
import Modal from 'react-modal';

// Bind modal to your appElement for accessibility
Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(1px)',
    zIndex: 999
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    width: '440px',
    padding: '24px',
    borderRadius: '16px',
    border: 'none',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  }
};

const BookingModal = ({ isOpen, onClose, doctorName, availability, doctorId, specialty, location }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleConfirm = () => {
    if (selectedSlot) {
      const existingAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      
      const newAppointment = {
        id: Date.now(),
        doctorId,
        doctorName,
        specialty,
        date: new Date().toISOString().split('T')[0],
        time: selectedSlot,
        location,
        status: 'Upcoming'
      };

      const updatedAppointments = existingAppointments.filter(
        appointment => appointment.doctorId !== doctorId
      );

      updatedAppointments.push(newAppointment);
      localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Book Appointment Modal"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Book Appointment</h2>
        <button 
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>

      {/* Doctor Info */}
      <div className="mb-6">
        <div className="text-gray-600 mb-1">Doctor:</div>
        <div className="text-xl font-semibold">{doctorName}</div>
      </div>

      {/* Time Slots */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Available Time Slots</h3>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {availability?.map((slot) => (
            <button
              key={slot}
              onClick={() => setSelectedSlot(slot)}
              className={`
                py-3 px-4 rounded-lg border text-center
                ${selectedSlot === slot 
                  ? 'bg-blue-500 text-white border-blue-500' 
                  : 'bg-white border-gray-200 hover:border-blue-500'
                }
              `}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        disabled={!selectedSlot}
        className={`
          w-full py-3 rounded-lg text-center font-medium
          ${!selectedSlot 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-blue-500 text-white hover:bg-blue-600'
          }
        `}
      >
        {selectedSlot ? 'Confirm Appointment' : 'Select a Time Slot'}
      </button>
    </Modal>
  );
};

export default BookingModal; 