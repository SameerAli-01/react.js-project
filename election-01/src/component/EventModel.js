import React from 'react';
import './EventModel.css';
import { MapPin, Calendar, Clock } from 'lucide-react';

import  EventModelImg1 from '../images/EventModelimg1.jpeg'
import  EventModelImg2 from '../images/EventModelimg2.jpeg'
import  EventModelImg3 from '../images/EventModelimg3.jpeg'

const EventModel = () => {
  const events = [
    {
      id: 1,
      image: EventModelImg1,
      location: "Cirantam's, Shiloh, Hawaii 8062, USA.",
      title: "Letraset Sheets Passage And Recently.",
      date: "July 1, 2023",
      time: "15:00 - 19:00",
      type: "blue"
    },
    {
      id: 2,
      image: EventModelImg2,
      location: "Cirantam's, Shiloh, Hawaii 8062, USA.",
      title: "The Best Strategically Build Your Business Earning",
      date: "July 2, 2023",
      time: "10:00 - 15:00",
      type: "red"
    },
    {
      id: 3,
      image: EventModelImg3,
      location: "Cirantam's, Shiloh, Hawaii 8062, USA.",
      title: "Political Commitment For Your Deportation Issue",
      date: "July 5, 2023",
      time: "13:00 - 16:00",
      type: "blue"
    }
  ];

  return (
    <div className="event-section">
      <div className="event-container">
        
        {/* Left Side Header */}
        <div className="event-header">
          <div className="event-subtitle">
            <span className="line"></span>
            OUR EVENT'S
            <span className="line"></span>
          </div>
          <h2 className="event-main-title">You Can Attend Our Upcoming Events</h2>
          <div className="title-underline"></div>

          <h1 className='gol'></h1>
        </div>

        {/* Right Side Grid */}
        <div className="event-grid">
          {events.map((event) => (
            <div key={event.id} className={`event-card ${event.type}`}>
              <div className="image-wrapper">
                <img src={event.image} alt="event" />
              </div>
              
              <div className="card-content">
                <div className="location">
                  <MapPin size={14} className="icon-blue" />
                  <span>{event.location}</span>
                </div>
                
                <h3 className="card-title">{event.title}</h3>
                
                <div className="card-footer">
                  <div className="footer-item">
                    <Calendar size={13} className="icon-red" />
                    {event.date}
                  </div>
                  <div className="footer-item">
                    <Clock size={13} className="icon-red" />
                    {event.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default EventModel;