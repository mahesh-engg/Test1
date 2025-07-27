import React from 'react';
import './Services.css';
import './Services.mobile.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h2>Services Provided</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Orthopedic & Musculoskeletal Conditions</h3>
            <ul>
              <li>Joint Replacement (TKR,THR) Rehab</li>
              <li>Frozen shoulder management</li>
            </ul>
          </div>
          
          <div className="service-card">
            <h3>Neurological Conditions</h3>
            <ul>
              <li>Nerve injuries & neuropathy</li>
              <li>Stroke rehabilitation</li>
            </ul>
          </div>
          
          <div className="service-card">
            <h3>Geriatric Physiotherapy</h3>
            <ul>
              <li>Mobility & balance training</li>
            </ul>
          </div>
          
          <div className="service-card">
            <h3>Additional Services</h3>
            <ul>
              <li>Manual Therapy</li>
              <li>Fitness Assessment & Planning</li>
              <li>Online Consultation Available</li>
              <li className="highlight">Home Visit Available</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;