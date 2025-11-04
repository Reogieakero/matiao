// frontend/src/components/about-us/CoreValuesSection.jsx
// Assuming you are using an icon library like react-icons (e.g., Font Awesome)
import { FaHandshake, FaShieldAlt, FaLightbulb, FaTree } from 'react-icons/fa'; 

const values = [
    { icon: FaHandshake, title: 'Integrity', description: 'Upholding honesty and moral principles in all dealings and decisions. We act with transparency and accountability.' },
    { icon: FaShieldAlt, title: 'Service', description: 'Commitment to providing efficient, accessible, and responsive public service that meets the needs of every constituent.' },
    { icon: FaLightbulb, title: 'Innovation', description: 'Embracing new ideas and technologies to improve community life, streamlining processes, and ensuring sustainability.' },
    { icon: FaTree, title: 'Community', description: 'Fostering a sense of belonging and collaboration, ensuring every resident is heard and included in local governance.' },
];

const CoreValuesSection = () => {
    return (
        // Removed redundant bg-light class as background color is set in CSS
        <section className="core-values-section section-padding">
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">The standards that define our officials and guide our community forward.</p>

            <div className="values-grid">
                {values.map((value, index) => (
                    <div className="value-card" key={index}>
                        {/* Added a container for the icon to enable the circle background effect */}
                        <div className="value-icon-container">
                            <value.icon className="value-icon" />
                        </div>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoreValuesSection;
