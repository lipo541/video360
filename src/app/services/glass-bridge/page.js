"use client";
import styles from './glass-bridge.module.css';
import '../ServiceLocation.css';
import kaGlassBridge from '../../../locales/glassBridge/ka.glassBridge';
import enGlassBridge from '../../../locales/glassBridge/en.glassBridge';
import ruGlassBridge from '../../../locales/glassBridge/ru.glassBridge';
import { useLanguage } from '../../../context/LanguageContext';
import SeoHead from '../../../components/SeoHead';
import kaSEO from '../../seo/glass-bridge.ka';
import enSEO from '../../seo/glass-bridge.en';
import ruSEO from '../../seo/glass-bridge.ru';

export default function GlassBridgeService() {
  const { currentLang } = useLanguage();
  const locales = { GE: kaGlassBridge, EN: enGlassBridge, RU: ruGlassBridge };
  const t = locales[currentLang.code] || kaGlassBridge;

  return (
    <>
      <SeoHead seoKA={kaSEO} seoEN={enSEO} seoRU={ruSEO} />
      <div className="container">
        <div className={styles.glassBridgeWrapper}>
          <div className={styles.glassBridgeHeader}>
            <h1 className={styles.glassBridgeTitle}>{t.title}</h1>
            <p className={styles.glassBridgeDesc}>{t.desc}</p>
          </div>

          {/* ვიდეოს ბლოკი */}
          <div className={styles.glassBridgeGallery}>
            <div className={styles.glassBridgeMediaLabel}>{t.videoLabel}</div>
            <video className={styles.glassBridgeImg} controls poster="/images/locations/most-mira1.jpg" style={{ aspectRatio: 'unset', objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '600px', background: '#f8fafc' }}>
              <source src="/images/locations/glassvideo.mp4" type="video/mp4" />
              {t.videoAlt}
            </video>
          </div>
          {/* სურათის ბლოკი */}
          <div className={styles.glassBridgeGallery}>
            <div className={styles.glassBridgeMediaLabel}>{t.photoLabel}</div>
            <img 
              className={styles.glassBridgeImg} 
              src="/images/locations/glass.jpeg" 
              alt={t.photoAlt || "360° ვიდეო გლას ბრიჯზე | Glass Bridge 360° photo"} 
              loading="lazy"
            />
          </div>

          <div className={styles.glassBridgeBenefits}>
            {t.benefits.map((benefit, idx) => (
              <div className={styles.glassBridgeBenefit} key={idx}>
                <div className={styles.glassBridgeBenefitTitle}>{benefit.title}</div>
                <div className={styles.glassBridgeBenefitDesc}>{benefit.desc}</div>
              </div>
            ))}
          </div>

          <div className={styles.whatsappContact}>
            <a href="https://wa.me/+995593516842" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
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
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              ></iframe>
            </div>
            <div><b>მისამართი:</b> {t.address}</div>
          </div>
        </div>
      </div>
    </>
  );
}
