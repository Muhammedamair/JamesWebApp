import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Jamestronic. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="/privacy-policy" className="mx-2 hover:text-gray-400">Privacy Policy</a>
          <a href="/terms-of-service" className="mx-2 hover:text-gray-400">Terms of Service</a>
          <a href="/contact-us" className="mx-2 hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
