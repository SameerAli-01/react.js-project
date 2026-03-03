import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/home.js'


// import Header from './component/header.js';
// import Slider from './component/slider.js';
import CampaignCards from './component/CampaignCards.js'
import About from './pages/about.js';
import CampaignSection from './component/CampaignSection.js'


import BlogSection from './component/BlogSection.js'
import FooterPage from './component/footer.js'
// import BlogCard from './component/BlogCard.js'

function App() {
    return(
        <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
 
        <CampaignCards />
        <About />
        <CampaignSection />


        <BlogSection />
        <FooterPage />

        {/* <BlogCard /> */}
        
        
        </>
    )
}

export default App;