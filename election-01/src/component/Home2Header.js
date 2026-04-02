import react from "react";

import '../component/Home2Header.css'

import { Link } from "react-router-dom";

import Home2Logo from '../images/AboutLogo.png';



function Home2Header(){
    return(
        <>

        <div className="container-fluid d-flex justify-content-between align-items-center">

            {/* Logo */}
         <div className="logo-home text-danger">
            <img  src={Home2Logo} alt="logo"/>
         </div>


         <div className="main-nav-home d-flex gap-4 align-items-center">

            <ul className="drop-down">
                <li><Link className="nav-link-home" to="/">Home</Link></li>
                <ul className="menu">
                    <li><Link to="/">HOME style 1</Link></li>
                    <li><Link to="/">HOME style 2</Link></li>
                    <li><Link to="/">HOME style 3</Link></li>
                    <li><Link to="/">HOME style 4</Link></li>
                </ul>
            </ul>

          <Link className="nav-link-home" to="/About">About Us</Link>

            <ul className="drop-down">
                <li><Link className="nav-link-home" to="/Events">Events</Link></li>
                <ul className="menu">
                    <li><Link to="/">Events</Link></li>
                    <li><Link to="/">Events Single</Link></li>
                </ul>
            </ul>

            <ul className="drop-down">
                <li><Link className="nav-link-home" to="/Pages">Pages</Link></li>
                <ul className="menu">
                    <li><Link to="">Gellery</Link></li>
                    <li><Link to="">Volunteer</Link></li>
                    <li><Link to="">Testimonial</Link></li>
                    <li><Link to="">Team</Link></li>
                    <li><Link to="">Events Single</Link></li>
                </ul>
            </ul>

            <ul className="drop-down">
                <li><Link className="nav-link-home" to="/Blog">Blog</Link></li>
                <ul className="menu">
                    <li><Link to="">Blog right sidebar</Link></li>
                    <li><Link to="">Blog right sidebar</Link></li>
                    <li><Link to="">Blog fullwidth</Link></li>
                    <li><Link to="">Blog details</Link></li>
                </ul>
            </ul>

             <Link className="nav-link-home" to="/Contact">Contact</Link>

         </div>

         <div>
           <button className="home2-btn">Make Donation</button>
         </div>


        </div>
        
        </>
    )
}

export default Home2Header;