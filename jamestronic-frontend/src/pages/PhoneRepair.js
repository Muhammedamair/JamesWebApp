import React from 'react';
import { Link } from 'react-router-dom';

const PhoneRepair = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Phones Repair</h1>
      <p className="text-center mb-12">Professional phone repair services to fix your mobile devices.</p>
      <img src="/assets/images/phone-repair-placeholder.jpg" alt="Phones Repair" className="w-full h-auto mb-8" />
      <p className="text-center mb-12">We handle everything from screen repairs to battery replacements and more.</p>
      <div className="text-center">
        <Link to="/booking" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Book Now</Link>
      </div>
    </div>
  );
};

export default PhoneRepair;
