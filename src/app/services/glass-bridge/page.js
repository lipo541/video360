"use client";
import styles from './glass-bridge.module.css';
import kaGlassBridge from '../../../locales/glassBridge/ka.glassBridge';
import enGlassBridge from '../../../locales/glassBridge/en.glassBridge';
import ruGlassBridge from '../../../locales/glassBridge/ru.glassBridge';
import { useLanguage } from '../../../context/LanguageContext';
import { buildBreadcrumbLd, buildWebPageLd } from '../../../lib/seo/structuredData';
import { FaMountain, FaCameraRetro, FaClock, FaWalking, FaMapMarkedAlt, FaShieldAlt, FaBolt, FaUsers } from 'react-icons/fa';
import ContactSection from '../../../components/sections/contact/ContactSection';

export default function GlassBridgeService() {
  const { currentLang } = useLanguage();
  const locales = { ka: kaGlassBridge, en: enGlassBridge, ru: ruGlassBridge };
  const t = locales[currentLang.code] || kaGlassBridge;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.hero}>
          <div className={styles.brand}>
            <img src="/images/locations/most-mira1.jpg" alt="Glass Bridge 360" className={styles.brandImg} />
          </div>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.desc}>{t.desc}</p>
        </div>

        <div className={styles.gallery}>
            <div className={styles.media}>
              <span className={styles.badge}>{t.videoLabel}</span>
              <video controls poster="/images/locations/most-mira1.jpg">
                <source src="/images/locations/glassvideo.mp4" type="video/mp4" />
                {t.videoAlt}
              </video>
              <div className={styles.playOverlay}><span className={styles.playTriangle}></span></div>
            </div>
            <div className={styles.media}>
              <span className={styles.badge}>{t.photoLabel}</span>
              <img src="/images/locations/glass.jpeg" alt={t.photoAlt || 'Glass Bridge 360'} loading="lazy" />
            </div>
        </div>

        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>{t.featuresTitle || t.benefitsTitle || t.title}</h2>
          <div className={styles.featuresGrid}>
            {(t.benefits || []).map((benefit, i) => {
              const iconSet = [<FaMountain key="m"/>,<FaCameraRetro key="c"/>,<FaClock key="cl"/>,<FaWalking key="w"/>,<FaMapMarkedAlt key="mp"/>,<FaShieldAlt key="s"/>,<FaBolt key="b"/>,<FaUsers key="u"/>];
              return (
                <div className={styles.featureCard} key={i}>
                  <div className={styles.featureIcon}>{iconSet[i % iconSet.length]}</div>
                  <div className={styles.featureTitle}>{benefit.title}</div>
                  <p className={styles.featureDesc}>{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className={styles.pricingHeader}>
            <h2 className={styles.pricingTitle}>{t.prices?.title}</h2>
            {t.prices?.slogan && <div className={styles.pricingSlogan}>{t.prices.slogan}</div>}
            {t.prices?.desc && <p className={styles.pricingLead}>{t.prices.desc}</p>}
          </div>
          <div className={styles.pricingGrid}>
            {(t.prices?.list || []).map((p,i)=> {
              const priceIcons=[<FaCameraRetro key="c"/>,<FaBolt key="b"/>,<FaUsers key="u"/>,<FaShieldAlt key="s"/>];
              return (
                <div className={styles.priceCard} key={i}>
                  <div className={styles.priceIcon}>{priceIcons[i%priceIcons.length]}</div>
                  <div className={styles.priceType}>{p.type}</div>
                  <div className={styles.priceValue}>{p.value}</div>
                  {p.desc && <p className={styles.priceDesc}>{p.desc}</p>}
                </div>
              );
            })}
          </div>
        </section>

        <ContactSection />
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
            { key:'services', href:'/services/glass-bridge', name: t.title }
          ]))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebPageLd(currentLang.code,t.title,'/services/glass-bridge'))
        }}
      />
    </>
  );
}
