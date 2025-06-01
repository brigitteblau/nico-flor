// OurStory.jsx
import React, { useState } from 'react';
import { Heart, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import './story.css';

export const OurStory = () => {
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());

  const photos = [
    { 
      src: '/img/1.jpeg', 
      caption: 'Un paseo por las montañas',
      description: 'Explorando nuevos horizontes juntos'
    },
    { 
      src: '/img/2.jpeg', 
      caption: 'Abrazos que lo dicen todo',
      description: 'En el silencio de un abrazo encontramos nuestro lenguaje más puro'
    },
    { 
      src: '/img/3.jpeg', 
      caption: 'Tomados de la mano hacia el futuro',
      description: 'Cada paso juntos nos acerca más a nuestros sueños compartidos'
    },
    { 
      src: '/img/4.jpeg', 
      caption: 'Refugio en medio del bosque',
      description: 'La naturaleza como testigo de nuestro amor más auténtico'
    },
    { 
      src: '/img/5.jpeg', 
      caption: 'Nuestro rincón favorito',
      description: 'Algunos lugares se vuelven especiales simplemente porque estamos juntos'
    },
    { 
      src: '/img/6.jpeg', 
      caption: 'Complicidad en la playa',
      description: 'El mar como cómplice de nuestras risas y secretos compartidos'
    },
    { 
      src: '/img/7.jpeg', 
      caption: 'Juntos, hasta el atardecer',
      description: 'Cada atardecer contigo es la promesa de un mañana mejor'
    },
  ];

  const openModal = (photo, index) => {
    setModalImage(photo);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const navigateModal = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % photos.length
      : (currentIndex - 1 + photos.length) % photos.length;
    
    setCurrentIndex(newIndex);
    setModalImage(photos[newIndex]);
  };

  const toggleFavorite = (index, e) => {
    e.stopPropagation();
    const newFavorites = new Set(favorites);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
    } else {
      newFavorites.add(index);
    }
    setFavorites(newFavorites);
  };

  const downloadImage = (src, caption) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${caption}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="story-container">
      {/* Header */}
      <div className="story-header">
        <h2 className="story-title">NOSOTROS...</h2>
      </div>

      {/* Gallery Grid */}
      <div className="story-gallery">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => openModal(photo, index)}
          >
            <img src={photo.src} alt={photo.caption} className="gallery-image" />
            <div className="gallery-overlay">
              <button
                className="favorite-btn"
                onClick={(e) => toggleFavorite(index, e)}
              >
                <Heart 
                  size={20}
                  fill={favorites.has(index) ? '#ff4757' : 'none'}
                  color={favorites.has(index) ? '#ff4757' : '#fff'}
                />
              </button>
            </div>
            <div className="gallery-caption">{photo.caption}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Navigation Buttons */}
            <button
              className="nav-btn prev-btn"
              onClick={() => navigateModal('prev')}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button
              className="nav-btn next-btn"
              onClick={() => navigateModal('next')}
            >
              <ChevronRight size={24} />
            </button>

            {/* Close Button */}
            <button className="close-btn" onClick={closeModal}>
              <X size={24} />
            </button>

            {/* Image */}
            <img src={modalImage.src} alt={modalImage.caption} className="modal-image" />
            
            {/* Info */}
            <div className="modal-info">
              <h3 className="modal-title">{modalImage.caption}</h3>
              <p className="modal-description">{modalImage.description}</p>
              
              <div className="modal-actions">
                <button
                  className="action-btn"
                  onClick={(e) => toggleFavorite(currentIndex, e)}
                >
                  <Heart 
                    size={20}
                    fill={favorites.has(currentIndex) ? '#ff4757' : 'none'}
                    color={favorites.has(currentIndex) ? '#ff4757' : '#666'}
                  />
                  {favorites.has(currentIndex) ? 'Me gusta' : 'Like'}
                </button>
                
                <button
                  className="action-btn"
                  onClick={() => downloadImage(modalImage.src, modalImage.caption)}
                >
                  <Download size={20} color="#666" />
                  Descargar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simple counter */}
      {favorites.size > 0 && (
        <div className="favorites-counter">
          ❤️ {favorites.size} favoritos
        </div>
      )}
    </div>
  );
};

