import { Link } from 'react-router-dom';

const services = [
    { name: "Barangay Clearance", icon: "fas fa-file-alt", link: "/services/clearance" },
    { name: "Business Permit", icon: "fas fa-building", link: "/services/business" },
    { name: "ID Issuance", icon: "fas fa-id-card", link: "/services/id" },
    { name: "Health Center", icon: "fas fa-hospital", link: "/services/health" },
    { name: "Incident Reporting", icon: "fas fa-bullhorn", link: "/services/report" },
];

const ServicesSection = () => (
    <section className="services-section">
        <div className="services-content-container">
            <h2 className="section-title">Essential Barangay Services</h2>
            <p className="section-subtitle">Access important documents and services online.</p>
            
            <div className="services-grid">
                {services.map((service, index) => (
                    <Link to={service.link} key={index} className="service-card">
                        <i className={`service-icon ${service.icon}`}></i>
                        <p>{service.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesSection;