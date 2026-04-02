import React from "react";
import "./AboutCorruption.css";

function AboutCorruption() {
  return (
    <div className="about-container my-5">

      <div className="about-corruption">

        <div className="about-inner d-flex justify-content-between align-items-center">

          {/* Left Content */}
          <div className="about-text-page">
            <p className="small-text">WE ARE HERE</p>

            <h2>
              Let’s fight with all injustice and <br />
              corruption.
            </h2>
          </div>

          {/* Button */}
          <button className="btn btn-danger call-btn">
            CALL US
          </button>

        </div>

      </div>
    </div>
  );
}

export default AboutCorruption;
