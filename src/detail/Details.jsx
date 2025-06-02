

import React from 'react';
import './datail.css';
import { MapPin } from 'lucide-react';

export const Details = () => {
  return (
    <section className="details-section">
      <div className="detail-block">
       
        <img src="/count/icono-ceremonia.svg" alt="" srcset="" />
        <h3 className="detail-title">CEREMONIA</h3>
        <p className="detail-text">
          20 de noviembre<br />
          19:00 hs.<br />
       <b>Asociacion Israelita Sefaradi Or Mizrah</b>  
        </p>
        <a 
          className="detail-button" 
          href="https://maps.app.goo.gl/2FMeegnNP5ZSQfxBA" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MapPin size={18} style={{ marginRight: '0.5rem' }} />
          LLEGAR A LA CEREMONIA
        </a>
      </div>

      <div className="detail-block">
             <img src="/count/icono-fiesta.svg" alt="" srcset="" />

        <h3 className="detail-title">FIESTA</h3>
        <p className="detail-text">
          Luego de la ceremonia<br />
       21:30pm<br />
         <b> Rut Haus</b>
        </p>
        <a 
          className="detail-button"
          href="https://maps.app.goo.gl/MJWuRaMkJVyxbX6t6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={18} style={{ marginRight: '0.5rem' }} />
          LLEGAR A LA FIESTA
        </a>
      </div>
    </section>
  );
};
