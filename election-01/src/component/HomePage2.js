

import Home2Header from "../component/Home2Header.js";

// import Home2Slider from "../component/Home2Slider.js";
import Home2Slider from "../component/Home2Slider.js";

import Home2About from "../component/Home2About.js";
import Home2cardSection from "../component/Home2cardSection.js"
import EventModel from "../component/EventModel.js"
import CountdownUI from "../component/Home2Event.js"
import Services from "../component/Services.js";
import Home2Count from "../component/Home2Count.js";
import BlogSection from "../component/BlogSection.js";

function HomePage2(){
    return(
        <>

        <Home2Header />
        <Home2Slider />

        <Home2About />
        <Home2cardSection />
        <EventModel />
        <CountdownUI />
        <Services />
        <Home2Count />
        <BlogSection />
        
         
        </>
    )
}

export default HomePage2;