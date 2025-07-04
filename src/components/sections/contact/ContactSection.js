import React from 'react';
import { FaPhone } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
    const handleCall = () => {
        window.location.href = "tel:555555555";
    };

    return (
        <section className="contact-section">
            <div className="contact-content">
                <h2>მზად ხართ 360° მაგიისთვის?</h2>
                <p>დაგვირეკეთ ახლავე და შეუკვეთეთ თქვენი პირველი bullet-time ვიდეო ეფექტი</p>
                <a href="tel:+995593516842" className="phone-button">
                    <FaPhone /> დარეკვა 
                </a>
                <span>+(995) 593 51 68 42</span>                   
            </div>
        </section>
    );
};

export default ContactSection;
