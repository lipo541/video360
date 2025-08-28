
"use client";
import React from 'react';
import styles from './SafetySection.module.css';
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

  // Map each bullet to an icon type (purchase / trust themes)
  const iconFor = (i) => {
    const baseProps = { className: styles.icon, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
    switch(i % 5) {
      case 0: return (<svg viewBox="0 0 24 24" {...baseProps}><path d="M3 5h18l-2 12H5L3 5z"/><path d="M8 11h8"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>);
      case 1: return (<svg viewBox="0 0 24 24" {...baseProps}><path d="M12 21c-5-3.5-8-7-8-11a8 8 0 0116 0c0 4-3 7.5-8 11z"/><circle cx="12" cy="10" r="3"/></svg>);
      case 2: return (<svg viewBox="0 0 24 24" {...baseProps}><path d="M4 4h16v4H4z"/><path d="M6 8v8a6 6 0 0012 0V8"/></svg>);
      case 3: return (<svg viewBox="0 0 24 24" {...baseProps}><path d="M12 2l3 7 7 .5-5.3 4.8 1.7 7.2L12 17l-6.4 4.5 1.7-7.2L2 9.5 9 9z"/></svg>);
      default: return (<svg viewBox="0 0 24 24" {...baseProps}><path d="M12 3l9 4.5-9 4.5-9-4.5 9-4.5z"/><path d="M3 12l9 4.5 9-4.5"/><path d="M3 17l9 4.5 9-4.5"/></svg>);
    }
  };

  return (
    <section className={styles.wrapper} data-component="safety-section">
      <h2 className={styles.title}>{t.title}</h2>
      <p className={styles.intro}>{t.desc}</p>
      <div className={styles.grid} role="list">
        {t.points.map((point, i) => (
          <article className={styles.item} key={i} role="listitem">
            <div className={styles.iconWrap} aria-hidden="true">{iconFor(i)}</div>
            <h3 className={styles.itemTitle}>{point.title}</h3>
            <p className={styles.itemDesc}>{point.description}</p>
          </article>
        ))}
      </div>
      <a href={`/${currentLang.code}/services/info360`} className={styles.cta} aria-label={t.more}>
        {t.more}
        <svg className={styles.icon} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>
      </a>
    </section>
  );
};

export default SafetySection;
