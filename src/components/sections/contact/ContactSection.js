"use client";
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import ka from '../../../locales/contactSection/ka.contactSection';
import en from '../../../locales/contactSection/en.contactSection';
import ru from '../../../locales/contactSection/ru.contactSection';
import './ContactSection.css';

const ContactSection = () => {
    const { currentLang } = useLanguage();
    const t = currentLang.code === 'EN' ? en : currentLang.code === 'RU' ? ru : ka;

    return (
        <section className="contact-section">
            <div className="contact-content">
                <h2>{t.title}</h2>
                <p>{t.description}</p>
                <a href={`tel:${t.phone}`} className="phone-button">
                    <FaPhone /> {t.call}
                </a>
                <div className="phone-number" style={{ marginTop: '8px', fontWeight: 'bold' }}>{t.phone}</div>
            </div>
        </section>
    );
};

export default ContactSection;
