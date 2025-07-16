
"use client";
import React from 'react';
import './SafetySection.css';
import { useLanguage } from '../../../context/LanguageContext';
import ka from '../../../locales/safetySection/ka.safetySection.js';
import en from '../../../locales/safetySection/en.safetySection.js';
import ru from '../../../locales/safetySection/ru.safetySection.js';


const SafetySection = () => {
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
    <section className="safety-section">
      <div className="safety-card">
        <h2 className="safety-title">{t.title}</h2>
        <div className="safety-desc">{t.desc}</div>
        <ul className="safety-list">
          {t.points.map((point, index) => (
            <li className="safety-list-item" key={index}>
              <span className="safety-list-title">{point.title}</span>
              <span className="safety-list-desc">{point.description}</span>
            </li>
          ))}
        </ul>
        <a href="/services/info360" className="safety-more-btn">{t.more}</a>
      </div>
    </section>
  );
};

export default SafetySection;
