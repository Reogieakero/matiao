import Matiao from '../../assets/Matiao.jpg';

const ServicesHeroSection = () => {
    return (
        <section className="hero-section" style={{ 
                backgroundImage: `url(${Matiao})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay">
                    <h1 className="hero-title">Barangay Services</h1>
                    <p className="hero-message">Service with Integrity. Governance with Heart.</p>
                </div>
            </section>
    );
};

export default ServicesHeroSection;