import react from "react";
import './slider.css'

import Slide1 from "../images/slide1.jpg.jpeg";
import Slide2 from "../images/slide2.jpg.jpeg";
import Slide3 from "../images/slide3.jpg.jpeg";

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={Slide1} className="d-block w-100" alt="slide1" />
          <div className="carousel-caption">
            <h1>First Slide</h1>
            <p>Welcome to our campaign</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Slide2} className="d-block w-100" alt="slide2" />
          <div className="carousel-caption">
            <h1>Second Slide</h1>
            <p>We stand for change</p>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Slide3} className="d-block w-100" alt="slide3" />
          <div className="carousel-caption">
            <h1>Third Slide</h1>
            <p>Join the movement</p>
          </div>
        </div>

      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default Slider;
