import React from "react";
import "../App.css";

import TopHeader from "../component/TopHeader.js";
import Header from "../component/header.js";
import Slider from "../component/slider.js";

import CampaignCards from "../component/CampaignCards.js";
import AboutSection from "../component/AboutSection.js";
import CampaignSection from "../component/CampaignSection.js";
import Services from "../component/Services.js";
import EventModel from "../component/EventModel.js"
import BlogSection from "../component/BlogSection.js";




function Home() {
  return (
    <>

    <TopHeader />
    <div className="hero-section">
      <Header />
      <Slider />
    </div>
    <CampaignCards />
    <AboutSection />
    <CampaignSection />
    <Services />
    <EventModel />
    <BlogSection />

    </>

  );
}

export default Home;
