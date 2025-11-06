import Matiao from '../../assets/Matiao.jpg';

const ContactHero = () => {
    return (
        <section className="hero-section" style={{ 
                backgroundImage: `url(${Matiao})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay">
                    <h1 className="hero-title">Contact Barangay Matiao</h1>
                    <p className="hero-message">Our story, our mission, and the dedicated officials serving the community.</p>
                </div>
            </section>
    );
};

export default ContactHero;