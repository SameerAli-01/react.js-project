import react from "react";
// import './slider.css'

import Home3Slide1 from "../../images/slide1.jpg.jpeg";
import Home3Slide2 from "../../images/slide2.jpg.jpeg";
import Home3Slide3 from "../../images/slide3.jpg.jpeg";

function Home3Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

      <div className="carousel-inner">

        <div className="carousel-item active">
          <img src={Home3Slide3} className="d-block w-100" alt="slide1" />
          <div className="carousel-caption">
            <h1>Life Without Liberty<br /><span>As Like Hell.</span></h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever<br /><span>since the scrambled it to make.</span></p>
           <button><span>JOIN THE CAMPAIGN</span></button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Home3Slide2} className="d-block w-100" alt="slide2" />
          <div className="carousel-caption">
            <h1>Life Without Liberty<br /><span>As Like Hell.</span></h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever<br /><span>since the scrambled it to make.</span></p>
            <button><span>JOIN THE CAMPAIGN</span></button>
          </div>
        </div>

        <div className="carousel-item">
          <img src={Home3Slide1} className="d-block w-100" alt="slide3" />
          <div className="carousel-caption">
            <h1>Let's Make America<br/><span>Great Again</span></h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever<br/><span>since the scrambled it to make.</span></p>
            <button><span>JOIN THE CAMPAIGN</span></button>
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

export default Home3Slider;
