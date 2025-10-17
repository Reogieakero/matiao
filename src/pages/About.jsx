import Header from '../components/Header';
import Footer from '../components/Footer';
import HistorySection from '../components/about/HistorySection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import LocationSection from '../components/about/LocationSection';
import DemographicsSection from '../components/about/DemographicsSection';
import CultureSection from '../components/about/CultureSection';
import '../css/About.css';

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <main>
                <section className="hero-section about-hero">
                    <div className="hero-overlay">
                        <h1>About Barangay Matiao</h1>
                        <p>Discover our rich history, vibrant culture, and thriving community</p>
                    </div>
                </section>

                <HistorySection />
                <MissionVisionSection />
                <LocationSection />
                <DemographicsSection />
                <CultureSection />
                
                <section className="section-padding">
                    <div className="section-content">
                        <div className="about-cta">
                            <div className="cta-card">
                                <h3>Stay informed and get involved</h3>
                                <p>Subscribe to barangay updates or contact your local officials for questions, requests, and community programs.</p>
                            </div>
                            <div className="cta-actions">
                                <a href="/contact" className="btn btn-primary">Contact Us</a>
                                <a href="/services" className="btn btn-ghost">View Services</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default About;