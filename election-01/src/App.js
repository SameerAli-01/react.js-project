import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home.js'
import About from './component/AboutBanner.js'
import Contact from './pages/contact.js'

import HomePage2 from './component/HomePage2.js';
import HomePage3 from './component/homepage3/HomePage3.js';
import HomePage4 from './component/homepage4/HomePage4.js';

import ScrollToTop from './component/ScrollToTop.js';
import FooterPage from './component/footer.js'

function App() {
    return(
        <>

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

         {/* Home page 2  */}
         <Route path="/HomePage2" element={<HomePage2 />} />

          {/* Home page 3  */}
         <Route path="/HomePage3" element={<HomePage3 />} />

          {/* Home page 4  */}
         <Route path="/HomePage4" element={<HomePage4 />} />

      </Routes>

      <ScrollToTop />
      
    </BrowserRouter>

   
    <FooterPage />

        
        
        </>
    )
}

export default App;