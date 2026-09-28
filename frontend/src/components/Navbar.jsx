import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="src/images/logo.jpg" alt="logo" width={50}/>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;