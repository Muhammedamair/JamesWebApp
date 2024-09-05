import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between">
        <h1 className="text-xl font-bold">Jamestronic</h1>
        <div>
          <Link className="mr-4" to="/">Home</Link>
          <Link className="mr-4" to="/booking">Booking</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
