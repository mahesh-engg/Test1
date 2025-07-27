import React, { useState } from 'react';
import './Gallery.css';
import './Gallery.mobile.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
      alt: 'Modern Physiotherapy Clinic Interior',
      category: 'clinic'
    },
    {
       id: 2,
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      alt: 'Clinic Reception Area',
      category: 'clinic'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
      alt: 'Physiotherapy Treatment Session',
      category: 'treatment'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop',
      alt: 'Rehabilitation Equipment',
      category: 'equipment'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      alt: 'Clinic Reception Area',
      category: 'clinic'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop',
      alt: 'Physical Therapy Session',
      category: 'treatment'
    }
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-content">
        <h2>Our Clinic Gallery</h2>
        <p className="gallery-subtitle">Take a look at our modern facilities and treatment environment</p>
        
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
              <img src={image.src} alt={image.alt} />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
                <p>{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>×</button>
              <img src={selectedImage.src} alt={selectedImage.alt} />
              <p className="modal-caption">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;