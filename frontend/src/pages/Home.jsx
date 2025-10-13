import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Home.css';
import MatiaoLogo from '../assests/Matiao Logo.jpg'
import Matiao from '../assests/Matiao.jpg' // <-- The imported image

// --- GLOBAL IMAGE CONSTANT ---
const OFFICIAL_PHOTO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrYHW4ySt-ROGFcaR1HEJFHFINhJoV1iAX01u3Hs3RwEueEKl3bdJzCJGnL-bibpXxus6LaZcu5udrlFZIkGV8ympHmxa5uoEefTXZJnRKXhoh7kLX5u58Xj6t-3id9Vw9dCsHsYNtYptO6vXJOVWkXo2QHDWEuHj48C4c6FRe5q3glHKdBW3XSkY5r2F9l3MPPoLe3ecnVZ4tJiRzMrjWvwqJVJDLXhp6NPqUef84d-VlAYEILwwp9CS8iQGwPNMDuZgRqlaBiJgD';


// --- DATA PLACEHOLDERS ---
const officials = [
    // --- CATEGORY 1: Elected Barangay Council (7) ---
    { name: "Hon. Juan Dela Cruz", position: "Barangay Captain", committee: "Presiding Officer", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Maria Santos", position: "Barangay Kagawad", committee: "Appropriations, Tourism", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Jose Reyes", position: "Barangay Kagawad", committee: "Peace and Order, Human Rights", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Elena Diaz", position: "Barangay Kagawad", committee: "Health, Education, Sports", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Ben Torres", position: "Barangay Kagawad", committee: "Agriculture, Environmental Protection", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Clara Magsaysay", position: "Barangay Kagawad", committee: "Women, Family, Social Services", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Noli Fernandez", position: "Barangay Kagawad", committee: "Infrastructure, Public Works", photo: OFFICIAL_PHOTO_URL },
    
    // --- CATEGORY 2: SK Council (7) ---
    { name: "SK Chr. Mike Tan", position: "SK Chairman", committee: "Youth and Sports Development", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Ana Lopez", position: "SK Kagawad", committee: "Environmental Protection", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Sam Rivera", position: "SK Kagawad", committee: "Health and Sanitation", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Jen Gomez", position: "SK Kagawad", committee: "Education and Training", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Vic Castro", position: "SK Kagawad", committee: "Infrastructure Development", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Leo David", position: "SK Kagawad", committee: "Ways and Means", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Pia Aquino", position: "SK Kagawad", committee: "Cultural Affairs", photo: OFFICIAL_PHOTO_URL },

    // --- CATEGORY 3: Appointed Staff (2) ---
    { name: "Secretary Lea Cruz", position: "Barangay Secretary", committee: "Records and Administration", photo: OFFICIAL_PHOTO_URL },
    { name: "Treasurer Rico Pelaez", position: "Barangay Treasurer", committee: "Finance and Budget", photo: OFFICIAL_PHOTO_URL },
];

// --- UPDATED SERVICE ICONS ---
const services = [
    { name: "Barangay Clearance", icon: "fas fa-file-alt", link: "/services/clearance" },
    { name: "Business Permit", icon: "fas fa-building", link: "/services/business" },
    { name: "ID Issuance", icon: "fas fa-id-card", link: "/services/id" },
    { name: "Health Center", icon: "fas fa-hospital", link: "/services/health" },
    { name: "Incident Reporting", icon: "fas fa-bullhorn", link: "/services/report" },
];


// --- 1. Header Component (Modified for Mobile Toggle) ---
const Header = () => {
    // State to handle mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const navLinks = ["Home", "About Us", "Services", "News & Announcements", "Contact Us"];
    
    return (
        <header className="main-header sticky-header">
            <div className="header-logo-container">
                <img src={MatiaoLogo} alt="Barangay Logo" className="barangay-logo" />
                <span className="barangay-name">Barangay Matiao Community</span>
            </div>
            {/* Class is conditionally applied based on state */}
            <nav className={`header-nav ${isMenuOpen ? 'header-nav--open' : ''}`}>
                <ul className="nav-list" onClick={() => setIsMenuOpen(false)}> {/* Close menu on link click */}
                    {navLinks.map(link => (
                        <li key={link}><Link to={`/${link.toLowerCase().replace(/[^a-z0-9]/g, '')}`} className="nav-link">{link}</Link></li>
                    ))}
                    <li><Link to="/login" className="nav-portal-btn">Citizen Login</Link></li>
                </ul>
            </nav>
            {/* Button toggles the state */}
            <button className="menu-toggle" onClick={handleMenuToggle}>☰</button>
        </header>
    );
};

// --- 2. Hero Section ---
const HeroSection = () => (
    <section className="hero-section" style={{ 
        backgroundImage: `url(${Matiao})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <div className="hero-overlay">
            <h1 className="hero-title">Welcome to Barangay Matiao</h1>
            <p className="hero-message">— A united, peaceful, and progressive community.</p>
            <div className="hero-buttons">
                <Link to="/services" className="hero-btn primary-btn">View Services</Link>
                <Link to="/contact" className="hero-btn secondary-btn">Report a Concern</Link>
                <Link to="/news" className="hero-btn secondary-btn">Latest News</Link>
            </div>
        </div>
    </section>
);

// --- 3. About the Barangay ---
const AboutSection = () => (
    <section className="section-padding about-section">
        <h2 className="section-title">About Barangay Matiao</h2>
        <div className="about-content">
            <div className="about-text">
                <p>Barangay Matiao, located in the City of Mati, is a vibrant community known for its coastal resources and resilient populace. We are committed to fostering unity, peace, and progress through active civic engagement and transparent local governance.</p>
                <p>Our Vision is to be the leading model of sustainable coastal development and people-centered governance in Davao Oriental.</p>
                <p>Our Mission is to deliver efficient, timely, and quality public service while protecting our environment and empowering every resident.</p>
                <Link to="/about" className="link-btn">Learn more about Barangay Matiao →</Link>
            </div>
            
            <div className="about-map">
                {/* Embedded Map for a professional look */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.089064716768!2d126.23072223019818!3d6.94829623861217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33008ac63870634f%3A0x6b69d4d7328608e8!2sMatiao%2C%20Mati%2C%20Davao%20Oriental!5e0!3m2!1sen!2sph!4v1678881234567!5m2!1sen!2sph"
                    width="100%" 
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barangay Matiao Location"
                ></iframe>
                <p className="map-caption">Barangay Hall Location in the City of Mati</p>
            </div>
        </div>
    </section>
);

// --- 4. Announcements & News Feed ---
const NewsSection = () => {
    const newsItems = [
        { title: "Scheduled Power Interruption – Oct. 15, 2025", date: "Oct 12, 2025", type: "Advisory", icon: "fas fa-exclamation-triangle" },
        { title: "Barangay Cleanup Drive this Saturday", date: "Oct 10, 2025", type: "Event", icon: "fas fa-calendar-alt" },
        { title: "New Livelihood Program for Farmers", date: "Oct 01, 2025", type: "Program", icon: "fas fa-hand-holding-usd" },
    ];

    return (
        <section className="news-section bg-light">
            <div className="news-content-container">
                <h2 className="section-title">News & Announcements</h2>
                <p className="section-subtitle">Stay up-to-date with the latest events and advisories from the Barangay.</p>
                
                <div className="news-cards-grid">
                    {newsItems.map((item, index) => (
                        <article key={index} className="news-card">
                            <div className="news-header">
                                <div>
                                    <span className={`news-tag tag-${item.type.toLowerCase().replace(/\s/g, '-')}`}>{item.type}</span>
                                </div>
                                <i className={`news-icon ${item.icon}`}></i>
                            </div>
                            <h3 className="news-title-text">{item.title}</h3>
                            <p className="news-date">{item.date}</p>
                            <Link to="/news" className="link-btn">Read full advisory →</Link>
                        </article>
                    ))}
                </div>

                <Link to="/news" className="primary-btn view-all-btn">View All Announcements</Link>
            </div>
        </section>
    );
};

// --- 5. Services Section ---
const ServicesSection = () => (
    <section className="services-section">
        <div className="services-content-container">
            <h2 className="section-title">Essential Barangay Services</h2>
            <p className="section-subtitle">Access important documents and services online.</p>
            
            <div className="services-grid">
                {services.map((service, index) => (
                    <Link to={service.link} key={index} className="service-card">
                        <i className={`service-icon ${service.icon}`}></i>
                        <p>{service.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

// --- 7. Gallery Section (Full Width) ---
const GallerySection = () => {
    // Updated to use the imported Matiao image
    const galleryItems = [
        { src: Matiao, caption: "Coastal Cleanup Drive", date: "September 2025" },
        { src: Matiao, caption: "Turnover of New Patrol Vehicle", date: "August 2025" },
        { src: Matiao, caption: "Barangay General Assembly", date: "July 2025" },
        { src: Matiao, caption: "Local Sports Tournament", date: "June 2025" },
        { src: Matiao, caption: "Scholarship Program Launch", date: "May 2025" },
        { src: Matiao, caption: "Road Repair Completion", date: "April 2025" },
    ];

    return (
        // Removed section-padding, added custom class and bg-light
        <section className="gallery-section-full-width bg-light"> 
            <div className="section-content-wrapper"> {/* Wrapper for constrained titles */}
                <h2 className="section-title">Community Photo Gallery</h2>
                <p className="section-subtitle">Moments that define our spirit and progress.</p>
            </div>
            
            {/* The grid now extends to the edges of the page content */}
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <div key={index} className="gallery-item">
                        <img src={item.src} alt={item.caption} />
                        <p className="caption">{item.caption}</p>
                        <span className="date">{item.date}</span>
                    </div>
                ))}
            </div>

            <div className="section-content-wrapper">
                {/* Removed inline style by using new wrapper */}
                <Link to="/gallery" className="link-btn view-all-btn">View full gallery →</Link>
            </div>
        </section>
    );
};

// --- 8. Officials Section (Modified for Mobile Hiding) ---
const OfficialsSection = () => {
    // Barangay Council (Captain and 6 Kagawads) = 7 officials (index 0 to 6)
    const barangayOfficials = officials.slice(0, 7); 
    
    // SK Council (Chairman and 6 Kagawads) = 7 officials (index 7 to 13)
    const skCouncil = officials.slice(7, 14);
    
    // Appointed Staff (Secretary and Treasurer) = 2 officials (index 14 onwards)
    const barangayStaff = officials.slice(14);

    return (
        // Background remains white
        <section className="officials-section-full-width bg-white"> 
            {/* Use the existing wrapper to constrain internal content - ensures alignment with gallery titles */}
            <div className="section-content-wrapper"> 
                
                <h2 className="section-title">Your Barangay Officials</h2>
                <p className="section-subtitle">Committed to serve the people of Matiao.</p>

                <div className="officials-message">
                    <p className="message-text">We stand together, unified by our commitment to transparency and dedicated service to make Matiao a home we are all proud of.</p>
                    <p className="captain-signature">— Hon. Juan Dela Cruz, Barangay Captain</p>
                </div>

                {/* 1. Barangay Council Category */}
                <h3 className="category-title">Barangay Council (Captain and Kagawads)</h3>
                <div className="officials-list-wrapper officials-main-list"> {/* Added wrapper for mobile control */}
                    <div className="officials-grid officials-grid-main">
                        {barangayOfficials.map((official, index) => (
                            <div key={index} className="official-card">
                                <img src={official.photo} alt={official.name} className="official-photo" />
                                <p className="official-name">{official.name}</p>
                                <p className="official-position">{official.position}</p>
                                <p className="official-committee"><strong>Committee:</strong> {official.committee}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. SK Council Category (Sangguniang Kabataan) */}
                <h3 className="category-title">Sangguniang Kabataan (SK) Council</h3>
                <div className="officials-list-wrapper officials-sk-list"> {/* Added wrapper for mobile control */}
                    {/* We use the same grid for SK as the main council (7 people fits in 4 columns, 2 rows) */}
                    <div className="officials-grid officials-grid-sk">
                        {skCouncil.map((official, index) => (
                            <div key={index} className="official-card sk-card">
                                <img src={official.photo} alt={official.name} className="official-photo" />
                                <p className="official-name">{official.name}</p>
                                <p className="official-position">{official.position}</p>
                                <p className="official-committee"><strong>Committee:</strong> {official.committee}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Appointed Staff Category */}
                <h3 className="category-title">Barangay Staff and Support</h3>
                <div className="officials-list-wrapper officials-staff-list"> {/* Added wrapper for mobile control */}
                    <div className="officials-grid officials-grid-staff">
                        {barangayStaff.map((official, index) => (
                            <div key={index} className="official-card staff-card">
                                <img src={official.photo} alt={official.name} className="official-photo" />
                                <p className="official-name">{official.name}</p>
                                <p className="official-position">{official.position}</p>
                                <p className="official-committee"><strong>Committee:</strong> {official.committee}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* NEW: View All Officials Button (Hidden by default, shown on mobile) */}
                <Link to="/officials" className="primary-btn view-all-officials-btn">View All Officials</Link>
            </div>
        </section>
    );
};

// --- 10. Footer Component (Pro-Level Structure) ---
const Footer = () => (
    <footer className="main-footer">
        <div className="footer-grid-container">
            
            {/* Column 1: Logo & Mission/Tagline */}
            <div className="footer-brand">
                <div className="header-logo-container"> 
                    <img src={MatiaoLogo} alt="Barangay Matiao Logo" className="barangay-logo" />
                    <span className="barangay-name">Barangay Matiao</span>
                </div>
                <p className="footer-tagline">Committed to service, unity, and progress for every resident.</p>
                
                {/* Social Media Icons */}
                <div className="social-links-footer">
                    <a href="http://facebook.com/matiao" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f social-icon-footer"></i></a>
                    <a href="http://twitter.com/matiao" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter social-icon-footer"></i></a>
                    <a href="http://youtube.com/matiao" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube social-icon-footer"></i></a>
                </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-links">
                <h4>Explore</h4>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/officials">Barangay Officials</Link></li>
                    <li><Link to="/gallery">Photo Gallery</Link></li>
                    <li><Link to="/news">News & Events</Link></li>
                </ul>
            </div>

            {/* Column 3: Services & Resources */}
            <div className="footer-links">
                <h4>Services & Transparency</h4>
                <ul>
                    <li><Link to="/services">All Services</Link></li>
                    <li><Link to="/services/clearance">Barangay Clearance</Link></li>
                    <li><Link to="/transparency">Financial Reports</Link></li>
                    <li><Link to="/faqs">FAQs / Get Help</Link></li>
                </ul>
            </div>

            {/* Column 4: Contact Information & Location */}
            <div className="footer-contact-info">
                <h4>Contact Us</h4>
                <p><strong>Address:</strong> Brgy. Hall, Matiao, City of Mati, Davao Oriental</p>
                <p><strong>Phone:</strong> <a href="tel:+63821234567">(082) 123-4567</a></p>
                <p><strong>Email:</strong> <a href="mailto:matiao.brgy@mati.gov.ph">matiao.brgy@mati.gov.ph</a></p>
                <Link to="/contact" className="contact-map-link">View Location on Map →</Link>
            </div>
            
        </div>
        
        <div className="footer-bottom">
            <p className="copyright-text">Copyright © Barangay Matiao 2025. All Rights Reserved.</p>
            <p className="developer-tag">Developed with Pride by Matimawa</p>
        </div>
    </footer>
);

// --- Main Home Component ---
const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <NewsSection />
                <ServicesSection />
                <GallerySection />
                <OfficialsSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;