import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import NewsSection from '../components/NewsSection';
import ServicesSection from '../components/ServicesSection';
import GallerySection from '../components/GallerySection';
import OfficialsSection from '../components/OfficialsSection';
import Footer from '../components/Footer';
import '../css/Home.css';



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