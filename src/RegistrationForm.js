import React from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ onRegistrationComplete }) => {
  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={(e) => { e.preventDefault(); alert('Registration successful!'); onRegistrationComplete(); }}>
        <h2>Register</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;