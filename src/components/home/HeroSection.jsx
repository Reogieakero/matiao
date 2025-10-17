import { Link } from 'react-router-dom';
import Matiao from '../../assets/Matiao.jpg';

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

export default HeroSection;