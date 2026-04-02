import react from "react"

import '../component/AboutBanner.css'

import AboutHeader from "../component/AboutHeader.js";

import banner from "../images/contactusimageclick1.jpeg"

import CampaignCards from "../component/CampaignCards.js";
import AboutSection from "../component/AboutSection.js";
import CampaignSection from "../component/CampaignSection.js";
import  AboutCorruption from "../component/AboutCorruption.js"

import StaffSection from "./StaffSection.js";

// import home2silderimg1 from "../images/Home2Sliderimg1.png"
// import home2silderimg2 from "../images/HomeSliderimg2.jpeg"


function AboutBanner(){
    return(
        <>

        <AboutHeader />

          <div className="about-banner d-flex align-items-center justify-content-center text-center text-white"
              style={{ backgroundImage: `url(${banner})` }} > <div>

                <h1 className="fw-bold">About Us</h1>
                <p>Home • Contact</p>
              </div>
            </div>

        <CampaignCards />

        <AboutSection />

        <CampaignSection />
        <AboutCorruption />
        <StaffSection />
        
        </>
    )
}

export default AboutBanner;