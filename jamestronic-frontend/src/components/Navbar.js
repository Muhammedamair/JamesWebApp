import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">Jamestronic</Link>

        {/* Links - Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
          <Link to="/booking" className="text-gray-700 hover:text-blue-600 transition">Booking</Link>
          <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Login</Link>
          <Link to="/register" className="text-gray-700 hover:text-blue-600 transition">Register</Link>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="hidden md:block border border-gray-300 rounded py-2 px-4"
          />
          <button className="text-gray-700 hover:text-blue-600 transition">
            <i className="fas fa-shopping-cart"></i> {/* Cart Icon */}
          </button>
          <button className="text-gray-700 hover:text-blue-600 transition">
            <i className="fas fa-user"></i> {/* Profile Icon */}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-blue-600 transition"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-bars"></i> {/* Mobile Menu Icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <Link to="/" className="block text-gray-700 hover:text-blue-600 transition py-2 px-4">Home</Link>
          <Link to="/services" className="block text-gray-700 hover:text-blue-600 transition py-2 px-4">Services</Link>
          <Link to="/booking" className="block text-gray-700 hover:text-blue-600 transition py-2 px-4">Booking</Link>
          <Link to="/login" className="block text-gray-700 hover:text-blue-600 transition py-2 px-4">Login</Link>
          <Link to="/register" className="block text-gray-700 hover:text-blue-600 transition py-2 px-4">Register</Link>
        </div>
      )}
    </nav>
  );
};
<input
  type="text"
  placeholder="Search"
  className="hidden md:block border border-gray-300 rounded py-2 px-4 search-bar"
/>


export default Navbar;
