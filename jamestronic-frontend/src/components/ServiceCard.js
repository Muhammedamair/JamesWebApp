import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="hover:shadow-lg transition transform hover:-translate-y-1">
      <Link to={link}>
        <img src={imageSrc} alt={title} className="w-full h-auto rounded" />
        <h3 className="text-center text-xl font-bold mt-4">{title}</h3>
        <p className="text-center">{description}</p>
      </Link>
    </div>
  );
};

export default ServiceCard;
