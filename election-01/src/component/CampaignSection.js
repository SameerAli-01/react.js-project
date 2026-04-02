import React from "react";
import "./CampaignSection.css";
import DonetImage from "../images/donate.jpg.jpeg";

const CampaignSection = () => {
  return (
    <div className="campaign-wrapper">

      {/* Overlay */}
      <div className="overlay"></div>

      <div className="container-s">
        <div className="card campaign-card border-0 shadow-lg">
          <div className="row g-0 align-items-center">

            {/* Left Image */}
            <div className="col-lg-5 col-md-6 text-center p-4">
              <img
                src={DonetImage}
                alt="campaign"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Content */}
            <div className="col-lg-7 col-md-6 p-4 text-content">
              <p className="text-danger small mb-2 letter-space">
                DONATE TODAY!
              </p>

              <h2 className="fw-bold mb-4 text-primary-emphasis">
                You Can Contribute Our Last Campaign
              </h2>

              {/* Progress Bar */}
              <div className="progress mb-2 progress-custom">
                <div
                  className="progress-bar progress-bar-custom"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <div className="d-flex justify-content-between mb-4 small info-row">
                <span>Goal: $85,000</span>
                <span>Raised: $74,000</span>
              </div>

              <button className="btn-c px-4 py-2">
                DONATE NOW
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignSection;
