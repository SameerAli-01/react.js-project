import React from "react";
import "./Home2About.css";

import Home2AboutImg from'../images/Home2aboutimg.jpeg'

const AboutSection = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="home2about-img">
              <img src={Home2AboutImg} alt="about Image"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-6">
            <span className="home2about-tag">About Politician</span>

            <h2 className="home2about-title mt-3">
             We raise voice for people rights <span>&</span> provide rights.
            </h2>

            <p className="home2about-text mt-4">
              Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu
              lacus.Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at,
              neque. Vivamus eget nibh. Etiam cursus leo vel metus. Nulla facilisi. 
              Aenean nec eros. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut
              pharetra augue nec augue.
            </p>

            <div>
           <button className="home2about-btn">Make Donation</button>
         </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
