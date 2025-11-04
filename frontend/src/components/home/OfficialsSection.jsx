import { Link } from 'react-router-dom';

const OFFICIAL_PHOTO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrYHW4ySt-ROGFcaR1HEJFHFINhJoV1iAX01u3Hs3RwEueEKl3bdJzCJGnL-bibpXxus6LaZcu5udrlFZIkGV8ympHmxa5uoEefTXZJnRKXhoh7kLX5u58Xj6t-3id9Vw9dCsHsYNtYptO6vXJOVWkXo2QHDWEuHj48C4c6FRe5q3glHKdBW3XSkY5r2F9l3MPPoLe3ecnVZ4tJiRzMrjWvwqJVJDLXhp6NPqUef84d-VlAYEILwwp9CS8iQGwPNMDuZgRqlaBiJgD';

const officials = [
    // --- CATEGORY 1: Elected Barangay Council (7) ---
    { name: "Hon. Juan Dela Cruz", position: "Barangay Captain", committee: "Presiding Officer", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Maria Santos", position: "Barangay Kagawad", committee: "Appropriations, Tourism", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Jose Reyes", position: "Barangay Kagawad", committee: "Peace and Order, Human Rights", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Elena Diaz", position: "Barangay Kagawad", committee: "Health, Education, Sports", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Ben Torres", position: "Barangay Kagawad", committee: "Agriculture, Environmental Protection", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Clara Magsaysay", position: "Barangay Kagawad", committee: "Women, Family, Social Services", photo: OFFICIAL_PHOTO_URL },
    { name: "Kgd. Noli Fernandez", position: "Barangay Kagawad", committee: "Infrastructure, Public Works", photo: OFFICIAL_PHOTO_URL },
    
    // --- CATEGORY 2: SK Council (7) ---
    { name: "SK Chr. Mike Tan", position: "SK Chairman", committee: "Youth and Sports Development", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Ana Lopez", position: "SK Kagawad", committee: "Environmental Protection", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Sam Rivera", position: "SK Kagawad", committee: "Health and Sanitation", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Jen Gomez", position: "SK Kagawad", committee: "Education and Training", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Vic Castro", position: "SK Kagawad", committee: "Infrastructure Development", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Leo David", position: "SK Kagawad", committee: "Ways and Means", photo: OFFICIAL_PHOTO_URL },
    { name: "SK Kgd. Pia Aquino", position: "SK Kagawad", committee: "Cultural Affairs", photo: OFFICIAL_PHOTO_URL },

    // --- CATEGORY 3: Appointed Staff (2) ---
    { name: "Secretary Lea Cruz", position: "Barangay Secretary", committee: "Records and Administration", photo: OFFICIAL_PHOTO_URL },
    { name: "Treasurer Rico Pelaez", position: "Barangay Treasurer", committee: "Finance and Budget", photo: OFFICIAL_PHOTO_URL },
];

const OfficialsSection = () => {
    const barangayOfficials = officials.slice(0, 7);
    const skCouncil = officials.slice(7, 14);
    const barangayStaff = officials.slice(14);

    return (
        <section className="officials-section-full-width bg-white">
            <div className="section-content-wrapper">
                <h2 className="section-title">Your Barangay Officials</h2>
                <p className="section-subtitle">Committed to serve the people of Matiao.</p>

                <div className="officials-message">
                    <p className="message-text">We stand together, unified by our commitment to transparency and dedicated service to make Matiao a home we are all proud of.</p>
                    <p className="captain-signature">— Hon. Juan Dela Cruz, Barangay Captain</p>
                </div>

                <h3 className="category-title">Barangay Council (Captain and Kagawads)</h3>
                <div className="officials-list-wrapper officials-main-list">
                    <div className="officials-grid officials-grid-main">
                        {barangayOfficials.map((official, index) => (
                            <div key={index} className="official-card">
                                <img src={official.photo} alt={official.name} className="official-photo" />
                                <p className="official-name">{official.name}</p>
                                <p className="official-position">{official.position}</p>
                                <p className="official-committee"><strong>Committee:</strong> {official.committee}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="category-title">Sangguniang Kabataan (SK) Council</h3>
                <div className="officials-list-wrapper officials-sk-list">
                    <div className="officials-grid officials-grid-sk">
                        {skCouncil.map((official, index) => (
                            <div key={index} className="official-card sk-card">
                                <img src={official.photo} alt={official.name} className="official-photo" />
                                <p className="official-name">{official.name}</p>
                                <p className="official-position">{official.position}</p>
                                <p className="official-committee"><strong>Committee:</strong> {official.committee}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className="category-title">Barangay Staff and Support</h3>
                <div className="officials-list-wrapper officials-staff-list">
                    <div className="officials-grid officials-grid-staff">
                        {barangayStaff.map((official, index) => (
                            <div key={index} className="official-card staff-card">
                                <img src={official.photo} alt={official.name} className="official-photo" />
                                <p className="official-name">{official.name}</p>
                                <p className="official-position">{official.position}</p>
                                <p className="official-committee"><strong>Committee:</strong> {official.committee}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <Link to="/officials" className="primary-btn view-all-officials-btn">View All Officials</Link>
            </div>
        </section>
    );
};

export default OfficialsSection;