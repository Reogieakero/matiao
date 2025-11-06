// pages/Contact.jsx

import ContactHero from '../components/contact/ContactHero';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../css/Contact.css"

const Contact = () => (
    <div className="contact-page">
        <Header />
        <main>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
        </main>
        <Footer />
    </div>
);

export default Contact;