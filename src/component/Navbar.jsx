import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import fraglogo from ".././assets/img/logo.png";

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function Navbar() {
  const navRef = useRef();
  const [activeSection, setActiveSection] = useState("home");

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  const handleMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    showNavbar();
  };

  return (
    <nav className="nav">
      <Link to="/" className="navbar-logo">
        <img src={fraglogo} className="logo" alt="FragInfinity logo" />
      </Link>
      <ul ref={navRef}>
        <li className={activeSection === "home" ? "active" : ""}>
          <Link to="/" onClick={() => handleMenuClick("home")}>
            Home
          </Link>
        </li>
        <li className={activeSection === "streamSection" ? "active" : ""}>
          <Link to="/" onClick={() => handleMenuClick("streamSection")}>
            Streams
          </Link>
        </li>
        <li className={activeSection === "teamSection" ? "active" : ""}>
          <Link to="/" onClick={() => handleMenuClick("teamSection")}>
            Team
          </Link>
        </li>
        <li className={activeSection === "connectSection" ? "active" : ""}>
          <Link to="/" onClick={() => handleMenuClick("connectSection")}>
            Let&#39;s Connect
          </Link>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <Link
            to="/contact"
            onClick={() => {
              setActiveSection("contact");
              showNavbar();
            }}
          >
            Let&#39;s Collab
          </Link>
        </li>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i className="fa fa-times"></i>
        </button>
      </ul>
      <button className="nav-btn" onClick={showNavbar}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
}

export default Navbar;
