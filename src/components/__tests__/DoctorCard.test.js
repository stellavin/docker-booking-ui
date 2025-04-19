import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DoctorCard from '../DoctorCard';

// Mock the BookingModal component
jest.mock('../BookingModal', () => {
  return function MockBookingModal({ isOpen, onClose }) {
    if (!isOpen) return null;
    return (
      <div data-testid="mock-booking-modal">
        <button onClick={onClose}>Close Modal</button>
      </div>
    );
  };
});

const mockDoctor = {
  id: 1,
  name: 'Dr. Sarah Johnson',
  specialty: 'Cardiologist',
  photo: 'https://example.com/photo.jpg',
  rating: 4.8,
  location: 'City Hospital',
  patientsCount: 1200,
  availability: ['09:00 AM', '10:00 AM']
};

describe('DoctorCard', () => {
  it('renders doctor information correctly', () => {
    render(<DoctorCard doctor={mockDoctor} />);

    // Check if doctor's name is rendered
    expect(screen.getByText('Dr. Sarah Johnson')).toBeInTheDocument();

    // Check if specialty is rendered
    expect(screen.getByText('Cardiologist')).toBeInTheDocument();

    // Check if location is rendered
    expect(screen.getByText('City Hospital')).toBeInTheDocument();

    // Check if patients count is rendered
    expect(screen.getByText(/1200 Patients Seen/)).toBeInTheDocument();

    // Check if rating is rendered
    expect(screen.getByText(/4.8 Rating/)).toBeInTheDocument();
  });

  it('renders doctor image with correct alt text', () => {
    render(<DoctorCard doctor={mockDoctor} />);
    const image = screen.getByAltText('Dr. Dr. Sarah Johnson');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/photo.jpg');
  });

  it('opens booking modal when book appointment button is clicked', () => {
    render(<DoctorCard doctor={mockDoctor} />);
    
    // Click the book appointment button
    fireEvent.click(screen.getByText(/Book Appointment/));

    // Check if modal is opened
    expect(screen.getByTestId('mock-booking-modal')).toBeInTheDocument();
  });

  it('closes booking modal when close button is clicked', () => {
    render(<DoctorCard doctor={mockDoctor} />);
    
    // Open the modal
    fireEvent.click(screen.getByText(/Book Appointment/));
    
    // Close the modal
    fireEvent.click(screen.getByText('Close Modal'));
    
    // Check if modal is closed
    expect(screen.queryByTestId('mock-booking-modal')).not.toBeInTheDocument();
  });

  it('has correct ARIA attributes', () => {
    render(<DoctorCard doctor={mockDoctor} />);

    // Check if article has correct ARIA labelledby
    const article = screen.getByRole('article');
    expect(article).toHaveAttribute('aria-labelledby', 'doctor-name-1');

    // Check if specialty has correct ARIA label
    expect(screen.getByLabelText('Specialization: Cardiologist')).toBeInTheDocument();

    // Check if rating has correct ARIA label
    expect(screen.getByLabelText('Rating: 4.8 out of 5 stars')).toBeInTheDocument();

    // Check if location has correct ARIA label
    expect(screen.getByLabelText('Located at City Hospital')).toBeInTheDocument();

    // Check if patients count has correct ARIA label
    expect(screen.getByLabelText('1200 patients seen')).toBeInTheDocument();
  });

  it('renders action buttons with correct ARIA labels', () => {
    render(<DoctorCard doctor={mockDoctor} />);

    // Check share button
    expect(screen.getByLabelText('Share doctor profile')).toBeInTheDocument();

    // Check favorite button
    expect(screen.getByLabelText('Add to favorites')).toBeInTheDocument();

    // Check book appointment button
    expect(screen.getByLabelText('Book appointment with Dr. Sarah Johnson')).toBeInTheDocument();
  });
}); 