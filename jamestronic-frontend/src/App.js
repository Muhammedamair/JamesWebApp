// File: src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ServiceDetail from './pages/ServiceDetail';
import Register from './pages/Register';
import TelevisionRepair from './pages/TelevisionRepair';
import TVBrandSelection from './pages/TVBrandSelection';
import TVSizeSelection from './pages/TVSizeSelection';
import TVProblemSelection from './pages/TVProblemSelection';
import Services from './pages/Services';
import DiagReport from './pages/DiagReport'; // Import the renamed component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/service/tv-repair" element={<TelevisionRepair />} />
          <Route path="/service/tv-repair/brand-selection" element={<TVBrandSelection />} />
          <Route path="/service/tv-repair/size-selection" element={<TVSizeSelection />} />
          <Route path="/service/tv-repair/problem-selection" element={<TVProblemSelection />} />
          <Route path="/service/tv-repair/diagnostic-report" element={<DiagReport />} /> {/* Update Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

