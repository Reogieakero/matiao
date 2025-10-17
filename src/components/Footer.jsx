import { Link } from 'react-router-dom';
import MatiaoLogo from '../assets/MatiaoLogo.jpg';

const Footer = () => (
    <footer className="main-footer">
        <div className="footer-grid-container">
            <div className="footer-brand">
                <div className="header-logo-container"> 
                    <img src={MatiaoLogo} alt="Barangay Matiao Logo" className="barangay-logo" />
                    <span className="barangay-name">Barangay Matiao</span>
                </div>
                <p className="footer-tagline">Committed to service, unity, and progress for every resident.</p>
                
                <div className="social-links-footer">
                    <a href="http://facebook.com/matiao" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f social-icon-footer"></i></a>
                    <a href="http://twitter.com/matiao" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter social-icon-footer"></i></a>
                    <a href="http://youtube.com/matiao" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube social-icon-footer"></i></a>
                </div>
            </div>

            <div className="footer-links">
                <h4>Explore</h4>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/officials">Barangay Officials</Link></li>
                    <li><Link to="/gallery">Photo Gallery</Link></li>
                    <li><Link to="/news">News & Events</Link></li>
                </ul>
            </div>

            <div className="footer-links">
                <h4>Services & Transparency</h4>
                <ul>
                    <li><Link to="/services">All Services</Link></li>
                    <li><Link to="/services/clearance">Barangay Clearance</Link></li>
                    <li><Link to="/transparency">Financial Reports</Link></li>
                    <li><Link to="/faqs">FAQs / Get Help</Link></li>
                </ul>
            </div>

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

export default Footer;