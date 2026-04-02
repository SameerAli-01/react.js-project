import React, { useState } from "react";
import "../component/Home2Slider.css";

import Home2Sliderimg1 from "../images/Home2Sliderimg1.png"

import Home2Sliderimg2 from "../images/HomeSliderimg2.jpeg"

const slides = [
  {
    id: 1,
    title: "World Needs A Leader",
    subtitle: "WE ARE AWESOME!",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    img: Home2Sliderimg1
  },
  {
    id: 2,
    title: "World Needs A Leader",
    subtitle: "WE ARE AWESOME!",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    img: Home2Sliderimg2
  }
];

const Home2Slider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[current];

  return (
    <div className="home2-slider">

      {/* 👇 KEY HERE = animation reset */}
      <div className="slide active" key={current}>
        <div className="overlay"></div>

        <div className="container h-100">
          <div className="row align-items-center h-100">

            {/* TEXT */}
            <div className="col-md-6 text-white content text-animate">
              <p className="subtitle">{slide.subtitle}</p>
              <h1>{slide.title}</h1>
              <p className="desc">{slide.desc}</p>

              <button className="btn-home2">
                Explore More
              </button>
            </div>

            {/* IMAGE */}
            <div className="col-md-6 text-center">
              <div className="circle-img img-animate">
                <img src={slide.img} alt="slide" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ARROWS */}
      <button className="nav left" onClick={prevSlide}>
        &#8592;
      </button>
      <button className="nav right" onClick={nextSlide}>
        &#8594;
      </button>
    </div>
  );
};

export default Home2Slider;
