import React from 'react';
import './HealthTips.css';

const HealthTips = () => {
  return (
    <div className="health-tips-container">
      <div className="health-tips-content">
        <h2>Health Tips & Exercise Guide</h2>
        
        <div className="tips-grid">
          <div className="tip-card">
            <h3>🏃‍♀️ Daily Exercise Tips</h3>
            <ul>
              <li>Start with 10-15 minutes of walking daily</li>
              <li>Perform gentle stretching every morning</li>
              <li>Take breaks every hour if you work at a desk</li>
              <li>Include strength training 2-3 times per week</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>🪑 Posture Correction</h3>
            <ul>
              <li>Keep your shoulders back and relaxed</li>
              <li>Align your ears over your shoulders</li>
              <li>Use ergonomic chair and desk setup</li>
              <li>Practice wall posture exercises daily</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>🛡️ Injury Prevention</h3>
            <ul>
              <li>Always warm up before exercising</li>
              <li>Use proper lifting techniques</li>
              <li>Wear appropriate footwear</li>
              <li>Listen to your body and rest when needed</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>🧘‍♀️ Neck & Shoulder Relief</h3>
            <ul>
              <li>Gentle neck rotations (5 times each direction)</li>
              <li>Shoulder blade squeezes (hold for 5 seconds)</li>
              <li>Upper trap stretches (hold for 30 seconds)</li>
              <li>Apply heat therapy for muscle tension</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>🦵 Knee Health</h3>
            <ul>
              <li>Strengthen quadriceps and hamstrings</li>
              <li>Maintain healthy weight</li>
              <li>Avoid prolonged sitting or standing</li>
              <li>Use ice for acute pain, heat for stiffness</li>
            </ul>
          </div>

          <div className="tip-card">
            <h3>🏠 Home Exercise Equipment</h3>
            <ul>
              <li>Resistance bands for strength training</li>
              <li>Yoga mat for floor exercises</li>
              <li>Foam roller for muscle recovery</li>
              <li>Exercise ball for core strengthening</li>
            </ul>
          </div>
        </div>

        <div className="disclaimer">
          <p><strong>Disclaimer:</strong> These tips are for general guidance only. Always consult with Dr. Rutuja Kankhare or your healthcare provider before starting any new exercise program, especially if you have existing health conditions or injuries.</p>
        </div>
      </div>
    </div>
  );
};

export default HealthTips;