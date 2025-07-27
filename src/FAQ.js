import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What to expect during the first session?",
      answer: "During your first session, Dr. Rutuja will conduct a comprehensive assessment including medical history review, physical examination, and movement analysis. She'll discuss your goals and create a personalized treatment plan. The session typically lasts 45-60 minutes."
    },
    {
      question: "Do I need a doctor's referral?",
      answer: "No, you don't need a doctor's referral for physiotherapy treatment. However, if you have insurance coverage, some plans may require a referral. We recommend checking with your insurance provider beforehand."
    },
    {
      question: "How many sessions are needed?",
      answer: "The number of sessions varies depending on your condition, severity, and individual response to treatment. Typically, acute conditions may need 4-6 sessions, while chronic conditions might require 8-12 sessions. Dr. Rutuja will provide an estimate after your initial assessment."
    },
    {
      question: "Do you provide home visits?",
      answer: "Yes! We offer home visit services for your convenience. This is especially beneficial for elderly patients, post-surgical recovery, or those with mobility limitations. Home visits are available throughout Kharghar and surrounding areas in Navi Mumbai."
    },
    {
      question: "What should I wear for physiotherapy sessions?",
      answer: "Wear comfortable, loose-fitting clothing that allows easy movement. For lower body treatments, shorts or loose pants are ideal. For upper body treatments, tank tops or t-shirts work best. Avoid jeans or restrictive clothing."
    },
    {
      question: "Are online consultations effective?",
      answer: "Online consultations are effective for follow-up sessions, exercise guidance, posture correction advice, and initial assessments. However, hands-on treatments like manual therapy require in-person visits. Dr. Rutuja will recommend the best approach for your condition."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openFAQ === index ? 'open' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">{openFAQ === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;