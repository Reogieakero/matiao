import { Mail, Phone, MapPin, Clock, Shield, Headphones } from "lucide-react";

const ContactInfo = () => (
  <section className="contact-info-section section-padding bg-white">
    <div className="contact-header">
      <h2 className="category-title">Official Contact Information</h2>
      <p className="category-subtitle">
        Get in touch with Barangay Matiao for assistance, inquiries, and emergency response.
      </p>
    </div>

    <div className="contact-info-grid">
      {/* --- Card 1: General Inquiries --- */}
      <div className="info-card inquiry-card">
        <div className="icon-wrapper">
          <Headphones className="icon-large" />
        </div>
        <h3>General Inquiries & Office Hours</h3>
        <p>
          For official documents, general questions, and administrative matters,
          please reach out during our regular office schedule.
        </p>
        <ul className="contact-list">
          <li>
            <Clock /> <strong>Office Hours:</strong> Mon - Fri, 8:00 AM - 5:00 PM
          </li>
          <li>
            <Mail /> <strong>Email:</strong> official@barangaymatiao.gov.ph
          </li>
          <li>
            <Phone /> <strong>Telephone:</strong> (087) 123-4567
          </li>
        </ul>
      </div>

      {/* --- Card 2: Emergency Response --- */}
      <div className="info-card emergency-card">
        <div className="icon-wrapper">
          <Shield className="icon-large" />
        </div>
        <h3>24/7 Emergency Response</h3>
        <p>
          Contact our dedicated team immediately for incidents requiring urgent
          action, peace and order concerns, or immediate assistance.
        </p>
        <div className="emergency-contact">
          <p className="emergency-label">BANTAY MATIAO HOTLINE</p>
          <p className="emergency-number">+63 999 876 5432</p>
        </div>
      </div>

      {/* --- Card 3: Physical Location --- */}
      <div className="info-card location-card">
        <div className="icon-wrapper">
          <MapPin className="icon-large" />
        </div>
        <h3>Physical Location</h3>
        <p>
          Our Barangay Hall is the central hub for local governance and services.
          We welcome official visitors during operating hours.
        </p>
        <address>
          National Highway, <br />
          Barangay Matiao, City of Mati, <br />
          Davao Oriental, Philippines
        </address>
      </div>
    </div>
  </section>
);

export default ContactInfo;
