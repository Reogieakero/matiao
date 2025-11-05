import Matiao from '../../assets/Matiao.jpg';

const NewsHeroSection = () => {
    return (
        <section className="hero-section" style={{ 
                backgroundImage: `url(${Matiao})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="hero-overlay">
                    <h1 className="hero-title">Latest News & Announcements</h1>
                    <p className="hero-message"> Stay informed with the latest updates and events from Barangay Matiao.</p>
                </div>
            </section>
    );
};

export default NewsHeroSection;