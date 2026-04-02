import React from "react";
import "./slider.css";

import Slide1 from "../images/slide1.jpg.jpeg";
import Slide2 from "../images/slide2.jpg.jpeg";
import Slide3 from "../images/slide3.jpg.jpeg";

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="3000">
      <div className="carousel-inner">

        <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={Slide3} alt="slide1" />
          <div className="carousel-caption custom-caption">
            <h1>
              Your Voice Matters.<br />
              Join Our Vision.
            </h1>
            <p>
              Helping people to achieve their goals through our<br />
              campaign and leadership.
            </p>
            <button><span>JOIN THE CAMPAIGN</span></button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={Slide2} alt="slide2" />
          <div className="carousel-caption custom-caption">
            <h1>
              Life Without Liberty.<br />
              As Like Hell.
            </h1>
            <p>
              Lorem Ipsum has been the industry's standard<br />
              dummy text ever since.
            </p>
            <button><span>JOIN THE CAMPAIGN</span></button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={Slide1} alt="slide3" />
          <div className="carousel-caption custom-caption">
            <h1>
              Let's Make Future<br />
              Better Together.
            </h1>
            <p>
              Join us and make a strong impact in society<br />
              with leadership and unity.
            </p>
            <button><span>JOIN THE CAMPAIGN</span></button>
          </div>
        </div>

      </div>

      {/* Arrows */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Slider;
