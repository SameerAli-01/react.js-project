import React, { useState, useEffect, useRef } from 'react';
import './Home2Count.css';

const Home2Count = () => {
  const stats = [
    { value: 25, suffix: "K", label: "AREA COVERAGE" },
    { value: 32, suffix: "K", label: "CAMPAIGN DONE" },
    { value: 25, suffix: "%", label: "PROJECT DONE" },
    { value: 8, suffix: "th", label: "ACTIVE VOLUNTEER" },
  ];

  return (
    <section className="home2-count-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <CounterItem 
                endValue={stat.value} 
                suffix={stat.suffix} 
                label={stat.label} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CounterItem = ({ endValue, suffix, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset count jab user screen se bahar jaye
          setIsVisible(false);
          setCount(0); 
        }
      },
      { threshold: 0.2 } // 20% dikhne par start hoga
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1500; // Animation speed (1.5 seconds)
    const increment = endValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, endValue]);

  return (
    <div ref={countRef} className="counter-wrapper">
      <h2 className="counter-number">
        {count}{suffix}
      </h2>
      <p className="counter-label">{label}</p>
    </div>
  );
};

export default Home2Count;