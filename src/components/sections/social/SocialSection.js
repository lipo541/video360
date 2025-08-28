
"use client";
import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import styles from './SocialSection.module.css';
import { useLanguage } from '../../../context/LanguageContext';
import ka from '../../../locales/socialSection/ka.socialSection.js';
import en from '../../../locales/socialSection/en.socialSection.js';
import ru from '../../../locales/socialSection/ru.socialSection.js';

const icons = {
  Facebook: <FaFacebook className={styles.icon} aria-hidden="true" />,
  Instagram: <FaInstagram className={styles.icon} aria-hidden="true" />,
  TikTok: <FaTiktok className={styles.icon} aria-hidden="true" />
};

export default function SocialSection(){
  const { currentLang } = useLanguage();
  const [t,setT] = React.useState(ka);

  React.useEffect(()=>{
    const code = currentLang?.code?.toLowerCase();
    if(code==='en') setT(en); else if(code==='ru') setT(ru); else setT(ka);
  },[currentLang]);

  return (
    <section className={styles.wrapper} aria-labelledby="social-heading">
      <div className={styles.header}>
        <h2 id="social-heading" className={styles.title}>{t.title}</h2>
        <p className={styles.desc}>{t.desc}</p>
      </div>
      <div className={styles.grid} role="list">
        {t.links.map((s,i)=>{
          const labelLower = s.label.toLowerCase();
          const ext = s.link && s.link.startsWith('http');
            return (
              <a
                key={i}
                role="listitem"
                href={s.link}
                className={`${styles.card} ${styles[labelLower] || ''} card ${labelLower}`}
                target={ext?'_blank':undefined}
                rel={ext?'noopener noreferrer':undefined}
                aria-label={`${s.label} – ${t.title}`}
              >
                <div className={styles.platformHeader}>
                  <span className={styles.iconWrap}>{icons[s.label]}</span>
                  <span className={styles.platformName}>{s.label}</span>
                </div>
                <p className={styles.blurb}>{t.desc}</p>
                <span className={styles.action}>{currentLang?.code === 'ru' ? 'Подписаться' : currentLang?.code === 'en' ? 'Follow' : 'გამოიწერე'}</span>
              </a>
            );
        })}
      </div>
    </section>
  );
}

