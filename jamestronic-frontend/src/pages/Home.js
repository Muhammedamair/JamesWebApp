import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white text-center py-16">
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Welcome to Jamestronic</h1>
          <p className="mb-8 text-lg font-medium drop-shadow-md">Your one-stop solution for electronics repair and services.</p>
          <Link to="/services" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition animate-fadeInUp delay-2s">Explore Our Services</Link>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-70"></div>
      </div>

      {/* Service Categories Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fadeInUp">Our Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/service/tv-repair/brand-selection" className="service-card">
            <div className="service-image-container">
              <img src="/assets/images/tv-repair.jpg" alt="Television Repair" className="service-image" />
            </div>
            <h3 className="service-title">Television Repair</h3>
            <p className="service-description">High-quality repair services for your television.</p>
          </Link>
          <Link to="/service/microwave-repair" className="service-card">
            <div className="service-image-container">
              <img src="/assets/images/microwave-repair.jpg" alt="Microwave Repair" className="service-image" />
            </div>
            <h3 className="service-title">Microwave Repair</h3>
            <p className="service-description">Reliable repair services for your microwave.</p>
          </Link>
          {/* Add more categories as needed */}
        </div>
      </div>
    </div>
  );
};

export default Home;
