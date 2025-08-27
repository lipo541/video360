"use client";
import styles from './narikala.module.css';
import '../ServiceLocation.css';
import kaNarikala from '../../../locales/narikala/ka.narikala';
import enNarikala from '../../../locales/narikala/en.narikala';
import ruNarikala from '../../../locales/narikala/ru.narikala';
import { useLanguage } from '../../../context/LanguageContext';
import { buildBreadcrumbLd, buildWebPageLd } from '../../../lib/seo/structuredData';

export default function NarikalaService() {
  const { currentLang } = useLanguage();
  const locales = { ka: kaNarikala, en: enNarikala, ru: ruNarikala };
  const t = locales[currentLang.code] || kaNarikala;

  return (
    <>
      <div className="container">
        <div className={styles.narikalaWrapper}>
          <div className={styles.narikalaHeader}>
            <h1 className={styles.narikalaTitle}>{t.title}</h1>
            <p className={styles.narikalaDesc}>{t.desc}</p>
          </div>
          {/* ვიდეოს ბლოკი */}
          <div className={styles.narikalaGallery}>
            <div className={styles.narikalaMediaLabel}>{t.videoLabel}</div>
            <video className={styles.narikalaImg} controls poster="/images/locations/narikala.jpg">
              <source src="/images/locations/narikalavideo.mp4" type="video/mp4" />
              {t.videoAlt}
            </video>
          </div>
          {/* ფოტო ბლოკი */}
          <div className={styles.narikalaGallery}>
            <div className={styles.narikalaMediaLabel}>{t.photoLabel}</div>
            <img 
              className={styles.narikalaImg} 
              src="/images/locations/narikala1.jpeg" 
              alt={t.photoAlt || "360° ვიდეო ნარიყალაზე | Narikala 360° photo"} 
              loading="lazy"
            />
          </div>
          <div className={styles.narikalaBenefits}>
            {t.benefits.map((benefit, idx) => (
              <div className={styles.narikalaBenefit} key={idx}>
                <div className={styles.narikalaBenefitTitle}>{benefit.title}</div>
                <div className={styles.narikalaBenefitDesc}>{benefit.desc}</div>
              </div>
            ))}
          </div>
          <div className={styles.whatsappContact}>
            <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
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
            { key:'services', href:'/services/narikala', name: t.title }
          ]))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebPageLd(currentLang.code,t.title,'/services/narikala'))
        }}
      />
    </>
  );
}
