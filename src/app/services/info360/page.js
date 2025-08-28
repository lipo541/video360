"use client";
import styles from './info360.module.css';
import Image from 'next/image';
import { FaCamera, FaShoppingCart, FaTools, FaCalendarAlt, FaUserCog, FaBolt, FaMoneyBillWave, FaChalkboardTeacher } from 'react-icons/fa';
import ContactSection from '../../../components/sections/contact/ContactSection';
import kaInfo360 from '../../../locales/info360/ka.info360';
import enInfo360 from '../../../locales/info360/en.info360';
import ruInfo360 from '../../../locales/info360/ru.info360';
import { useLanguage } from '../../../context/LanguageContext';
import { buildBreadcrumbLd, buildWebPageLd } from '../../../lib/seo/structuredData';

export default function Info360Page() {
  const { currentLang } = useLanguage();
  const locales = { ka: kaInfo360, en: enInfo360, ru: ruInfo360 };
  const t = locales[currentLang.code] || kaInfo360;

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.brand}>
            <Image src="/images/slider/logomain.jpeg" alt="Video360 Studio" fill sizes="84px" />
          </div>
            <h1 className={styles.title}>{t.title}</h1>
            <p className={styles.desc}>{t.desc}</p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.media}><Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" fill sizes="(max-width:760px) 50vw, 33vw" alt="360° კამერა ივენთზე" /></div>
          <div className={styles.media}><Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" fill sizes="(max-width:760px) 50vw, 33vw" alt="360° ვიდეო გადაღება" /></div>
          <div className={styles.media}><Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" fill sizes="(max-width:760px) 50vw, 33vw" alt="360° კამერის ტექნოლოგია" /></div>
        </div>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.servicesTitle}</h2>
          <div className={styles.pricingGrid}>
            {t.pricing.map((p,i)=> {
              const icons=[<FaCamera key="c"/>,<FaShoppingCart key="s"/>,<FaTools key="t"/>,<FaCalendarAlt key="e"/>];
              return (
                <div className={styles.priceCard} key={i}>
                  <div className={styles.priceIcon}>{icons[i]}</div>
                  <div className={styles.priceTitle}>{p.title}</div>
                  <div className={styles.priceValue}>{p.value}</div>
                  <p className={styles.priceDesc}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.whyUsTitle}</h2>
          <div className={styles.whyFeatures}>
            {t.whyUs.map((why,i)=> {
              const icons=[<FaUserCog key="a"/>,<FaBolt key="b"/>,<FaMoneyBillWave key="c"/>,<FaChalkboardTeacher key="d"/>];
              return (
                <div className={styles.whyItem} key={i}>
                  <span className={styles.whyBadge} aria-hidden="true">{icons[i]}</span>
                  <p className={styles.whyCopy}>{why}</p>
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
            serviceType: '360° Info Service',
            offers: (t.pricing || []).map(p => ({
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
            { key:'services', href:'/services/info360', name: t.title }
          ]))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebPageLd(currentLang.code,t.title,'/services/info360'))
        }}
      />
    </>
  );
}
