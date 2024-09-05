import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Mock service details based on serviceId
  const serviceDetails = {
    tv: {
      name: 'TV Repair',
      description: 'Comprehensive repair services for all types of TVs.',
      price: '$50 - $200',
    },
    laptop: {
      name: 'Laptop Repair',
      description: 'Expert laptop repair services, including hardware and software issues.',
      price: '$80 - $300',
    },
    // Add more services
  };

  const service = serviceDetails[serviceId];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{service?.name || 'Service Not Found'}</h1>
      <p>{service?.description}</p>
      <p className="text-lg font-semibold">Price: {service?.price}</p>
    </div>
  );
};

export default ServiceDetail;
