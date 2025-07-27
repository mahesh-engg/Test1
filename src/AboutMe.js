import React from 'react';
import './AboutMe.css';
import './AboutMe.mobile.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <div className="doctor-photo">
            RK
          </div>
          <div className="intro">
            <h2>About Dr. Rutuja Kankhare</h2>
            <p>Hello! I'm passionate about helping people regain their mobility and live pain-free lives through personalized physiotherapy care.</p>
          </div>
        </div>

        <div className="about-sections">
          <div className="section">
            <h3>Qualifications & Certifications</h3>
            <ul>
              <li><strong>BPTh/NDS</strong> - Bachelor of Physiotherapy</li>
              <li><strong>Registration No:</strong> 2024/11/PT/013416</li>
              <li>Certified in Manual Therapy Techniques</li>
              <li>Specialized training in Neurological Rehabilitation</li>
              <li>Advanced certification in Geriatric Physiotherapy</li>
            </ul>
          </div>

          <div className="section">
            <h3>Experience & Achievements</h3>
            <ul>
              <li>5+ years of clinical experience in physiotherapy</li>
              <li>Successfully treated 500+ patients with various conditions</li>
              <li>Specialized expertise in post-surgical rehabilitation</li>
              <li>Pioneer in home-based physiotherapy services in the region</li>
              <li>Regular participant in physiotherapy conferences and workshops</li>
            </ul>
          </div>

          <div className="section mission-vision">
            <div className="mission">
              <h3>My Mission</h3>
              <p>To provide compassionate, evidence-based physiotherapy care that empowers patients to achieve their maximum functional potential and improve their quality of life.</p>
            </div>
            <div className="vision">
              <h3>My Vision</h3>
              <p>To make quality physiotherapy accessible to everyone through innovative treatment approaches, home visits, and personalized care plans that fit each patient's unique needs.</p>
            </div>
          </div>

          <div className="section personal-note">
            <h3>A Personal Note</h3>
            <p>I believe that healing is a partnership between the therapist and patient. My approach combines clinical expertise with genuine care, ensuring you feel comfortable and supported throughout your recovery journey. Whether you're recovering from surgery, managing chronic pain, or looking to improve your mobility, I'm here to guide you every step of the way.</p>
            <p><strong>Remember:</strong> Every small step forward is progress worth celebrating!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;