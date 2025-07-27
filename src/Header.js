import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo" onClick={() => window.setCurrentPage && window.setCurrentPage('profile')} style={{cursor: 'pointer'}}>
          <img src="https://w7.pngwing.com/pngs/673/156/png-transparent-health-care-chiropractor-physical-therapy-chiropractic-kine-logo-sports-equipment-shoe-thumbnail.png" alt="Logo" className="logo-img" />
          <div className="clinic-name">
            <h1>AAYUSHYAMAN</h1>
            <span className="clinic-subtitle">Physiotherapy Clinic</span>
          </div>
        </div>
        <div className="header-right">
          <nav>
            <a href="#home" onClick={() => window.setCurrentPage && window.setCurrentPage('profile')}><span className="nav-icon">🏠</span>Home</a>
            <a href="#about" onClick={() => window.setCurrentPage && window.setCurrentPage('about')}><span className="nav-icon">👨‍⚕️</span>About Me</a>
            <a href="#services" onClick={() => window.setCurrentPage && window.setCurrentPage('services')}><span className="nav-icon">🩺</span>Services</a>
            <a href="#gallery" onClick={() => window.setCurrentPage && window.setCurrentPage('gallery')}><span className="nav-icon">📸</span>Gallery</a>
          </nav>
          <div className="doctor-info">
            <div className="doctor-badge" onClick={() => window.setCurrentPage && window.setCurrentPage('appointment')} style={{cursor: 'pointer'}}><span className="badge-icon">📅</span>Book Appointment</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;