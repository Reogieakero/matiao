// frontend/src/pages/About.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHeroSection from '../components/about-us/AboutHeroSection'; // NEW IMPORT
import MissionVisionSection from '../components/about-us/MissionVisionSection';
import HistorySection from '../components/about-us/HistorySection';
import LocationSection from '../components/about-us/LocationSection';
import CoreValuesSection from '../components/about-us/CoreValuesSection';
import '../css/About.css'; 

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <main>
                <AboutHeroSection /> {/* NEW COMPONENT */}
                <MissionVisionSection /> 
                <CoreValuesSection />
                <HistorySection />
                <LocationSection />
            </main>
            <Footer />
        </div>
    );
};

export default About;