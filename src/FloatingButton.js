import React from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/digital-card.jpeg';
    link.download = 'AAYUSHYAMAN-Digital-Card.jpeg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="floating-button" onClick={handleDownload}>
      <div className="floating-icon">📱</div>
      <div className="floating-text">Download Visiting card</div>
    </div>
  );
};

export default FloatingButton;