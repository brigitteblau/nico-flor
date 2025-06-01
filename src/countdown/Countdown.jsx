import React, { useState, useEffect } from 'react';
import './count.css';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-20T00:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">
      <h2 className="countdown-title">Días a cumplir nuestro sueño</h2>
      <div className="countdown-row">
        <div className="countdown-group">
          <span className="countdown-number">{timeLeft.days}</span>
          <span className="countdown-label">días</span>
        </div>
        <span className="colon">:</span>
        <div className="countdown-group">
          <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-label">hs</span>
        </div>
        <span className="colon">:</span>
        <div className="countdown-group">
          <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-label">min</span>
        </div>
        <span className="colon">:</span>
        <div className="countdown-group">
          <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-label">seg</span>
        </div>
      </div>
    </section>
  );
};
