import React from "react";
import './Home3Gallery.css';

import Home3Galleryimg from "../../images/Home2aboutimg.jpeg"

const galleryData = [
  { id: 1, img: Home3Galleryimg },
  { id: 2, img: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, img: "https://images.unsplash.com/photo-1621541780385-7641d3c3b472?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, img: "https://plus.unsplash.com/premium_photo-1730446003786-709a564e8aca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, img: "https://images.unsplash.com/photo-1757041952247-c36e755358d5?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, img: "https://plus.unsplash.com/premium_photo-1742428814537-9e88b64f5065?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 7, img: "https://images.unsplash.com/photo-1667964267136-c0256d70b7a3?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 8, img: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 9, img: "https://images.unsplash.com/photo-1710871636973-5ab35b15b57e?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const Home3Gallery = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <p className="text-danger small">Gallery</p>
        <h2 className="fw-bold">Awesome Gallery Photo.</h2>
      </div>

      <div className="row g-4">
        {galleryData.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="gallery-card">
              <img src={item.img} alt="gallery" />

              {/* Hover Overlay */}
              <div className="overlay">
                <div className="overlay-content">
                  <h5>Gallery Image</h5>
                  <p>View Details</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home3Gallery;
