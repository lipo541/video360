"use client";
import styles from './rike-park.module.css';
import '../ServiceLocation.css';
import { useContext } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { buildBreadcrumbLd, buildWebPageLd } from '../../../lib/seo/structuredData';
import kaRikePark from '../../../locales/rikePark/ka.rikePark';
import enRikePark from '../../../locales/rikePark/en.rikePark';
import ruRikePark from '../../../locales/rikePark/ru.rikePark';

export default function RikeParkService() {
  const { currentLang } = useLanguage();
  let t = kaRikePark;
  if (currentLang.code === 'en') t = enRikePark;
  if (currentLang.code === 'ru') t = ruRikePark;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.rikeParkWrapper}>
          <div className={styles.rikeParkHeader}>
            <h1 className={styles.rikeParkTitle}>{t.title}</h1>
            <p className={styles.rikeParkDesc}>{t.desc}</p>
          </div>
          {/* ვიდეო და ფოტო სექციები column და ცენტრში, h1 სათაურით */}
          <div className={styles.rikeParkMediaSection}>
            <div className={styles.rikeParkMediaBlock}>
              <div className={styles.rikeParkGallery}>
                <div className={styles.rikeParkMediaLabel}>{t.videoLabel}</div>
                <video className={styles.rikeParkImg} controls poster="/images/locations/rike-park.jpg">
                  <source src="/images/locations/rikevideo.mp4" type="video/mp4" />
                  {t.videoAlt}
                </video>
              </div>
            </div>
            <div className={styles.rikeParkMediaBlock}>
              <div className={styles.rikeParkGallery}>
                <div className={styles.rikeParkMediaLabel}>{t.photoLabel}</div>
                <img 
                  className={styles.rikeParkImg} 
                  src="/images/locations/Rikepic.jpeg" 
                  alt={t.photoAlt || "360° ვიდეო რიყის პარკში | Rike Park 360° photo"} 
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className={styles.rikeParkBenefits}>
            {t.benefits.map((benefit, idx) => (
              <div className={styles.rikeParkBenefit} key={idx}>
                <div className={styles.rikeParkBenefitTitle}>{benefit.title}</div>
                <div className={styles.rikeParkBenefitDesc}>{benefit.desc}</div>
              </div>
            ))}
          </div>
          <div className={styles.whatsappContact}>
            <a href="https://wa.me/995593516842" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
              <img
                src="/images/locations/Rike-park.jpg"
                alt="WhatsApp"
                className={styles.whatsappLogo}
              />
              <span className={styles.whatsappText}>
                {t.whatsapp} <b>+995 593 51 68 42</b>
              </span>
            </a>
          </div>
          {/* ფასების სექცია */}
          <section className={styles.pricesSection}>
            <div className={styles.pricesHeader}>
              <h1 className={styles.pricesTitle}>{t.prices.title}</h1>
              <div className={styles.pricesSlogan}>{t.prices.slogan}</div>
              <div className={styles.pricesDesc}>{t.prices.desc}</div>
            </div>
            <div className={styles.pricesList}>
              {t.prices.list.map((price, idx) => (
                <div className={styles.priceCard} key={idx}>
                  <span className={styles.priceType}>{price.type}</span>
                  <span className={styles.priceValue}>{price.value}</span>
                </div>
              ))}
            </div>
          </section>
          <div className="service-location">
            <h2>{t.mapTitle}</h2>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.41730438255314!2d44.810815321720334!3d41.69162914178262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcdfd14a749%3A0x593f00660da6f3e4!2sXcaucasus%20-%20Paragliding%20in%20Tbilisi!5e0!3m2!1sru!2sge!4v1751884646629!5m2!1sru!2sge"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              ></iframe>
            </div>
            <div><b>{t.address ? t.address.split(":")[0] : "მისამართი:"}</b> {t.address}</div>
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: t.title,
            description: t.desc,
            inLanguage: currentLang.code,
            areaServed: 'Georgia',
            provider: { '@id': 'https://video360photo.ge/#organization' },
            serviceType: '360° Bullet-Time Video',
            offers: (t.prices?.list || []).map(p => ({
              '@type': 'Offer',
              priceCurrency: 'GEL',
              price: (p.value || '').replace(/[^0-9.,]/g,'').replace(',','.'),
              availability: 'https://schema.org/InStock'
            }))
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbLd(currentLang.code,[
            { key:'home', href:'/' },
            { key:'services', href:'/services' },
            { key:'services', href:'/services/rike-park', name: t.title }
          ]))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebPageLd(currentLang.code,t.title,'/services/rike-park'))
        }}
      />
    </>
  );
}
