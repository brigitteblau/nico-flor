import React, { useEffect, useState } from 'react';
import { Hero } from './hero/Hero';
import { Countdown } from './countdown/Countdown';
import { OurStory } from './story/OurStory';
import { Details } from './detail/Details';
import { Confirmacion } from './Confirmation/Confirmacion';
import './App.css'; 

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
   
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className={`app-container ${isVisible ? 'app-visible' : ''}`}>
      <Hero />
      <Countdown />
      <Details />
      <OurStory />
      <Confirmacion />
    </div>
  );
}

export default App;
