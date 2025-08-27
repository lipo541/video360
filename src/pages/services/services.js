"use client";
import React from 'react';
import styles from './services.module.css';
import { useLanguage } from '../../context/LanguageContext';
import kaServices from '../../locales/services/ka.services';
import enServices from '../../locales/services/en.services';
import ruServices from '../../locales/services/ru.services';

const Services = () => {
  const { currentLang } = useLanguage();
  const locales = { ka: kaServices, en: enServices, ru: ruServices };
  const t = locales[currentLang.code] || kaServices;

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesHeader}>
        <h1 className={styles.servicesTitle}>{t.title}</h1>
        <p className={styles.servicesDesc}>{t.desc}</p>
      </div>
      <div className={styles.servicesList}>
        {t.items.map((item, idx) => (
          <div className={styles.serviceCard} key={idx}>
            <div className={styles.serviceCardHeader}>
              <h2 className={styles.serviceCardTitle}>{item.title}</h2>
            </div>
            <div className={styles.serviceCardBody}>
              <p className={styles.serviceCardDesc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
