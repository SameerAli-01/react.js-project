import React, { useState, useEffect } from 'react';
import './Home2Event.css';

const CountdownUI = () => {
  // Set your target date here (Past date to show negative numbers like the image)
  const targetDate = new Date("January 1, 2025 00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      const isPast = distance < 0;
      const diff = Math.abs(distance);

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        isPast: isPast
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const prefix = timeLeft.isPast ? "-" : "";

  return (
    <div className="hero-container">
      <div className="overlay"></div>
      
      <div className="content-box">
        <p className="subtitle">Campaign Events</p>
        <h1 className="title">Its Beginning! Aberdeen,<br />Aberdeen City, Uk</h1>
        <p className="timer-range">08:00 AM - 05:00 PM</p>

        <div className="timer-grid">
          <div className="time-card">
            <span className="number">{prefix}{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-card">
            <span className="number">{prefix}{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-card">
            <span className="number">{prefix}{timeLeft.minutes}</span>
            <span className="label">Min</span>
          </div>
          <div className="time-card">
            <span className="number">{prefix}{timeLeft.seconds}</span>
            <span className="label">Sec</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownUI;