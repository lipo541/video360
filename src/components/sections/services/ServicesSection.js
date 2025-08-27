"use client";
import React from 'react';
import './ServicesSection.css';
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
        <section className="services-section">
            <h2 className="section-title">{t.sectionTitle}</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        {service.image && (
                            <div className="service-image">
                                <Image 
                                    src={service.image} 
                                    alt={service.title}
                                    width={300}
                                    height={200}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link href={`${base}/services/${service.slug}`} className="learn-more">{t.learnMore}</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
