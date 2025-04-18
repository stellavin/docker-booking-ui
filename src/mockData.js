import doctorImg from './assets/doctor.jpg';

export const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.8,
      availability: ["10:00 AM", "11:30 AM"],
      location: "Downtown Clinic",
      photo: doctorImg
    },
    {
      id: 2,
      name: "Dr. Ahmed Khan",
      specialty: "Dermatology",
      rating: 4.5,
      availability: ["2:00 PM", "3:30 PM"],
      location: "City Hospital",
      photo: doctorImg
    },
    {
      id: 3,
      name: "Dr. Mei Lin",
      specialty: "Pediatrics",
      rating: 4.9,
      availability: ["9:00 AM", "1:00 PM"],
      location: "Sunrise Health",
      photo: doctorImg
    }
  ];
  
  export const specialties = [...new Set(doctors.map(doc => doc.specialty))];