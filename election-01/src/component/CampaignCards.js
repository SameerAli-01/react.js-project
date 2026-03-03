import React, { useState, useEffect, useRef } from "react";
import "./CampaignCards.css";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHandsHelping,
  FaDonate,
  FaUsers,
} from "react-icons/fa";

const originalCards = [
  { title: "OUR CAMPAIGN", icon: <FaUsers /> },
  { title: "BECOME A VOLUNTEER", icon: <FaHandsHelping /> },
  { title: "MAKE DONATION", icon: <FaDonate /> },
  { title: "OUR CAMPAIGN 2", icon: <FaUsers /> },
  { title: "VOLUNTEER 2", icon: <FaHandsHelping /> },
  { title: "DONATION 2", icon: <FaDonate /> },
];

const CampaignCards = () => {
  const [index, setIndex] = useState(3);
  const [transition, setTransition] = useState(true);
  const trackRef = useRef();

  const cards = [
    ...originalCards.slice(-3),
    ...originalCards,
    ...originalCards.slice(0, 3),
  ];

  const nextSlide = () => {
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index >= originalCards.length + 3) {
        setTransition(false);
        setIndex(3);
      }

      if (index <= 2) {
        setTransition(false);
        setIndex(originalCards.length + 2);
      }
    };

    const track = trackRef.current;
    track.addEventListener("transitionend", handleTransitionEnd);

    return () =>
      track.removeEventListener("transitionend", handleTransitionEnd);
  }, [index]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <div className="container my-5">
      <div className="slider-wrapper">

        <div
          ref={trackRef}
          className="slider-track"
          style={{
            transform: `translateX(-${index * 33.33}%)`,
            transition: transition ? "transform 0.5s ease-in-out" : "none",
          }}
        >
          {cards.map((card, i) => {
            const isCenter = i === index + 1;

            return (
              <div className="slider-card" key={i}>
                <div className="card text-center p-4">

                  <div className={`circle-icon ${isCenter ? "red" : "blue"}`}>
                    {card.icon}
                  </div>

                  <h5>{card.title}</h5>

                  <p>
                    Lorem Ipsum is simply dummy text the industry's standard
                    dummy text ever scrambled type specimen
                  </p>

                  <button className="btn btn-outline-danger">
                    DETAILS
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        <button className="nav-btn left" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <button className="nav-btn right" onClick={nextSlide}>
          <FaArrowRight />
        </button>

      </div>
    </div>
  );
};

export default CampaignCards;
