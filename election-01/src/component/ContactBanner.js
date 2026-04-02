import React from "react";
import "./ContactBanner.css";
// import banner from "../images/banner.jpg"; // apni image ka path
import banner from "../images/contactusimageclick1.jpeg"

function ContactBanner() {
  return (
    <>
    <div
      className="contact-banner d-flex align-items-center justify-content-center text-center text-white"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div>
        <h1 className="fw-bold">Contact Us</h1>
        <p>Home • Contact</p>
      </div>
    </div>

     <div className="contact-section py-5">
      <div className="container">
        <div className="row text-center">

          {/* Address */}
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <div className="icon-box">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <h4>Address</h4>
              <p>
                7 Green Lake Street Crawfordsville,
                <br />
                IN 47933
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <div className="icon-box">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <h4>Email Us</h4>
              <p>
                Election@gmail.com
                <br />
                helloyou@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4 mb-4">
            <div className="contact-card">
              <div className="icon-box">
               <i class="fa-solid fa-phone"></i>
              </div>
              <h4>Call Now</h4>
              <p>
                +1 800 123 456 789
                <br />
                +1 800 123 654 987
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>


    <div className="contact-section py-5">
      <div className="container text-center">

        <h2 className="fw-bold text-dark">Have Any Question?</h2>

        <p className="text-muted mb-5">
          It is a long established fact that a reader will be distracted
          <br />
          content of a page when looking.
        </p>

        <div className="contact-box p-5">

          <form>
            <div className="row g-4">

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your phone"
                />
              </div>

              <div className="col-md-6">
                <select className="form-select">
                  <option>River Development</option>
                  <option>City Development</option>
                  <option>Road Development</option>
                </select>
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="col-12 text-center mt-4">
                <button className="btn submit-btn">
                  Submit Now
                </button>
              </div>

            </div>
          </form>

        </div>

      </div>
    </div>

         <div className="map-section">

        <iframe src="https://www.google.com/maps?q=New+York&output=embed"
          width="100%"
          height="500"
          style={{ border: 0 }} 
          loading="lazy"
          title="map" ></iframe>

      </div>

    </>
  );
}

export default ContactBanner;
