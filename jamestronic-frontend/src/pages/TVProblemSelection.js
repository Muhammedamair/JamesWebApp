import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/TVProblemSelection.css'; // Import the CSS for styling

const TVProblemSelection = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedBrand = searchParams.get('brand');
  const selectedSize = searchParams.get('size');

  const handleProblemSelect = (problem) => {
    setSelectedProblem(problem);
  };

  const problems = [
    { id: 1, title: 'Cracked or Broken Screen', image: '/assets/images/tv-cracked-screen.jpg' },
    { id: 2, title: 'TV Won’t Turn On', image: '/assets/images/tv-no-power.jpg' },
    { id: 3, title: 'No Sound', image: '/assets/images/tv-no-sound.jpg' },
    { id: 4, title: 'HDMI Port Not Working', image: '/assets/images/tv-hdmi-issue.jpg' },
    { id: 5, title: 'Remote Control Not Responding', image: '/assets/images/tv-remote-issue.jpg' },
    { id: 6, title: 'Software or Firmware Issues', image: '/assets/images/tv-software-issue.jpg' },
  ];

  return (
    <div className="tv-problem-selection-container">
      <h2>Select Your TV Problem</h2>
      <div className="problem-options">
        {problems.map((problem) => (
          <div
            key={problem.id}
            className={`problem-card ${selectedProblem === problem.title ? 'selected' : ''}`}
            onClick={() => handleProblemSelect(problem.title)}
          >
            <img src={problem.image} alt={problem.title} className="problem-image" />
            <h3 className="problem-title">{problem.title}</h3>
          </div>
        ))}
      </div>
      {selectedProblem && (
        <div className="next-step">
          <Link
            to={`/service/tv-repair/diagnostic-report?brand=${selectedBrand}&size=${selectedSize}&problem=${selectedProblem}`}
            className="next-step-link"
          >
            Proceed with "{selectedProblem}"
          </Link>
        </div>
      )}
    </div>
  );
};

export default TVProblemSelection;
