import { Link } from 'react-router-dom';
import { useState } from 'react';
import MatiaoLogo from '../assets/MatiaoLogo.jpg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
        const navLinks = [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutus" },
            { name: "Services", path: "/services" },
            { name: "News & Announcements", path: "/news" },
            { name: "Contact Us", path: "/contact" }
        ];
    
    return (
        <header className="main-header sticky-header">
            <div className="header-logo-container">
                <img src={MatiaoLogo} alt="Barangay Logo" className="barangay-logo" />
                <span className="barangay-name">Barangay Matiao Community</span>
            </div>
            <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`}>
                <ul className="nav-list" onClick={() => setIsMenuOpen(false)}>
                        {navLinks.map(link => (
                            <li key={link.name}><Link to={link.path} className="nav-link">{link.name}</Link></li>
                    ))}
                    <li><Link to="/login" className="nav-portal-btn">Citizen Login</Link></li>
                </ul>
            </nav>
            <button className="menu-toggle" onClick={handleMenuToggle}>☰</button>
        </header>
    );
};

export default Header;