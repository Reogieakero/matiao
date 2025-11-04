import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Simulated login state (replace with real auth later)
  const [isLoggedIn, setIsLoggedIn] = useState(location.pathname === "/home");

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News & Announcements", path: "/news" },
    { name: "Contact Us", path: "/contact" },
  ];

  const onLandingPage = location.pathname === "/";

  return (
    <header className="main-header sticky-header">
      {/* Left: Logo + Name */}
      <div className="header-logo-container">
        <div className="barangay-logo-placeholder"></div>
        <span className="barangay-name">Barangay Matiao Community</span>
      </div>

      {/* If NOT landing page — show full nav */}
      {!onLandingPage ? (
        <>
          <nav className={`header-nav ${isMenuOpen ? "header-nav--open" : ""}`}>
            <ul className="nav-list" onClick={() => setIsMenuOpen(false)}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  {/* LOGIC: Apply 'active-link' class if current path matches link path */}
                  <Link
                    to={link.path}
                    className={`nav-link ${
                      location.pathname === link.path ? "active-link" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {isLoggedIn ? (
                <>
                  <li>
                    {/* Profile link */}
                    <Link to="/profile" className="nav-link profile-link">
                      <svg
                        className="profile-avatar-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.93 0 3.5 1.57 3.5 3.5S13.93 12 12 12 8.5 10.43 8.5 8.5 10.07 5 12 5zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="nav-portal-btn logout-btn"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="nav-portal-btn">
                    Citizen Login
                  </Link>
                </li>
              )}
            </ul>
          </nav>

          {/* Mobile Toggle */}
          <button className="menu-toggle" onClick={handleMenuToggle}>
            ☰
          </button>
        </>
      ) : (
        // If on landing page, show only the Citizen Login button
        <div className="landing-login-container">
          <Link to="/login" className="nav-portal-btn">
            Citizen Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;