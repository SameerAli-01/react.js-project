import { Link } from "react-router-dom";
import '../../component/homepage3/Home3Header.css'

import Home3Logo from "../../images/AboutLogo.png";

function Home3Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="home3container-fluid d-flex justify-content-between align-items-center bg-white">

        {/* Logo */}
        <div className="logo-home3">
          <img src={Home3Logo} alt="logo"/>
        </div>

        {/* Menu */}
        <div className="main-nav d-flex gap-4 align-items-center">

            <ul className="drop-down">
                <li><Link className="home3nav-links" to="/">Home</Link></li>
                <ul className="home3-menus">
                    <li><Link to="/">HOME style 1</Link></li>
                    <li><Link to="/HomePage2">HOME style 2</Link></li>
                    <li><Link to="/HomePage3">HOME style 3</Link></li>
                    <li><Link to="/HomePage4">HOME style 4</Link></li>
                </ul>
            </ul>

          <Link className="home3nav-links" to="/About">About Us</Link>

            <ul className="drop-down">
                <li><Link className="home3nav-links" to="">Events</Link></li>
                <ul className="home3-menus">
                    <li><Link to="/">Events</Link></li>
                    <li><Link to="/">Events Single</Link></li>
                </ul>
            </ul>

            <ul className="drop-down">
                <li><Link className="home3nav-links" to="">Pages</Link></li>
                <ul className="home3-menus">
                    <li><Link to="">Gellery</Link></li>
                    <li><Link to="">Volunteer</Link></li>
                    <li><Link to="">Testimonial</Link></li>
                    <li><Link to="">Team</Link></li>
                    <li><Link to="">Events Single</Link></li>
                </ul>
            </ul>

            <ul className="drop-down">
                <li><Link className="home3nav-links" to="">Blog</Link></li>
                <ul className="home3-menus">
                    <li><Link to="">Blog right sidebar</Link></li>
                    <li><Link to="">Blog right sidebar</Link></li>
                    <li><Link to="">Blog fullwidth</Link></li>
                    <li><Link to="">Blog details</Link></li>
                </ul>
            </ul>

             <Link className="home3nav-links" to="/Contact">Contact</Link>

        </div>

        {/* Button */}
          <button className="home3btn-nav">Make Donation</button>

      </div>
      
    </nav>
  );
}

export default Home3Header;
