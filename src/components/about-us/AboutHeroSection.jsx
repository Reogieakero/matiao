// frontend/src/components/about-us/AboutHeroSection.jsx
import Matiao from '../../assets/Matiao.jpg';

const AboutHeroSection = () => {
    return (
        <section className="hero-section" style={{ 
                backgroundImage: `url(${Matiao})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay">
                    <h1 className="hero-title">About Barangay Matiao</h1>
                    <p className="hero-message">Our story, our mission, and the dedicated officials serving the community.</p>
                </div>
            </section>
    );
};

export default AboutHeroSection;