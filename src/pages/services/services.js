"use client";
import React from 'react';
import './services.css';
import { useLanguage } from '../../context/LanguageContext';
import kaServices from '../../locales/services/ka.services';
import enServices from '../../locales/services/en.services';
import ruServices from '../../locales/services/ru.services';

const Services = () => {
  const { currentLang } = useLanguage();
  const locales = { GE: kaServices, EN: enServices, RU: ruServices };
  const t = locales[currentLang.code] || kaServices;

  return (
    <div className="services-container">
      <h1>{t.title}</h1>
      <p>{t.desc}</p>
      <div className="services-content">
        {t.items.map((item, idx) => (
          <div className="service-item" key={idx}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
