
"use client";
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './SocialSection.css';
import { useLanguage } from '../../../context/LanguageContext';
import ka from '../../../locales/socialSection/ka.socialSection.js';
import en from '../../../locales/socialSection/en.socialSection.js';
import ru from '../../../locales/socialSection/ru.socialSection.js';


const iconMap = {
  Facebook: <FaFacebook />,
  Instagram: <FaInstagram />,
  TikTok: <FaTiktok />,
};

const SocialSection = () => {
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
    <section className="social-section">
      <h2 className="section-title">{t.title}</h2>
      <p>{t.desc}</p>
      <div className="social-icons">
        {t.links.map((social, index) => (
          <a href={social.link} className={`social-link ${social.label.toLowerCase()}`} key={index}>
            {iconMap[social.label]} {social.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
