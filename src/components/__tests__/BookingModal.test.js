/**
 * @fileoverview Test suite for the BookingModal component
 * @module components/__tests__/BookingModal.test
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toast } from 'react-hot-toast';
import BookingModal from '../BookingModal';
import { mockData } from '../../__mocks__/mockData';

/**
 * @description Mock props for the BookingModal component
 * @type {Object}
 * @property {boolean} isOpen - Whether the modal is open
 * @property {Function} onClose - Function to close the modal
 * @property {string} doctorName - Name of the doctor
 * @property {string} specialty - Doctor's specialty
 * @property {string} location - Doctor's location
 * @property {number} doctorId - Unique identifier for the doctor
 * @property {string[]} availability - Array of available time slots
 */
const mockProps = {
  isOpen: true,
  onClose: jest.fn(),
  doctorName: mockData[0].name,
  specialty: mockData[0].specialty,
  location: mockData[0].location,
  doctorId: mockData[0].id,
  availability: mockData[0].availability
};

/**
 * @description Test suite for the BookingModal component
 */
describe('BookingModal', () => {
  /**
   * @description Clears all mocks and localStorage before each test
   */
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  /**
   * @description Tests if the modal renders with correct doctor information
   */
  it('renders modal with doctor information', () => {
    render(<BookingModal {...mockProps} />);
    
    expect(screen.getByText('Book Appointment')).toBeInTheDocument();
    expect(screen.getByText('Doctor:')).toBeInTheDocument();
    expect(screen.getByText(mockProps.doctorName)).toBeInTheDocument();
  });

  /**
   * @description Tests if all available time slots are displayed correctly
   */
  it('displays available time slots', () => {
    render(<BookingModal {...mockProps} />);

    const timeSlotGroup = screen.getByRole('group', { name: 'Available appointment times' });
    mockProps.availability.forEach(slot => {
      const button = screen.getByRole('button', { name: slot });
      expect(button).toBeInTheDocument();
      expect(button).not.toBeDisabled();
    });
  });

  /**
   * @description Tests the appointment booking process and localStorage updates
   */
  it('successfully books an appointment and updates localStorage', async () => {
    render(<BookingModal {...mockProps} />);

    // Select a time slot
    const timeSlot = screen.getByRole('button', { name: '09:00 AM' });
    fireEvent.click(timeSlot);

    // Confirm booking
    const confirmButton = screen.getByRole('button', { name: 'Confirm Appointment' });
    fireEvent.click(confirmButton);

    // Check if localStorage was updated with the correct appointment data
    const expectedAppointment = {
      id: new Date('2024-01-01').getTime(),
      doctorId: mockProps.doctorId,
      doctorName: mockProps.doctorName,
      specialty: mockProps.specialty,
      date: '2024-01-01',
      time: '09:00 AM',
      location: mockProps.location,
      status: 'Upcoming'
    };

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'appointments',
        JSON.stringify([expectedAppointment])
      );
      expect(toast.success).toHaveBeenCalledWith('Appointment booked successfully!');
      expect(mockProps.onClose).toHaveBeenCalled();
    });
  });

  /**
   * @description Tests if the modal closes when the close button is clicked
   */
  it('closes modal when close button is clicked', () => {
    render(<BookingModal {...mockProps} />);

    const closeButton = screen.getByRole('button', { 
      name: 'Close booking modal' 
    });
    fireEvent.click(closeButton);
    expect(mockProps.onClose).toHaveBeenCalled();
  });

  /**
   * @description Tests the warning display when user has an existing appointment
   */
  it('shows warning when user has existing appointment', () => {
    // Set up existing appointment in localStorage
    const existingAppointment = {
      id: 1,
      doctorId: mockProps.doctorId,
      doctorName: mockProps.doctorName,
      specialty: mockProps.specialty,
      date: '2024-01-01',
      time: '09:00 AM',
      location: mockProps.location,
      status: 'Upcoming'
    };

    localStorage.getItem.mockImplementation(() => JSON.stringify([existingAppointment]));

    render(<BookingModal {...mockProps} />);

    // Check if warning message is displayed
    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent(
      'You currently have an appointment at 09:00 AM. Selecting a new time will replace your existing appointment.'
    );

    // Check if the button text is updated
    expect(screen.getByRole('button', { name: 'Keep Current Appointment' })).toBeInTheDocument();
  });
}); 