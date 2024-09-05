import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure this is here to import your styles
import App from './App';
import { AuthProvider } from './context/AuthContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './index.css';
import './App.css';
import '../styles/DiagReport.css';




const Root = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return (
    <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
