// frontend/src/pages/Services.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import PaperworkServicesSection from '../components/services/PaperworkServicesSection';
import ServicesHeroSection from '../components/services/ServicesHeroSection'; // New component for a hero banner
import UtilityServicesSection from '../components/services/UtilityServicesSection'; // <--- NEW IMPORT
import '../css/Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <Header />
            <main>
                <ServicesHeroSection />
                <PaperworkServicesSection />
                <UtilityServicesSection /> {/* <--- NEW COMPONENT ADDED */}
            </main>
            <Footer />
        </div>
    );
};

export default Services;