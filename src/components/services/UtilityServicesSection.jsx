import { FaTruck, FaMapMarkerAlt, FaBolt, FaTree, FaPaw, FaClipboardList, FaArrowRight } from 'react-icons/fa';

const utilityServices = [
  {
    icon: FaTruck,
    title: 'Garbage Collection Schedule',
    requirements: [
      'Collection Days: Every Monday, Wednesday, and Friday.',
      'Time Slot: 7:00 AM - 9:00 AM.',
      'Please separate biodegradable, non-biodegradable, and recyclables.',
      'Place sealed trash bags outside gates 15 minutes before scheduled time.',
    ],
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Barangay Vehicle Rental',
    requirements: [
      'Available Vehicles: Multi-cab (for small hauling) and service van (for transport).',
      'Booking: Requires a reservation form and payment of a standard fee.',
      'Rates: Vary based on distance and duration (local trips start at ₱500).',
      'Contact the Barangay Hall during office hours for availability.',
    ],
  },
  {
    icon: FaBolt,
    title: 'Emergency Contact List',
    requirements: [
      'Barangay Hotlines: 0917-XXX-XXXX (24/7)',
      'Police (Sub-Station): 166 (Local Dial)',
      'Fire Department: 199 (Local Dial)',
      'Ambulance/Medical Team: Contact the main Barangay Hall line for dispatch.',
    ],
  },
  {
    icon: FaTree,
    title: 'Tree Planting Permit',
    requirements: [
      'Applicable for planting along sidewalks or public areas.',
      'Required Form: Tree Planting Application Form (available online/office).',
      'Required: Sketch plan showing the planting location and tree type.',
      'Approval: Subject to approval by the Barangay Council and Environmental Officer.',
    ],
  },
  {
    icon: FaPaw,
    title: 'Barangay Pet Registration',
    requirements: [
      'Required for all pets (dogs/cats) over 3 months old.',
      'Needed: Proof of Anti-Rabies Vaccination (current year).',
      'Fee: ₱50 annual registration fee.',
      'Benefit: Registered pets are included in local animal welfare programs.',
    ],
  },
];

const UtilityServicesSection = () => {
  return (
    <section className="utility-services-section section-padding bg-white">
      <h2 className="section-title">Utility & Community Services</h2>
      <p className="section-subtitle">
        Schedules and guidelines for essential barangay services like waste collection, vehicle rental, and more.
      </p>

      {/* Matches the same structure as PaperworkServicesSection */}
      <div className="services-grid">
        {utilityServices.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon-container">
              <service.icon className="service-icon" />
            </div>

            <h3 className="card-title">{service.title}</h3>

            <div className="requirements-display">
              <h4 className="requirements-header">
                <FaClipboardList className="header-icon" /> Service Details
              </h4>
              <ul className="requirements-list">
                {service.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>

            <button className="service-cta-button">
              Contact Office <FaArrowRight className="button-icon" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UtilityServicesSection;
