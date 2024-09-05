import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/televisionRepair.css'; // Importing the custom CSS

const TelevisionRepair = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const problemsList = [
    { title: "Cracked or Broken Screen", description: "If your TV screen is cracked or broken, it will need professional repair or replacement.", image: "/assets/images/tv-cracked-screen.jpg" },
    { title: "TV Won’t Turn On", description: "Check the power source and cables. If the problem persists, it could be an internal issue.", image: "/assets/images/tv-no-power.jpg" },
    { title: "No Sound", description: "Ensure the volume is up and the mute is off. If there's still no sound, the speakers might need repair.", image: "/assets/images/tv-no-sound.jpg" },
    { title: "HDMI Port Not Working", description: "Try using a different HDMI cable or port. If this doesn't work, the port may need repair.", image: "/assets/images/tv-hdmi-issue.jpg" },
    { title: "Remote Control Not Responding", description: "Replace the batteries or try pairing the remote again. If unresponsive, it might need replacement.", image: "/assets/images/tv-remote-issue.jpg" },
    { title: "Software or Firmware Issues", description: "If your Smart TV is freezing or apps are crashing, it might need a software update or reset.", image: "/assets/images/tv-software-issue.jpg" },
  ];

  const filteredProblems = problemsList.filter(problem =>
    problem.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="television-repair-container">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link> &gt; 
        <Link to="/services" className="breadcrumb-link">Services</Link> &gt; 
        <span className="breadcrumb-current">Television Repair</span>
      </div>

      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white text-center py-16">
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Television Repair Service</h1>
          <p className="mb-8 text-lg font-medium drop-shadow-md">Reliable and affordable TV repair services with a 6-month warranty.</p>
        </div>
      </div>

      {/* Self-Diagnosis Section */}
      <div className="diagnosis-section container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Self-Diagnosis Test</h2>
        <p className="text-center mb-8">Identify your TV's problem from the list below and book a repair service.</p>
        <div className="search-bar text-center mb-8">
          <input type="text" placeholder="Search TV issues..." className="search-input" onChange={handleSearch} />
        </div>
        <div className="service-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProblems.map((problem, index) => (
            <div className="diagnosis-card" key={index} title={problem.description}>
              <img src={problem.image} alt={problem.title} className="diagnosis-image" />
              <h3 className="diagnosis-title">{problem.title}</h3>
              <p className="diagnosis-description">{problem.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/booking" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">Book a Repair Service</Link>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="pricing-section container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Pricing</h2>
        <p className="text-center mb-8">We offer competitive pricing based on a detailed analysis of market rates in Manikonda, Hyderabad.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="pricing-card">
            <h3 className="pricing-title">Basic Repair</h3>
            <p className="pricing-amount">₹500 - ₹1000</p>
            <p className="pricing-description">Suitable for minor issues like sound problems or input issues.</p>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-title">Intermediate Repair</h3>
            <p className="pricing-amount">₹1000 - ₹3000</p>
            <p className="pricing-description">For issues like no display, screen flickering, etc.</p>
          </div>
          <div className="pricing-card">
            <h3 className="pricing-title">Advanced Repair</h3>
            <p className="pricing-amount">₹3000 - ₹8000</p>
            <p className="pricing-description">Includes parts replacement, power board issues, etc.</p>
          </div>
        </div>
      </div>

      {/* Warranty and Booking */}
      <div className="warranty-section text-center py-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">6-Month Warranty on All Repairs</h2>
        <p className="mb-8">We stand behind our services with a solid warranty for your peace of mind.</p>
        <Link to="/booking" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">Book Now</Link>
      </div>
    </div>
  );
};

export default TelevisionRepair;
