import React from 'react';
import './Services.css';
import ServicesImg from '../images/servicescardsection1.img.jpeg'
import ServicesImg2 from '../images/servicescardsection2.img.jpeg'
import ServicesImg3 from '../images/servicescardsection3.img.jpeg'
import ServicesImg4 from '../images/servicescardsection4.img.jpeg'
import ServicesImg5 from '../images/servicescardsection5.img.jpeg'
import ServicesImg6 from '../images/servicescardsection6.img.jpeg'
import ServicesImg7 from '../images/servicescardsection7.img.jpeg'
import ServicesImg8 from '../images/servicescardsection8.img.jpeg'

const Services = () => {
  const cards = [
    { id: 1, title: 'MEDICAL SYSTEM', text: 'Lorem Ipsum has been the industry\'s standard dummy text.', img: ServicesImg },
    { id: 2, title: 'RESIDENTIAL AREA', text: 'Description for residential area goes here.', img: ServicesImg2 },
    { id: 3, title: 'TRAFFIC JAM', text: 'Description for traffic jam goes here.', img: ServicesImg3 },
    { id: 4, title: 'ECONOMIC ZONE', text: 'Description for economic zone goes here.', img: ServicesImg4 },
    // Add 4 more for the second row
    { id: 5, title: 'FOOD & DINING', text: 'Delicious meals and dining experiences.', img: ServicesImg5 },
    { id: 6, title: 'TRAVEL', text: 'Explore the world with our travel guides.', img: ServicesImg6 },
    { id: 7, title: 'CULTURE', text: 'Discover local heritage and traditions.', img: ServicesImg7 },
    { id: 8, title: 'FAMILY', text: 'Creating memories with your loved ones.', img: ServicesImg8 },
  ];

  return (
    <div className="container my-5">
        <div className='contant-service text-center'>
            <div>
                <p>- Our Mission & Vission -</p>
                <h4>We Can Make Solution Everything <br /> To Our Demand.</h4>
            </div>
        </div>

      <div className="row g-4">
        {cards.map((card) => (
          <div key={card.id} className="col-lg-3 col-md-6">
            <div className="custom-card">
              <img src={card.img} alt={card.title} className="card-bg-img" />
              
              {/* Top Slide Overlay (Color & Text) */}
              <div className="overlay-top">
                <div className="content">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </div>

              {/* Left Slide Button */}
              <div className="overlay-button">
                <button className="btn-label">{card.title}</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;