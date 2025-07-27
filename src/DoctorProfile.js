import React from 'react';
import './DoctorProfile.css';
import './DoctorProfile.mobile.css';

const DoctorProfile = () => {
  return (
    <div className="profile-container">
      <div className="hero-video-section">
        <video 
          width="100%" 
          height="400" 
          controls 
          autoPlay
          muted
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Crect width='1200' height='400' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666' font-size='24'%3EPhysiotherapy Clinic Tour%3C/text%3E%3C/svg%3E"
        >
          <source src="https://ivoryphysiotherapy.in/assets/video/physio-clinic-navi-mumbai.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="content-wrapper">
        <div className="welcome-section">
          <div className="welcome-content">
            <div className="doctor-photo">
              RK
            </div>
            <div className="welcome-text">
              <h2>Welcome to AAYUSHYAMAN Physiotherapy Clinic</h2>
              <p>Expert physiotherapy care with personalized treatment plans</p>
              <p>Specializing in orthopedic, neurological, and geriatric rehabilitation</p>
              <p><strong>Home visits available for your convenience</strong></p>
            </div>
          </div>
        </div>
        
        <div className="profile-card">
        <div className="doctor-details">
          <h2>Dr. Rutuja Kankhare (PT)</h2>
          <p className="qualification">BPTh/NDS</p>
          <p className="reg-no">Reg No. 2024/11/PT/013416</p>
          <p className="title"><strong>Consultant Physiotherapist</strong></p>
          
          <div className="contact-info">
            <p><strong>Mobile:</strong> 8657379434</p>
            <p><strong>Email:</strong> rutujakankhare068@gmail.com</p>
          </div>
        </div>
        
        <div className="services-section" style={{background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=800&fit=crop") center/cover', borderRadius: '10px', padding: '2rem'}}>
          <h3 style={{color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Services Provided</h3>
          <ul className="services-list">
            <li><strong>Orthopedic & Musculoskeletal Conditions</strong>
              <ul>
                <li>Joint Replacement (TKR,THR) Rehab</li>
                <li>Frozen shoulder management</li>
              </ul>
            </li>
            <li><strong>Neurological Conditions</strong>
              <ul>
                <li>Nerve injuries & neuropathy</li>
                <li>Stroke rehabilitation</li>
              </ul>
            </li>
            <li><strong>Geriatric Physiotherapy</strong>
              <ul>
                <li>Mobility & balance training</li>
              </ul>
            </li>
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

export default DoctorProfile;