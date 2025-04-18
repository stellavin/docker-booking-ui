import doctorImg from './assets/doctor.jpg';

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    rating: 4.8,
    availability: ["10:00 AM", "11:30 AM"],
    location: "Downtown Clinic",
    patientsCount: 1200,
    photo: doctorImg
  },
  {
    id: 2,
    name: "Dr. Ahmed Khan",
    specialty: "Dermatology",
    rating: 4.5,
    availability: ["2:00 PM", "3:30 PM"],
    location: "City Hospital",
    patientsCount: 980,
    photo: doctorImg
  },
  {
    id: 3,
    name: "Dr. Mei Lin",
    specialty: "Pediatrics",
    rating: 4.9,
    availability: ["9:00 AM", "1:00 PM"],
    location: "Sunrise Health",
    patientsCount: 1500,
    photo: doctorImg
  },
  {
    id: 4,
    name: "Dr. Carlos Rivera",
    specialty: "Orthopedics",
    rating: 4.6,
    availability: ["11:00 AM", "4:00 PM"],
    location: "Valley Medical Center",
    patientsCount: 870,
    photo: doctorImg
  },
  {
    id: 5,
    name: "Dr. Aisha Patel",
    specialty: "Neurology",
    rating: 4.7,
    availability: ["8:30 AM", "12:00 PM"],
    location: "Neuro Care Hospital",
    patientsCount: 1050,
    photo: doctorImg
  },
  {
    id: 6,
    name: "Dr. James Smith",
    specialty: "Ophthalmology",
    rating: 4.4,
    availability: ["10:00 AM", "2:00 PM"],
    location: "Vision Plus Clinic",
    patientsCount: 760,
    photo: doctorImg
  },
  {
    id: 7,
    name: "Dr. Nina Rossi",
    specialty: "Gynecology",
    rating: 4.9,
    availability: ["9:00 AM", "11:30 AM"],
    location: "Women's Wellness Center",
    patientsCount: 1320,
    photo: doctorImg
  },
  {
    id: 8,
    name: "Dr. Omar Farouk",
    specialty: "General Surgery",
    rating: 4.3,
    availability: ["1:00 PM", "5:00 PM"],
    location: "Metro General Hospital",
    patientsCount: 1100,
    photo: doctorImg
  },
  {
    id: 9,
    name: "Dr. Emily Zhang",
    specialty: "ENT (Ear, Nose, Throat)",
    rating: 4.6,
    availability: ["10:30 AM", "3:00 PM"],
    location: "Central ENT Clinic",
    patientsCount: 900,
    photo: doctorImg
  }
];

export const specialties = [...new Set(doctors.map(doc => doc.specialty))];
