import React from 'react';
<Link to={`/service/${service.id}`} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Learn More</Link>


const services = [
  { id: 1, name: 'TV Repair', description: 'Fix all your TV issues' },
  { id: 2, name: 'Laptop Repair', description: 'Expert laptop repair services' },
  // Add more services
];

const ServiceList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service) => (
        <div key={service.id} className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-bold">{service.name}</h2>
          <p>{service.description}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
