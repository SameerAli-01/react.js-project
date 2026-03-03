import React from "react";
import "./CampaignSection.css";

import DonetImage from '../images/donate.jpg.jpeg'

const CampaignSection = () => {
  return (
    <div className="campaign-wrapper d-flex align-items-center">
      <div className="container">
        <div className="card campaign-card border-0 shadow-lg">
          <div className="row g-0 align-items-center">

            {/* Left Image */}
            <div className="col-md-5 text-center p-4">
              <img
                src={DonetImage}
                alt="campaign"
                className="img-fluid rounded"
              />
            </div>

            {/* Right Content */}
            <div className="col-md-7 p-4">
              <p className="text-danger  small mb-2 letter-space">
                DONATE TODAY!
              </p>

              <h2 className="fw-bold mb-4 text-primary-emphasis">
                You Can Contribute Our Last Campaign
              </h2>

              {/* Progress Bar */}
              <div className="progress mb-2" style={{ height: "6px" }}>
                <div
                  className="progress-bar bg-gradient"
                  role="progressbar"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <div className="d-flex justify-content-between mb-4 small">
                <span>Goal: $85,000</span>
                <span className="percent">Raised: $74,000</span>
              </div>

              <button className="btn text-dark px-4 py-2">
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
