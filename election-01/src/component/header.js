import { Link } from "react-router-dom";
import Logo from "../images/logo-img.png.svg";
import './header.css'

// import Contact from '../pages/contact.js'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <div className="logo-head">
          <img src={Logo} alt="logo"/>
        </div>

        {/* Menu */}
        <div className="main-nav d-flex gap-4 align-items-center">

            <ul className="drop-down">
                <li><Link className="nav-links" to="/">Home</Link></li>
                <ul className="menus">
                    <li><Link to="/">HOME style 1</Link></li>
                    <li><Link to="/HomePage2">HOME style 2</Link></li>
                    <li><Link to="/HomePage3">HOME style 3</Link></li>
                    <li><Link to="/HomePage4">HOME style 4</Link></li>
                </ul>
            </ul>

          <Link className="nav-links" to="/About">About Us</Link>

            <ul className="drop-down">
                <li><Link className="nav-links" to="">Events</Link></li>
                <ul className="menus">
                    <li><Link to="/">Events</Link></li>
                    <li><Link to="/">Events Single</Link></li>
                </ul>
            </ul>

            <ul className="drop-down">
                <li><Link className="nav-links" to="">Pages</Link></li>
                <ul className="menus">
                    <li><Link to="">Gellery</Link></li>
                    <li><Link to="">Volunteer</Link></li>
                    <li><Link to="">Testimonial</Link></li>
                    <li><Link to="">Team</Link></li>
                    <li><Link to="">Events Single</Link></li>
                </ul>
            </ul>

            <ul className="drop-down">
                <li><Link className="nav-links" to="">Blog</Link></li>
                <ul className="menus">
                    <li><Link to="">Blog right sidebar</Link></li>
                    <li><Link to="">Blog right sidebar</Link></li>
                    <li><Link to="">Blog fullwidth</Link></li>
                    <li><Link to="">Blog details</Link></li>
                </ul>
            </ul>

             <Link className="nav-links" to="/Contact">Contact</Link>

        </div>

        {/* Button */}
        <div>
          <button className="btn-nav">Make Donation</button>
        </div>

      </div>
      
    </nav>
  );
}

export default Header;
