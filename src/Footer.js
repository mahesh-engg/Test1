import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <footer className={`footer ${isHidden ? 'hidden' : ''}`}>
      <div className="footer-content">
        <p>&copy; 2025 AAYUSHYAMAN Physiotherapy Clinic. All rights reserved.</p>
        <div className="footer-right">
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#testimonials" onClick={() => window.setCurrentPage && window.setCurrentPage('testimonials')}>Testimonials</a>
            <a href="#blog" onClick={() => window.setCurrentPage && window.setCurrentPage('blog')}>Health Tips</a>
            <a href="#faq" onClick={() => window.setCurrentPage && window.setCurrentPage('faq')}>FAQ</a>
          </div>
          <div className="social-icons">
            <a href="https://wa.me/918657379434" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp"><img src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="WhatsApp" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram"><img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Instagram" /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook"><img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="Facebook" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter"><img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="Twitter" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111710.png" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;