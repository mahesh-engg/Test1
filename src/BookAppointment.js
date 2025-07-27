import React from 'react';
import './BookAppointment.css';

const BookAppointment = () => {
  return (
    <div className="appointment-container">
      <div className="appointment-content">
        <div className="appointment-form">
        <h2>Patient Details</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Appointment request submitted!'); }}>
          <div className="form-group">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="tel" name="phone" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <select name="service" required>
              <option value="">Select Service</option>
              <option value="orthopedic">Orthopedic & Musculoskeletal</option>
              <option value="neurological">Neurological Conditions</option>
              <option value="geriatric">Geriatric Physiotherapy</option>
              <option value="manual">Manual Therapy</option>
              <option value="fitness">Fitness Assessment</option>
              <option value="online">Online Consultation</option>
              <option value="home">Home Visit</option>
            </select>
          </div>
          <div className="form-group">
            <input type="date" name="date" placeholder="Preferred Date" required />
          </div>
          <div className="form-group">
            <select name="time" required>
              <option value="">Preferred Time</option>
              <option value="09:00">09:00 AM</option>
              <option value="10:00">10:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="15:00">03:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
          <button type="submit">Book Appointment</button>
          </form>
          
          <div className="contact-buttons">
            <a href="tel:8657379434" className="contact-btn call-btn">📞 Call Now</a>
            <a href="https://wa.me/918657379434" className="contact-btn whatsapp-btn">💬 WhatsApp</a>
          </div>
        </div>
        
        <div className="clinic-info">
          <div className="working-hours">
            <h3>Working Hours</h3>
            <div className="hours-list">
              <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
              <div>Saturday: 9:00 AM - 2:00 PM</div>
              <div>Sunday: Closed</div>
              <div className="emergency">Emergency: Available 24/7</div>
            </div>
          </div>
          
          <div className="location">
            <h3>Location</h3>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="200" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy"
                title="Clinic Location">
              </iframe>
            </div>
            <p>AAYUSHYAMAN Physiotherapy Clinic<br/>Kharghar, Navi Mumbai, Maharashtra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;