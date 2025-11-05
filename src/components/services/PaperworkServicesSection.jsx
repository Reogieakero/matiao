import { FaFileSignature, FaIdCard, FaBuilding, FaClipboardList, FaArrowRight } from 'react-icons/fa';

const paperworkServices = [
  {
    icon: FaFileSignature,
    title: 'Barangay Clearance',
    requirements: [
      'Latest Community Tax Certificate (Cedula)',
      'Proof of Residency (e.g., utility bill)',
      'Valid ID (Government-issued)',
      'Application Form (available at the Barangay Hall)',
    ],
  },
  {
    icon: FaIdCard,
    title: 'Certificate of Indigency',
    requirements: [
      'Proof of Residency for at least 6 months',
      'Affidavit of Low Income Status',
      'Valid ID (Government-issued)',
      'Barangay Census/Record verification',
    ],
  },
  {
    icon: FaBuilding,
    title: 'Business Permit Endorsement',
    requirements: [
      'DTI/SEC Registration (New Business)',
      'Tax Declaration/Lease Contract',
      'Zoning Clearance',
      'Previous Business Permit (For renewal)',
    ],
  },
];

const PaperworkServicesSection = () => {
  return (
    <section className="paperwork-services-section section-padding bg-white">
      <h2 className="section-title">Paperwork & Document Services</h2>
      <p className="section-subtitle">
        A list of essential documents and certificates available to our residents, including their necessary requirements.
      </p>

      <div className="services-grid">
        {paperworkServices.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon-container">
              <service.icon className="service-icon" />
            </div>

            <h3 className="card-title">{service.title}</h3>

            <div className="requirements-display">
              <h4 className="requirements-header">
                <FaClipboardList className="header-icon" /> Required Documents
              </h4>
              <ul className="requirements-list">
                {service.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <button className="service-cta-button">
              Apply Now <FaArrowRight className="button-icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaperworkServicesSection;
