"use client";
import React from 'react';
import styles from './ServicesSection.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../../context/LanguageContext';
import kaServicesSection from '../../../locales/servicesSection/ka.servicesSection';
import enServicesSection from '../../../locales/servicesSection/en.servicesSection';
import ruServicesSection from '../../../locales/servicesSection/ru.servicesSection';

const ServicesSection = () => {
    const { currentLang } = useLanguage();
    const locales = { ka: kaServicesSection, en: enServicesSection, ru: ruServicesSection };
    const t = locales[currentLang.code] || kaServicesSection;
    const base = `/${currentLang.code}`;
    const services = [
        {
            ...t.services[0],
            slug: "glass-bridge",
            image: "/asset/glassbridge.jpg"
        },
        {
            ...t.services[1],
            slug: "narikala",
            image: "/asset/kartlisdeda.jpg"
        },
        {
            ...t.services[2],
            slug: "rike-park",
            image: "/asset/rikepark.jpg"
        },
    ];

    return (
        <section className={styles.wrapper} data-component="services-section">
            <h2 className={styles.title}>{t.sectionTitle}</h2>
            <div className={styles.grid} role="list">
                {services.map((service) => (
                    <article className={styles.card} key={service.slug} role="listitem">
                        {service.image && (
                            <div className={styles.media}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width:760px) 100vw, 33vw"
                                    priority={false}
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.mediaOverlay} aria-hidden="true" />
                            </div>
                        )}
                        <h3 className={styles.name}>{service.title}</h3>
                        <p className={styles.desc}>{service.description}</p>
                        <Link href={`${base}/services/${service.slug}`} className={styles.btn} aria-label={`${service.title} - ${t.learnMore}`}>
                            {t.learnMore}
                        </Link>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
