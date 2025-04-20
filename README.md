# Doctor Appointment Booking System

A modern React application for booking doctor appointments, built with React, TailwindCSS, and local storage for data persistence.

## Live Demo
Check out the live application at: [https://doctor-directory-98ec6.web.app/](https://doctor-directory-98ec6.web.app/)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:stellavin/docker-booking-ui.git
   cd doctor-booking-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Project Structure
```
src/
├── components/                # React components
│   ├── Appointments.js       # Appointments management component
│   ├── BookingModal.js       # Modal for booking appointments
│   ├── DoctorCard.js         # Card component for doctor display
│   ├── Navbar.js             # Navigation bar component
│   └── __tests__/            # Component test files
│       ├── BookingModal.test.js
│       └── DoctorCard.test.js
├── mocks/                    # Mock data
│   └── mockData.js          # Doctor and appointment data
├── setupTests.js            # Jest test configuration
└── App.js                   # Main application component
```

## AI Tools Usage

This project was developed with the assistance of AI tools to:
- Generate and optimize React components
- Write comprehensive test suites
- Implement responsive design with TailwindCSS
- Create mock data structures
- Debug and fix issues
- Error handling
- UI/UX improvements

## Known Limitations

1. **Data Persistence**
   - Currently using localStorage for data storage
   - Data is not synchronized across devices
   - No backend integration

2. **Features**
   - Limited to basic CRUD operations
   - No user authentication
   - No real-time updates
   - No payment integration

3. **Testing**
   - Unit tests cover basic functionality
   - No end-to-end tests implemented
   - Limited test coverage for edge cases

## Next Steps

1. **Backend Integration**
   - Implement a proper backend API
   - Add user authentication
   - Enable real-time updates

2. **Enhanced Features**
   - Add payment processing
   - Implement email notifications
   - Add calendar integration
   - Enable video consultations

3. **Testing Improvements**
   - Add end-to-end tests
   - Increase test coverage
   - Implement performance testing

4. **UI/UX Enhancements**
   - Add dark mode support
   - Implement responsive design for all screen sizes
   - Add animations and transitions
   - Improve accessibility

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.