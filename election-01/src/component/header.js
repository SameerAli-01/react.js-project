import { Link } from "react-router-dom";
import Logo from "../images/logo-img.png.svg";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        {/* Logo */}
        <div>
          <img src={Logo} alt="logo" height="50" />
        </div>

        {/* Menu */}
        <div className="d-flex gap-4 align-items-center">

          <Link className="nav-link text-white" to="/">Home</Link>
          <Link className="nav-link text-white" to="/About">About</Link>
          <Link className="nav-link text-white" to="/Events">Events</Link>
          <Link className="nav-link text-white" to="/Blog">Blog</Link>
          <Link className="nav-link text-white" to="/Contact">Contact</Link>

        </div>

        {/* Button */}
        <div>
          <button className="btn btn-danger">Secondary</button>
        </div>

      </div>
    </nav>
  );
}

export default Header;
