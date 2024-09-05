import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/TVSizeSelection.css'; // Import the CSS for styling

const TVSizeSelection = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedBrand = searchParams.get('brand');

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="tv-size-selection-container">
      <h2>Select Your TV Size</h2>
      <div className="size-options">
        {[24, 32, 40, 42, 43, 46, 47, 49, 50, 55, 65, 75, 80, 104].map((size) => (
          <button
            key={size}
            className={`size-card ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => handleSizeSelect(size)}
          >
            {size}" Inch
          </button>
        ))}
      </div>
      {selectedSize && (
        <div className="next-step">
          <Link
            to={`/service/tv-repair/problem-selection?brand=${selectedBrand}&size=${selectedSize}`}
            className="next-step-link"
          >
            Proceed with {selectedSize}" {selectedBrand} TV
          </Link>
        </div>
      )}
    </div>
  );
};

export default TVSizeSelection;
