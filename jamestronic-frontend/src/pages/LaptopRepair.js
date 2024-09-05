import React from 'react';
import { Link } from 'react-router-dom';

const LaptopRepair = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Laptop Repair</h1>
      <p className="text-center mb-12">Expert laptop repair services for all your computing needs.</p>
      <img src="/assets/images/laptop-repair-placeholder.jpg" alt="Laptop Repair" className="w-full h-auto mb-8" />
      <p className="text-center mb-12">Whether it's hardware or software, we can help you get your laptop back in top shape.</p>
      <div className="text-center">
        <Link to="/booking" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Book Now</Link>
      </div>
    </div>
  );
};

export default LaptopRepair;
