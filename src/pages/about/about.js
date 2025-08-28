
"use client";
import React from 'react';
import './about.css';
import { FaUsers, FaCogs, FaBolt, FaShieldAlt, FaCameraRetro, FaLeaf, FaClock, FaMapMarkedAlt, FaWhatsapp, FaVideo, FaShoppingCart, FaGraduationCap, FaTrophy, FaRobot, FaBriefcase, FaCoins, FaCampground } from 'react-icons/fa';
import ContactSection from '../../components/sections/contact/ContactSection';
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

  const serviceIconMap = {
    '📹': FaVideo,
    '🛒': FaShoppingCart,
    '🎪': FaCampground,
    '🎓': FaGraduationCap
  };
  const whyIconMap = {
    '🏆': FaTrophy,
    '🤖': FaRobot,
    '💼': FaBriefcase,
    '💰': FaCoins,
    '⚡': FaBolt
  };
  return (
    <>
    <div className="aboutWrapper">
      <header className="hero">
        <h1 className="heroTitle">{t.title}</h1>
        <p className="heroLead">{t.lead}</p>
      </header>

      {/* Team Section */}
  <section className="section section--violet" aria-labelledby="team-heading">
        <div className="sectionHeader">
          <div className="sectionIcon" aria-hidden="true"><FaUsers /></div>
          <h2 id="team-heading" className="sectionTitle">{t.team.title}</h2>
          <p className="sectionLead">{t.team.description}</p>
        </div>
      </section>

      {/* Services */}
  <section className="section section--teal" aria-labelledby="services-heading">
        <div className="sectionHeader">
          <div className="sectionIcon" aria-hidden="true"><FaCogs /></div>
          <h2 id="services-heading" className="sectionTitle">{t.services.title}</h2>
          {t.services.lead && <p className="sectionLead">{t.services.lead}</p>}
        </div>
        <div className="servicesGrid">
          {t.services.items.map((item,i)=> {
            const Icon = serviceIconMap[item.icon] || FaCogs;
            return (
              <div key={i} className="serviceCard">
                <div className="serviceIcon"><Icon aria-label={item.title} /></div>
                <h3 className="serviceTitle">{item.title}</h3>
                <p className="serviceDesc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Us */}
  <section className="section section--amber" aria-labelledby="whyus-heading">
        <div className="sectionHeader">
          <div className="sectionIcon" aria-hidden="true"><FaShieldAlt /></div>
          <h2 id="whyus-heading" className="sectionTitle">{t.whyus.title}</h2>
          {t.whyus.lead && <p className="sectionLead">{t.whyus.lead}</p>}
        </div>
        <div className="featuresGrid">
          {(t.whyus.features||[]).map((feature,i)=> {
            const Icon = whyIconMap[feature.icon] || FaShieldAlt;
            return (
              <div key={i} className="featureCard">
                <div className="featureIcon"><Icon aria-label={feature.text} /></div>
                <p className="featureText">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

  {/* Shared Contact Component */}
  </div>
  <ContactSection wide />
  </>
  );
};

export default About;
