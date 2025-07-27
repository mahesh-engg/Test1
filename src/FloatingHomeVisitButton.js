import React from 'react';
import './FloatingHomeVisitButton.css';

const FloatingHomeVisitButton = () => {
  const handleClick = () => {
    alert('Home Visit Service Available! Call 8657379434 to schedule your home visit.');
  };

  return (
    <div className="floating-home-visit-btn" onClick={handleClick}>
      <span className="home-visit-icon">🏠</span>
      <span className="home-visit-text">Home Visit Available</span>
    </div>
  );
};

export default FloatingHomeVisitButton;