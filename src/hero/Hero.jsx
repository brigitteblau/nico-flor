import React from 'react';
import { Calendar } from 'lucide-react';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="names-container">
          <h1 className="bride-name">Flor</h1>
          <span className="ampersand">&</span>
          <h1 className="groom-name">Nico</h1>
        </div>
        <p className="wedding-date">20 de Noviembre, 2025</p>
        <p className="wedding-tagline">Nos casamos y queremos que seas parte de nuestra historia</p>
        {/* Podés mover el botón a otra sección */}
      </div>
    </section>
  );
};
