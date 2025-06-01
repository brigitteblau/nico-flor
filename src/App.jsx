import React, { useEffect, useState } from 'react';
import { Hero } from './hero/Hero';
import { Countdown } from './countdown/Countdown';
import { OurStory } from './story/OurStory';
import { Details } from './detail/Details';
import { Confirmacion } from './confirmation/Confirmacion';
import './App.css';

function App() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const delays = [0, 500, 1000, 1500, 2000]; // tiempo entre apariciones
    const sectionKeys = ['hero', 'countdown', 'details', 'ourstory', 'confirmacion'];

    sectionKeys.forEach((key, index) => {
      setTimeout(() => {
        setVisibleSections(prev => [...prev, key]);
      }, delays[index]);
    });
  }, []);

  return (
    <div className="app-container">
      <div className={`fade-section ${visibleSections.includes('hero') ? 'visible' : ''}`}>
        <Hero />
      </div>
      <div className={`fade-section ${visibleSections.includes('countdown') ? 'visible' : ''}`}>
        <Countdown />
      </div>
      <div className={`fade-section ${visibleSections.includes('details') ? 'visible' : ''}`}>
        <Details />
      </div>
      <div className={`fade-section ${visibleSections.includes('ourstory') ? 'visible' : ''}`}>
        <OurStory />
      </div>
      <div className={`fade-section ${visibleSections.includes('confirmacion') ? 'visible' : ''}`}>
        <Confirmacion />
      </div>
    </div>
  );
}

export default App;
