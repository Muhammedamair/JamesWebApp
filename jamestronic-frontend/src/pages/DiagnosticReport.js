import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/diagnosticReport.css'; // Assuming you'll create this CSS file for styling

const DiagnosticReport = () => {
  const location = useLocation();
  const brand = new URLSearchParams(location.search).get('brand');
  const size = new URLSearchParams(location.search).get('size');
  const problem = new URLSearchParams(location.search).get('problem');

  const calculateCost = () => {
    // A simple example of calculating cost based on the problem.
    const costMap = {
      'Cracked or Broken Screen': 5000,
      'TV Won’t Turn On': 3000,
      'No Sound': 2000,
      'HDMI Port Not Working': 2500,
      'Remote Control Not Responding': 1500,
      'Software or Firmware Issues': 2000,
    };
    return costMap[problem] || 1000;
  };

  return (
    <div className="diagnostic-report-container">
      <h2 className="text-3xl font-bold text-center mb-8">Diagnostic Report</h2>
      <div className="report-details">
        <p><strong>Brand:</strong> {brand}</p>
        <p><strong>Size:</strong> {size}</p>
        <p><strong>Problem:</strong> {problem}</p>
        <p><strong>Estimated Cost:</strong> ₹{calculateCost()}</p>
      </div>
      <div className="text-center mt-8">
        <Link to="/booking" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">Proceed to Book</Link>
      </div>
    </div>
  );
};

export default DiagnosticReport;
