

import React from 'react';
import './datail.css';
import { MapPin } from 'lucide-react';

export const Details = () => {
  return (
    <section className="details-section">
      <div className="detail-block">
        {/* Ícono sinagoga */}
        <div className="detail-icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 21V9l9-6 9 6v12" />
            <path d="M9 21V12h6v9" />
            <path d="M3 13h18" />
          </svg>
        </div>
        <h3 className="detail-title">CEREMONIA</h3>
        <p className="detail-text">
          23 de noviembre<br />
          19:00 hs.<br />
          Parroquia Nuestra Señora de las Victorias<br />
          Recibí debajo las indicaciones para llegar.
        </p>
        <a 
          className="detail-button" 
          href="https://www.google.com/maps/place/Parroquia+Nuestra+Señora+de+las+Victorias/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <MapPin size={18} style={{ marginRight: '0.5rem' }} />
          LLEGAR A LA CEREMONIA
        </a>
      </div>

      <div className="detail-block">
        {/* Ícono copas */}
        <div className="detail-icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#1f1f1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 22c0-2-1-4-3-4h10c-2 0-3 2-3 4" />
            <path d="M8 14s1-1 2-1 2 1 2 1" />
            <path d="M16 14s-1-1-2-1-2 1-2 1" />
            <path d="M7 7l1 6h2l1-6" />
            <path d="M17 7l-1 6h-2l-1-6" />
            <path d="M9.5 2 10 6H7l-.5-4z" />
            <path d="M14.5 2 14 6h3l.5-4z" />
            <path d="M12 9v2" />
            <path d="m12 13 .5 4" />
            <path d="m12 17-.5 4" />
          </svg>
        </div>
        <h3 className="detail-title">FIESTA</h3>
        <p className="detail-text">
          Luego de la ceremonia<br />
          Palacio Sans Souci<br />
          Victoria, Buenos Aires.<br />
          ¡Te esperamos!
        </p>
        <a 
          className="detail-button"
          href="https://www.google.com/maps/place/Palacio+Sans+Souci/"
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
