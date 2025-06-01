import React from 'react';
import { Heart } from 'lucide-react';
import './story.css';

 export const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-container">
        <h2 className="story-title">Nuestra Historia</h2>
        <div className="story-content">
          <div className="story-text">
            <p>
              Todo comenzó hace 5 años cuando nos conocimos en la universidad. 
              Lo que empezó como una amistad se convirtió en algo especial que 
              cambió nuestras vidas para siempre.
            </p>
            <p>
              Después de años de risas, aventuras y sueños compartidos, 
              decidimos dar el siguiente paso y unir nuestras vidas en matrimonio.
            </p>
            <p>
              Queremos celebrar este momento tan especial con las personas 
              que más queremos. ¡Esperamos verte en nuestro gran día!
            </p>
          </div>
          <div className="story-image">
            <div className="couple-photo">
              <Heart size={60} className="photo-placeholder" />
              <p className="couple-names">Nico & Flor</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

