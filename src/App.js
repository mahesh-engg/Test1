import React, { useState, useEffect } from 'react';
import Header from './Header';
import DoctorProfile from './DoctorProfile';
import AboutMe from './AboutMe';
import Services from './Services';
import BookAppointment from './BookAppointment';
import Testimonials from './Testimonials';
import HealthTips from './HealthTips';
import FAQ from './FAQ';
import Gallery from './Gallery';
import FloatingButton from './FloatingButton';

import FloatingHomeVisitButton from './FloatingHomeVisitButton';
import Footer from './Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('profile');

  useEffect(() => {
    window.setCurrentPage = setCurrentPage;
  }, []);

  const renderPage = () => {
    switch(currentPage) {
      case 'about':
        return <AboutMe />;
      case 'services':
        return <Services />;
      case 'appointment':
        return <BookAppointment />;
      case 'testimonials':
        return <Testimonials />;
      case 'blog':
        return <HealthTips />;
      case 'faq':
        return <FAQ />;
      case 'gallery':
        return <Gallery />;
      default:
        return <DoctorProfile />;
    }
  };

  return (
    <div className="App">
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '70px', paddingBottom: '60px' }}>
        {renderPage()}
      </main>
      <FloatingButton />

      <FloatingHomeVisitButton />
      <Footer />
    </div>
  );
}

export default App;
