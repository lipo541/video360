"use client";
import React from 'react';
import Link from 'next/link';
import './footer.css';
import { useLanguage } from '../../context/LanguageContext';
import kaFooter from '../../locales/footer/ka.footer';
import enFooter from '../../locales/footer/en.footer';
import ruFooter from '../../locales/footer/ru.footer';

const Footer = () => {
    const { currentLang } = useLanguage();
    const locales = { GE: kaFooter, EN: enFooter, RU: ruFooter };
    const t = locales[currentLang.code] || kaFooter;
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>{t.aboutTitle}</h4>
                    <p>{t.aboutDesc}</p>
                </div>
                <div className="footer-section">
                    <h4>{t.servicesTitle}</h4>
                    <ul>
                        {t.services.map((item, idx) => (
                            <li key={idx}><Link href={item.href}>{item.label}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>{t.socialTitle}</h4>
                    <ul className="social-links">
                        {t.social.map((item, idx) => (
                            <li key={idx}><a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>{t.managersTitle}</h4>
                    <p>{t.managersDesc}</p>
                    <form>
                        <input type="email" placeholder={t.emailPlaceholder} />
                        <button type="submit">{t.subscribe}</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Video360 Studio. {t.copyright}</p>
            </div>
        </footer>
    );
}

export default Footer;
