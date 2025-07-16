
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
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="about-whatsapp-logo" />
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2844289548346!2d44.7826924!3d41.7151377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzU0LjUiTiA0NMKwNDYnNTcuNyJF!5e0!3m2!1sen!2sge!4v1234567890123"
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
