import {
    FaFileSignature, FaIdCard, FaBuilding, FaArrowRight, 
    FaTruck, FaMapMarkerAlt, FaBolt, FaTree, FaPaw 
} from 'react-icons/fa';

// --- SERVICE DATA ---
const paperworkServices = [
    { icon: FaFileSignature, title: 'Barangay Clearance', cta: 'Apply Now' },
    { icon: FaIdCard, title: 'Certificate of Indigency', cta: 'Apply Now' },
    { icon: FaBuilding, title: 'Business Permit Endorsement', cta: 'Apply Now' },
];

const utilityServices = [
    { icon: FaTruck, title: 'Garbage Collection Schedule', cta: 'View Schedule' },
    { icon: FaMapMarkerAlt, title: 'Barangay Vehicle Rental', cta: 'Contact Office' },
    { icon: FaBolt, title: 'Emergency Contact List', cta: 'View Hotlines' },
    { icon: FaTree, title: 'Tree Planting Permit', cta: 'Apply Now' },
    { icon: FaPaw, title: 'Barangay Pet Registration', cta: 'Register Pet' },
];

const allServices = [...paperworkServices, ...utilityServices];

const ServicesSection = () => {
    return (
        // Full-width Section: py-16 and uses a light blue background (bg-blue-50)
        <section className="w-full py-16 bg-blue-50">
            {/* Centered Content Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Headings */}
                <h2 className="text-4xl font-bold text-center text-navy-dark mb-2">
                    Essential Barangay Services
                </h2>
                <p className="text-xl text-center text-gray-600 mb-12">
                    Quick access to common documents and community services.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {allServices.map((service) => (
                        <div 
                            key={service.title} 
                            // Card Styling
                            className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                        >
                            {/* Icon Container (Circle background) */}
                            <div className="p-4 rounded-full bg-navy-dark mb-4">
                                {/* CHANGED: text-gold-accent is replaced with text-white */}
                                <service.icon className="text-3xl text-white" />
                            </div>

                            {/* Card Title */}
                            <h3 className="text-xl font-bold text-navy-dark text-center mb-6 min-h-[3rem]">
                                {service.title}
                            </h3>

                            {/* Call to Action Button */}
                            <button className="flex items-center justify-center w-full max-w-[200px] py-2 px-4 font-bold text-navy-dark bg-gold-accent rounded-lg hover:bg-yellow-500 transition duration-300">
                                {service.cta} 
                                <FaArrowRight className="ml-2" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;