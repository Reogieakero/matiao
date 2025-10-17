import { Link } from 'react-router-dom';
import Matiao from '../../assets/Matiao.jpg';

const GallerySection = () => {
    const galleryItems = [
        { src: Matiao, caption: "Coastal Cleanup Drive", date: "September 2025" },
        { src: Matiao, caption: "Turnover of New Patrol Vehicle", date: "August 2025" },
        { src: Matiao, caption: "Barangay General Assembly", date: "July 2025" },
        { src: Matiao, caption: "Local Sports Tournament", date: "June 2025" },
        { src: Matiao, caption: "Scholarship Program Launch", date: "May 2025" },
        { src: Matiao, caption: "Road Repair Completion", date: "April 2025" },
    ];

    return (
        <section className="gallery-section-full-width bg-light">
            <div className="section-content-wrapper">
                <h2 className="section-title">Community Photo Gallery</h2>
                <p className="section-subtitle">Moments that define our spirit and progress.</p>
            </div>
            
            <div className="gallery-grid">
                {galleryItems.map((item, index) => (
                    <div key={index} className="gallery-item">
                        <img src={item.src} alt={item.caption} />
                        <p className="caption">{item.caption}</p>
                        <span className="date">{item.date}</span>
                    </div>
                ))}
            </div>

            <div className="section-content-wrapper">
                <Link to="/gallery" className="link-btn view-all-btn">View full gallery →</Link>
            </div>
        </section>
    );
};

export default GallerySection;