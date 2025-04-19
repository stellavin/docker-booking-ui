import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaStethoscope, FaTimes } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
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
    width: '400px',
    padding: '24px',
    borderRadius: '16px',
    border: 'none',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  }
};

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [appointmentToCancel, setAppointmentToCancel] = useState(null);

  useEffect(() => {
    // Load appointments from localStorage
    const storedAppointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    setAppointments(storedAppointments);
  }, []);

  const openCancelModal = (appointment) => {
    setAppointmentToCancel(appointment);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    // Filter out the cancelled appointment
    const updatedAppointments = appointments.filter(app => app.id !== appointmentToCancel.id);
    
    // Update state and localStorage
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));

    // Show success toast with doctor name
    toast.success(`Appointment with ${appointmentToCancel.doctorName} has been cancelled`);
    
    // Close the modal
    setIsModalOpen(false);
    setAppointmentToCancel(null);
  };

  if (appointments.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <FaCalendarAlt className="mx-auto text-gray-400 text-5xl mb-4" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No Appointments Found</h2>
          <p className="text-gray-500">
            You haven't booked any appointments yet. Visit the Find Doctors section to schedule an appointment.
          </p>
        </div>
      </div>
    );
  }

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

            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => openCancelModal(appointment)}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-800 transition-colors flex items-center gap-2"
              >
                <FaTimes />
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cancellation Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={customStyles}
        contentLabel="Cancel Appointment Confirmation"
      >
        <div className="text-center">
          <FaTimes className="mx-auto text-red-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Cancel Appointment</h2>
          {appointmentToCancel && (
            <div className="mb-6">
              <p className="text-gray-600 mb-2">
                Are you sure you want to cancel your appointment with
              </p>
              <p className="text-lg font-semibold text-gray-800">
                {appointmentToCancel.doctorName}
              </p>
              <p className="text-gray-600 mt-2">
                on {appointmentToCancel.date} at {appointmentToCancel.time}?
              </p>
            </div>
          )}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              No, Keep It
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Yes, Cancel It
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Appointments; 