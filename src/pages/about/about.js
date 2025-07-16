
"use client";
import React from 'react';
import './about.css';
import { useLanguage } from '../../context/LanguageContext';
import ka from '../../locales/aboutSection/ka.aboutSection.js';
import en from '../../locales/aboutSection/en.aboutSection.js';
import ru from '../../locales/aboutSection/ru.aboutSection.js';

const About = () => {
  const { currentLang } = useLanguage();
  const [langCode, setLangCode] = React.useState(currentLang?.code?.toLowerCase());
  const [t, setT] = React.useState(ka);

  React.useEffect(() => {
    const code = currentLang?.code?.toLowerCase();
    setLangCode(code);
    if (code === 'en') setT(en);
    else if (code === 'ru') setT(ru);
    else setT(ka);
  }, [currentLang]);

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">{t.title}</h1>
        <p className="about-lead">{t.lead}</p>
      </div>
      <div className="about-content">
        <div className="about-section about-team">
          <div className="section-icon">👥</div>
          <h2>{t.team.title}</h2>
          <p>{t.team.description}</p>
        </div>
        <div className="about-section about-services">
          <div className="section-icon">🎯</div>
          <h2>{t.services.title}</h2>
          <div className="services-grid">
            {t.services.items.map((item, i) => (
              <div className="service-item" key={i}>
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="about-section about-whyus">
          <div className="section-icon">⭐</div>
          <h2>{t.whyus.title}</h2>
          <div className="features-grid">
            {t.whyus.features.map((feature, i) => (
              <div className="feature-item" key={i}>
                <div className="feature-icon">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-section about-contact">
          <div className="section-icon">📞</div>
          <h2>{t.contact.title}</h2>
          <div className="whatsapp-row">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
              alt={t.whatsappAlt || "WhatsApp logo for 360° contact"} 
              className="about-whatsapp-logo" 
              loading="lazy"
            />
            <a href="https://wa.me/+995593516842" target="_blank" rel="noopener noreferrer" className="about-whatsapp-btn">
              <span className="whatsapp-number">{t.contact.whatsapp.number}</span>
            </a>
          </div>
        </div>
        <div className="location-section">
          <div className="section-icon">📍</div>
          <h2>{t.location.title}</h2>
          <p>{t.location.description}</p>
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.41730438255314!2d44.810815321720334!3d41.69162914178262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcdfd14a749%3A0x593f00660da6f3e4!2sXcaucasus%20-%20Paragliding%20in%20Tbilisi!5e0!3m2!1sru!2sge!4v1751884646629!5m2!1sru!2sge"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Video360 Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
