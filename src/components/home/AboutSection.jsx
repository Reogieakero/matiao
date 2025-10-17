import { Link } from 'react-router-dom';

const AboutSection = () => (
    <section className="section-padding about-section">
        <h2 className="section-title">About Barangay Matiao</h2>
        <div className="about-content">
            <div className="about-text">
                <p>Barangay Matiao, located in the City of Mati, is a vibrant community known for its coastal resources and resilient populace. We are committed to fostering unity, peace, and progress through active civic engagement and transparent local governance.</p>
                <p>Our Vision is to be the leading model of sustainable coastal development and people-centered governance in Davao Oriental.</p>
                <p>Our Mission is to deliver efficient, timely, and quality public service while protecting our environment and empowering every resident.</p>
                <Link to="/about" className="link-btn">Learn more about Barangay Matiao →</Link>
            </div>
            
            <div className="about-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15730.089064716768!2d126.23072223019818!3d6.94829623861217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33008ac63870634f%3A0x6b69d4d7328608e8!2sMatiao%2C%20Mati%2C%20Davao%20Oriental!5e0!3m2!1sen!2sph!4v1678881234567!5m2!1sen!2sph"
                    width="100%" 
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barangay Matiao Location"
                ></iframe>
                <p className="map-caption">Barangay Hall Location in the City of Mati</p>
            </div>
        </div>
    </section>
);

export default AboutSection;