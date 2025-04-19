import React from "react";

const Navbar = () => (
  <nav className="bg-navbar text-white px-4 py-3 shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold">Doctor's Directory</h1>
      <a href="/appointments" className="hover:text-gray-300 transition-colors">
        My Appointments
      </a>
    </div>
  </nav>
);

export default Navbar;