
"use client";
import React from 'react';
import './contact.css';
import { useLanguage } from '../../context/LanguageContext';
import ka from '../../locales/contactSection/ka.contactSection.js';
import en from '../../locales/contactSection/en.contactSection.js';
import ru from '../../locales/contactSection/ru.contactSection.js';


const Contact = () => {
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
    <div className="contact-container">
      <h1>{t.title}</h1>
      <p>{t.lead}</p>
      <div className="contact-content">
        <div className="contact-info">
          <h2>{t.infoTitle}</h2>
          <ul>
            {t.info.map((item, i) => (
              <li key={i}>{item.icon} {item.label} {item.value}</li>
            ))}
          </ul>
          <h2>{t.workTitle}</h2>
          <p>{t.workTime}</p>
        </div>
        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              src={t.map.src}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.map.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
