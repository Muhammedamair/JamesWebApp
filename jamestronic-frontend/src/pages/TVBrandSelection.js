import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/tvBrandSelection.css'; // Assuming you'll create this CSS file for styling

const TVBrandSelection = () => {
  const brands = [
    { name: 'Sony', image: '/assets/images/sony-logo.jpg' },
    { name: 'LG', image: '/assets/images/lg-logo.jpg' },
    { name: 'Samsung', image: '/assets/images/samsung-logo.jpg' },
    { name: 'Videocon', image: '/assets/images/videocon-logo.jpg' },
    { name: 'Panasonic', image: '/assets/images/panasonic-logo.jpg' },
    { name: 'VU', image: '/assets/images/vu-logo.jpg' },
    { name: 'OnePlus', image: '/assets/images/oneplus-logo.jpg' },
    { name: 'Sansui', image: '/assets/images/sansui-logo.jpg' },
    { name: 'Aiwa', image: '/assets/images/aiwa-logo.jpg' },
    { name: 'Micromax', image: '/assets/images/micromax-logo.jpg' },
    { name: 'Philips', image: '/assets/images/philips-logo.jpg' },
    { name: 'Sanyo', image: '/assets/images/sanyo-logo.jpg' },
    { name: 'LLOYD', image: '/assets/images/loyat-logo.jpg' },
    { name: 'MI', image: '/assets/images/mi-logo.jpg' },
  ];

  return (
    <div className="tv-brand-selection-container">
      <h2 className="text-3xl font-bold text-center mb-8">Select Your TV Brand</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <Link to={`/service/tv-repair/size-selection?brand=${brand.name}`} key={brand.name} className="brand-card">
            <img src={brand.image} alt={brand.name} className="brand-image" />
            <h3 className="brand-name">{brand.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TVBrandSelection;
