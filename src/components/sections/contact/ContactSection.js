"use client";
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { useLanguage } from '../../../context/LanguageContext';
import ka from '../../../locales/contactSection/ka.contactSection';
import en from '../../../locales/contactSection/en.contactSection';
import ru from '../../../locales/contactSection/ru.contactSection';
import styles from './ContactSection.module.css';

export default function ContactSection({ wide=false }){
    const { currentLang } = useLanguage();
    const code = currentLang?.code;
    const t = code === 'en' ? en : code === 'ru' ? ru : ka;

    return (
    <section className={`${styles.wrapper} ${wide ? styles.wide : ''}`} aria-labelledby="contact-heading">
            <div className={styles.header}>
                <h2 id="contact-heading" className={styles.title}>{t.title}</h2>
                {t.lead && <p className={styles.lead}>{t.lead}</p>}
            </div>
            <div className={styles.layout}>
                <div className={styles.panel}>
                    <h3 className={styles.subTitle}>{t.infoTitle}</h3>
                    <ul className={styles.infoList}>
                        {t.info?.map((row,i)=> (
                            <li key={i} className={styles.infoItem}>
                                <span className={styles.infoIcon} aria-hidden="true">{row.icon}</span>
                                <span><span className={styles.infoLabel}>{row.label} </span><span className={styles.infoValue}>{row.value}</span></span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.call}>
                    <p className={styles.work}>{t.workTitle}</p>
                    <p className={styles.workTime}>{t.workTime}</p>
                    <a href={`tel:${t.phone}`} className={styles.phoneBtn}><FaPhone aria-hidden="true" /> {code==='ru' ? 'Позвонить' : code==='en' ? 'Call Now' : 'დარეკე'}</a>
                    <div className={styles.bigPhone}>{t.phone}</div>
                </div>
                <div className={styles.mapWrap} aria-label={t.map?.title}>
                    {t.map?.src && (
                        <iframe className={styles.mapFrame} src={t.map.src} title={t.map.title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
                    )}
                </div>
            </div>
        </section>
    );
}

