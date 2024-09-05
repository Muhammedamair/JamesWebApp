import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/services.css'; // Assuming you have a CSS file for Services styling

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* TV Repair Service Card */}
        <div className="service-card">
          <img src="/assets/images/tv-repair.jpg" alt="TV Repair" className="service-image" />
          <h2 className="service-title">TV Repair</h2>
          <p className="service-description">
            Expert TV repair services for all brands and sizes. Click below to start.
          </p>
          <Link to="/service/tv-repair/brand-selection" className="service-link">
            Start TV Repair Service
          </Link>
        </div>

        {/* Add other service cards here */}
        {/* Example for Microwave Repair */}
        <div className="service-card">
          <img src="/assets/images/microwave-repair.jpg" alt="Microwave Repair" className="service-image" />
          <h2 className="service-title">Microwave Repair</h2>
          <p className="service-description">
            Get your microwave back in working order. Click below to start.
          </p>
          <Link to="/service/microwave-repair" className="service-link">
            Start Microwave Repair Service
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Services;
