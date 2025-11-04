import { Link } from 'react-router-dom';

const NewsSection = () => {
    const newsItems = [
        { title: "Scheduled Power Interruption – Oct. 15, 2025", date: "Oct 12, 2025", type: "Advisory", icon: "fas fa-exclamation-triangle" },
        { title: "Barangay Cleanup Drive this Saturday", date: "Oct 10, 2025", type: "Event", icon: "fas fa-calendar-alt" },
        { title: "New Livelihood Program for Farmers", date: "Oct 01, 2025", type: "Program", icon: "fas fa-hand-holding-usd" },
    ];

    return (
        <section className="news-section bg-light">
            <div className="news-content-container">
                <h2 className="section-title">News & Announcements</h2>
                <p className="section-subtitle">Stay up-to-date with the latest events and advisories from the Barangay.</p>
                
                <div className="news-cards-grid">
                    {newsItems.map((item, index) => (
                        <article key={index} className="news-card">
                            <div className="news-header">
                                <div>
                                    <span className={`news-tag tag-${item.type.toLowerCase().replace(/\s/g, '-')}`}>{item.type}</span>
                                </div>
                                <i className={`news-icon ${item.icon}`}></i>
                            </div>
                            <h3 className="news-title-text">{item.title}</h3>
                            <p className="news-date">{item.date}</p>
                            <Link to="/news" className="link-btn">Read full advisory →</Link>
                        </article>
                    ))}
                </div>

                <Link to="/news" className="primary-btn view-all-btn">View All Announcements</Link>
            </div>
        </section>
    );
};

export default NewsSection;