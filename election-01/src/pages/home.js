import React from "react";
import Header from "../component/header";
import Slider from "../component/slider";
import "../App.css";

function Home() {
  return (
    <div className="hero-section">
      <Header />
      <Slider />
    </div>
  );
}

export default Home;
