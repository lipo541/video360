"use client";
import styles from './info360.module.css';
import Image from 'next/image';
import kaInfo360 from '../../../locales/info360/ka.info360';
import enInfo360 from '../../../locales/info360/en.info360';
import ruInfo360 from '../../../locales/info360/ru.info360';
import { useLanguage } from '../../../context/LanguageContext';
import SeoHead from '../../../components/SeoHead';
import kaSEO from '../../seo/info360.ka';
import enSEO from '../../seo/info360.en';
import ruSEO from '../../seo/info360.ru';

export default function Info360Page() {
  const { currentLang } = useLanguage();
  const locales = { GE: kaInfo360, EN: enInfo360, RU: ruInfo360 };
  const t = locales[currentLang.code] || kaInfo360;

  return (
    <>
      <SeoHead seoKA={kaSEO} seoEN={enSEO} seoRU={ruSEO} />
      <div className={styles.info360Wrapper}>
        <h1 className={styles.info360Title}>{t.title}</h1>
        <p className={styles.info360Desc}>{t.desc}</p>
        <div className={styles.info360Gallery}>
          <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" width={400} height={270} alt="360° კამერა ივენთზე" className={styles.info360Img} />
          <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" width={400} height={270} alt="360° ვიდეო გადაღება" className={styles.info360Img} />
          <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" width={400} height={270} alt="360° კამერის ტექნოლოგია" className={styles.info360Img} />
        </div>
        <section className={styles.info360Section}>
          <h2>{t.servicesTitle}</h2>
          <div className={styles.pricingGrid}>
            {t.pricing.map((price, idx) => (
              <div className={styles.priceCard} key={idx}>
                <div className={styles.priceTitle}>{price.title}</div>
                <div className={styles.priceValue}>{price.value}</div>
                <div className={styles.priceDesc}>{price.desc}</div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.info360Section}>
          <h2 className={styles.whyUsTitle}>{t.whyUsTitle}</h2>
          <div className={styles.whyUsGrid}>
            {t.whyUs.map((why, idx) => (
              <div className={styles.whyUsCard} key={idx}>
                <span className={styles.whyUsIcon}>{["💡", "⚡", "💸", "🎓"][idx]}</span>
                <div className={styles.whyUsText}>{why}</div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.info360Section}>
          <h2 className={styles.contactTitle}>{t.contactTitle}</h2>
          <div className={styles.contactGrid}>
            <a href="https://wa.me/+995593516842" target="_blank" rel="noopener noreferrer" className={styles.whatsappSimpleBtn}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt={t.whatsappAlt || "WhatsApp logo for 360° contact"} 
                className={styles.whatsappSimpleLogo} 
                loading="lazy"
              />
              <span>{t.whatsapp}<b>+995 593 51 68 42</b></span>
            </a>
            <div className={styles.mapCard}>
              <div className={styles.mapTitle}>{t.mapTitle}</div>
              <div className={styles.mapFrameWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.41730438255314!2d44.810815321720334!3d41.69162914178262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcdfd14a749%3A0x593f00660da6f3e4!2sXcaucasus%20-%20Paragliding%20in%20Tbilisi!5e0!3m2!1sru!2sge!4v1751884646629!5m2!1sru!2sge"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t.mapTitle}
                ></iframe>
              </div>
              <div className={styles.mapAddress}><b>მისამართი:</b> {t.mapAddress}</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
