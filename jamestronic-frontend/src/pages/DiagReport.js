// File: src/pages/DiagReport.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/DiagReport.css';

const DiagReport = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const brand = queryParams.get('brand');
  const size = queryParams.get('size');
  const problem = queryParams.get('problem');
  
  const brandLogos = {
    Sony: '/assets/logos/sony-logo.png',
    LG: '/assets/logos/lg-logo.png',
    Samsung: '/assets/logos/samsung-logo.png',
    Videocon: '/assets/logos/videocon-logo.png',
    Panasonic: '/assets/logos/panasonic-logo.png',
    VU: '/assets/logos/vu-logo.png',
    OnePlus: '/assets/logos/oneplus-logo.png',
    Sansui: '/assets/logos/sansui-logo.png',
    Aiwa: '/assets/logos/aiwa-logo.png',
    Micromax: '/assets/logos/micromax-logo.png',
    Philips: '/assets/logos/philips-logo.png',
    Sanyo: '/assets/logos/sanyo-logo.png',
  };

  const costEstimation = {
    'Cracked or Broken Screen': 5000,
    'TV Won’t Turn On': 3000,
    'No Sound': 1500,
    'HDMI Port Not Working': 2500,
    'Remote Control Not Responding': 1000,
    'Software or Firmware Issues': 2000,
  };
  const estimatedCost = costEstimation[problem] || 'N/A';

  return (
    <div className="diagnosis-report-container">
      <h2 className="text-3xl font-bold text-center mb-8">Diagnostic Report</h2>
      <div className="report-details text-center">
        <div className="brand-info">
          <img 
            src={brandLogos[brand]} 
            alt={`${brand} logo`} 
            className="brand-logo"
          />
          <p><strong>Brand:</strong> {brand}</p>
        </div>
        <p><strong>Size:</strong> {size}"</p>
        <p><strong>Problem:</strong> {problem}</p>
        <p className="cost"><strong>Estimated Cost:</strong> ₹{estimatedCost}</p>
      </div>
      <Link to="/booking" className="proceed-button">Proceed to Book</Link>
    </div>
  );
};

export default DiagReport;
