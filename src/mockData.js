import doctorImg from './assets/doctor.jpg';

export const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.8,
    location: 'City Hospital',
    patientsCount: 1200,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.9,
    location: 'Skin Care Clinic',
    patientsCount: 850,
    availability: ['10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM']
  },
  {
    id: 3,
    name: 'Dr. Emily Wilson',
    specialty: 'Pediatrician',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.7,
    location: 'Children\'s Medical Center',
    patientsCount: 1500,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM']
  },
  {
    id: 4,
    name: "Dr. Carlos Rivera",
    specialty: "Orthopedics",
    rating: 4.6,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    location: "Valley Medical Center",
    patientsCount: 870,
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    specialty: "Neurology",
    rating: 4.7,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    location: "Neuro Care Hospital",
    patientsCount: 1050,
    photo: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: "Dr. James Smith",
    specialty: "Ophthalmology",
    rating: 4.4,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    location: "Vision Plus Clinic",
    patientsCount: 760,
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    name: "Dr. Nina Rossi",
    specialty: "Gynecology",
    rating: 4.9,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    location: "Women's Wellness Center",
    patientsCount: 1320,
    photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    name: "Dr. Omar Farouk",
    specialty: "General Surgery",
    rating: 4.3,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    location: "Metro General Hospital",
    patientsCount: 1100,
    photo: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    name: "Dr. Emily Zhang",
    specialty: "ENT (Ear, Nose, Throat)",
    rating: 4.6,
    availability: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'],
    location: "Central ENT Clinic",
    patientsCount: 900,
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export const specialties = [...new Set(doctors.map(doc => doc.specialty))];

export const appointments = [
  {
    id: 1,
    doctorId: 1,
    doctorName: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    date: '2024-03-15',
    time: '10:00 AM',
    location: 'City Hospital, Floor 3',
    status: 'Upcoming'
  },
  {
    id: 2,
    doctorId: 2,
    doctorName: 'Dr. Michael Chen',
    specialty: 'Dermatologist',
    date: '2024-03-20',
    time: '02:30 PM',
    location: 'Skin Care Clinic, Room 101',
    status: 'Upcoming'
  },
  {
    id: 3,
    doctorId: 3,
    doctorName: 'Dr. Emily Wilson',
    specialty: 'Pediatrician',
    date: '2024-03-10',
    time: '11:00 AM',
    location: 'Children\'s Medical Center, Wing B',
    status: 'Completed'
  }
];
