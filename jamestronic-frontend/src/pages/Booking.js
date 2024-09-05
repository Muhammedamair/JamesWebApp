import React from 'react';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Book a Service</h1>
      <p>Use this page to book your service appointments.</p>
      <BookingForm /> {/* Include the BookingForm component */}
    </div>
  );
};

export default Booking;
