import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h2>Patient Testimonials</h2>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Dr. Rutuja helped me recover completely from my knee surgery. Her home visits made my recovery so much easier. Highly recommended!"</p>
            <div className="patient-info">
              <strong>- Mrs. Priya Sharma</strong>
              <span>Knee Replacement Recovery</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Excellent treatment for my frozen shoulder. Dr. Rutuja's manual therapy techniques worked wonders. I can move my arm freely now!"</p>
            <div className="patient-info">
              <strong>- Mr. Rajesh Patel</strong>
              <span>Frozen Shoulder Treatment</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"After my stroke, I thought I'd never walk properly again. Dr. Rutuja's neurological rehabilitation program gave me my life back."</p>
            <div className="patient-info">
              <strong>- Mr. Suresh Kumar</strong>
              <span>Stroke Rehabilitation</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Professional, caring, and effective treatment. The online consultations during lockdown were a lifesaver. Thank you, Dr. Rutuja!"</p>
            <div className="patient-info">
              <strong>- Ms. Anita Desai</strong>
              <span>Online Consultation</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"My elderly mother's mobility improved significantly with Dr. Rutuja's geriatric physiotherapy. She's more confident walking now."</p>
            <div className="patient-info">
              <strong>- Dr. Amit Joshi</strong>
              <span>Geriatric Physiotherapy</span>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Best physiotherapist in Navi Mumbai! Her home visit service is excellent. Professional equipment and personalized care at home."</p>
            <div className="patient-info">
              <strong>- Mrs. Kavita Singh</strong>
              <span>Home Visit Service</span>
            </div>
          </div>
        </div>

        <div className="testimonial-note">
          <p><em>All testimonials are from genuine patients with their consent. Individual results may vary.</em></p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;