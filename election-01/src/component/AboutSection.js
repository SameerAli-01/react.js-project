import React from "react";
import "./AboutSection.css";

import AboutImg from'../images/about.jpg.jpeg'

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="about-img">
              <img src={AboutImg} alt="about Image"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <span className="about-tag">- About Us -</span>

            <h2 className="about-title mt-3">
              We Can Make Our New <br />
              Histry Together!
            </h2>

            <p className="about-text mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque vulputate dui pretium, libero faucibus sit aliquet cras.
              Tristique semper adipiscing massa placerat dictumst amet, libero vitae.
            </p>

            {/* Bottom Features */}
            <div className="row mt-4">

              <div className="col-sm-6 mb-4">
                <div className="feature-box  text-sm-left">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-bullhorn"></i>
                  </div>
                  <h6>OUR CAMPAIGN</h6>
                  <p>Standard dummy of the text ever the scrambled it to make.</p>
                </div>
              </div>

              <div className="col-sm-6 mb-4">
                <div className="feature-box text-sm-left">
                  <div className="feature-icon mb-3">
                    <i className="fas fa-users"></i>
                  </div>
                  <h6>BECOME A VOLUNTEER</h6>
                  <p>Standard dummy of the text ever the scrambled it to make.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
