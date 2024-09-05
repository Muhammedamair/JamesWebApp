import React from 'react';
import { Link } from 'react-router-dom';

const MicrowaveRepair = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Microwave Repair</h1>
      <p className="text-center mb-12">Reliable microwave repair services to get your appliance running smoothly.</p>
      <img src="/assets/images/microwave-repair-placeholder.jpg" alt="Microwave Repair" className="w-full h-auto mb-8" />
      <p className="text-center mb-12">Our technicians are skilled in repairing all kinds of microwave issues.</p>
      <div className="text-center">
        <Link to="/booking" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Book Now</Link>
      </div>
    </div>
  );
};

export default MicrowaveRepair;
