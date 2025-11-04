const LocationSection = () => {
    // Coordinates for Matiao, Mati City, Davao Oriental: 6.9448, 126.2326
    const mapEmbedUrl = "https://maps.google.com/maps?q=6.9448,126.2326&z=14&output=embed";

    return (
        <section className="location-section section-padding bg-white">
            <h2 className="section-title">Locate Our Office</h2>
            <p className="section-subtitle">Visit the Barangay Hall for assistance and inquiries during office hours.</p>

            <div className="about-content">
                <div className="about-map" style={{ minWidth: '100%', maxWidth: '800px' }}>
                    <iframe
                        src={mapEmbedUrl}
                        title="Barangay Matiao Hall Location"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        // Inline styles kept for dimensions, border, and shadow which are not globally defined for iframes
                        style={{ width: '100%', height: '400px' }}
                    ></iframe>
                    <p className="map-caption">
                        <strong style={{ color: 'var(--navy-dark)' }}>Barangay Hall Address:</strong> Barangay Matiao, Mati City, Davao Oriental, 8200
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;
