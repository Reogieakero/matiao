// frontend/src/components/about-us/HistorySection.jsx

const historyData = [
    { year: 'Establishment (1950s)', text: 'The area was officially recognized as a distinct community, primarily focused on agriculture and fishing, laying the groundwork for its formal barangay status.' },
    { year: 'Early Development (1970s)', text: 'The first set of local officials was formally elected. Infrastructure projects, including the first access roads and a community hall, were initiated.' },
    { year: 'Modernization Phase (2000s)', text: 'Significant growth in population and commerce. The focus shifted towards enhanced social services and digitalizing local records to improve efficiency.' },
    { year: 'Present Day', text: 'The barangay continues to expand its programs in public health, education, and peace and order, guided by its current administration and community involvement.' },
];

const HistorySection = () => {
    // We duplicate the data array to ensure a smooth, visible loop in the CSS animation.
    const carouselItems = [...historyData, ...historyData];

    return (
        <section className="history-section full-width bg-white">
            {/* Added container for full-width background, removed section-padding */}
            <div className="section-content section-padding">
                <h2 className="section-title">Barangay History</h2>
                <p className="section-subtitle">Tracing our roots from the early beginnings to the present day.</p>
            </div>
            
            {/* history-timeline-wrapper is needed to enforce full width overflow hidden */}
            <div className="history-timeline-wrapper">
                {/* history-timeline-track holds the continuously scrolling content */}
                <div className="history-timeline-track">
                    {carouselItems.map((item, index) => (
                        <div key={index} className="timeline-item-carousel">
                            <div className="timeline-content-carousel">
                                <h4>{item.year}</h4>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistorySection;