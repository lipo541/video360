'use client';
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '../../context/LanguageContext';
import ka from '../../locales/locationManagers/ka.locationManagers';
import en from '../../locales/locationManagers/en.locationManagers';
import ru from '../../locales/locationManagers/ru.locationManagers';
import kaManagers from '../../locales/locationManagers/ka.managers';
import enManagers from '../../locales/locationManagers/en.managers';
import ruManagers from '../../locales/locationManagers/ru.managers';
import styles from './LocationManagers.module.css';

// Header icons (inline SVG for crisp rendering & theming)
const SECTION_ICONS = {
  founders: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.sectionIconSvg}>
      <path d="M5 9l2-4 3 3 2-5 2 5 3-3 2 4-4 2 1 5-4-3-4 3 1-5-4-2z" fill="url(#gradF)" />
      <defs>
        <linearGradient id="gradF" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#2f7dff" />
          <stop offset="100%" stopColor="#85b7ff" />
        </linearGradient>
      </defs>
    </svg>
  ),
  mainPartners: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.sectionIconSvg}>
      <path d="M9 11l-3-3 4-4 3 3 3-3 4 4-3 3m-8 0l3 3 3-3m-6 0H5m14 0h-4m-4 3v5m4-5v5" fill="none" stroke="url(#gradP)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="gradP" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#2f7dff" />
          <stop offset="100%" stopColor="#579aff" />
        </linearGradient>
      </defs>
    </svg>
  ),
  eventManagers: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.sectionIconSvg}>
      <rect x="3" y="5" width="18" height="16" rx="3" ry="3" stroke="#2f7dff" strokeWidth="2" fill="none" />
      <path d="M3 10h18M8 3v4M16 3v4" stroke="#2f7dff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="15" r="3" fill="#579aff" />
    </svg>
  ),
  mainManagers: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.sectionIconSvg}>
      <path d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z" stroke="#2f7dff" strokeWidth="2" fill="rgba(47,125,255,.12)" />
      <path d="M10 11l2 2 4-4" stroke="#2f7dff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  ),
  locationManagers: (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.sectionIconSvg}>
      <path d="M12 22s7-6.3 7-12a7 7 0 10-14 0c0 5.7 7 12 7 12z" stroke="#2f7dff" strokeWidth="2" fill="rgba(47,125,255,.10)" />
      <circle cx="12" cy="10" r="3" fill="#2f7dff" />
    </svg>
  )
};

// დამფუძნებლები
const founders = [
  {
    img: '/images/locationmanagers/lashajapava.jpg',
    age: 44,
    phone: '+995 593 51 68 42'
  },
  {
    img: '/images/locationmanagers/malxazgiuzalov.jpeg',
    age: 38,
    phone: '+995 592 13 56 56'
  }
];

// მთავარი პარტნიორები
const mainPartners = [
  {
    img: '/images/locationmanagers/anastasdelianov.jpeg',
    age: 21,
    phone: '+995 557 75 87 23'
  },
  {
    img: '/images/locationmanagers/tamazokropiridze1.jpeg',
    age: 30,
    phone: '+995 597 07 11 94'
  },
  {
    img: '/images/locationmanagers/garo.jpeg',
    age: 29,
    phone: '+995 557 53 24 63'
  },
  {
    img: '/images/locationmanagers/gio.jpeg',
    age: 35,
    phone: '+995 599 12 11 85'
  }
];

// ივენთების მენეჯერები
const eventManagers = [
  {
    img: '/images/locationmanagers/muradiani1.jpeg',
    age: 20,
    phone: '+995 571 17 13 15'
  }
];

// მთავარი მენეჯერები
const mainManagers = [
  {
    img: '/images/locationmanagers/isakiani.jpeg',
    age: 19,
    phone: '+995 557 34 75 94'
  },
  {
    img: '/images/locationmanagers/sadoyan.jpg',
    age: 20,
    phone: '+995 555 18 16 83'
  }
];

// ლოკაციის მენეჯერები
const locationManagers = [
  {
    img: '/images/locationmanagers/laliashvili.jpeg',
    age: 18,
    phone: '+995 557 56 16 08'
  },
  {
    img: '/images/locationmanagers/nikolozlaliashvili.jpeg',
    age: 18,
    phone: '+995 500 11 73 04'
  },
  {
    img: '/images/locationmanagers/devdariani.jpeg',
    age: 20,
    phone: '+995 591 15 17 02'
  },

  {
    img: '/images/locationmanagers/badurika.jpeg',
    age: 20,
    phone: '+995 597 77 37 63'
  }
];

// ყველა ერთად ერთ მასივში საჭიროების შემთხვევაში
const managers = [
  ...founders,
  ...mainPartners,
  ...eventManagers,
  ...mainManagers,
  ...locationManagers
];

const Modal = ({ manager, t, onClose, styles }) => {
  const modalRef = useRef(null);
  const lastFocused = useRef(null);

  // Close on ESC
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'Tab') {
      const focusable = modalRef.current?.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable || focusable.length === 0) return;
      const list = Array.from(focusable);
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, [onClose]);

  useEffect(() => {
    lastFocused.current = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    // focus close button
    const closeBtn = modalRef.current?.querySelector('button');
    closeBtn?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
      if (lastFocused.current && lastFocused.current.focus) {
        lastFocused.current.focus();
      }
    };
  }, [handleKey]);

  if (!manager) return null;
  return createPortal(
    <div className={styles.modalOverlay} onClick={onClose} role="presentation">
      <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="lm-modal-name" onClick={e => e.stopPropagation()} ref={modalRef}>
        <button className={styles.close} onClick={onClose} aria-label={t.close || 'Close'}>×</button>
        <img src={manager.img} alt={`${manager.name} - ${manager.role}`} className={styles.modalImg} loading="lazy" />
        <div id="lm-modal-name" className={styles.modalName}>{manager.name}</div>
        <div className={styles.modalRole}>{manager.role}</div>
        <div className={styles.field}>
          <span title={t.age}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#888" strokeWidth="2"/></svg>
          </span>
          <span>{t.age}: {manager.age}</span>
        </div>
        {manager.experience && (
          <div className={styles.field}>
            <span title={t.experience}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#888" strokeWidth="2"/><circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2"/></svg>
            </span>
            <span>{t.experience}: {manager.experience}</span>
          </div>
        )}
        {manager.bio && <div className={styles.bio}>{manager.bio}</div>}
        <div className={styles.field}>
          <span title={t.phone}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3" stroke="#888" strokeWidth="2"/><circle cx="12" cy="18" r="1" fill="#888"/></svg>
          </span>
          <a href={`tel:${manager.phone.replace(/\s+/g, '')}`} className={styles.phone}>{t.phone}: {manager.phone}</a>
        </div>
      </div>
    </div>,
    document.body
  );
};

const LocationManagers = () => {
  const { currentLang } = useLanguage();
  const code = currentLang.code;
  const t = code === 'en' ? en : code === 'ru' ? ru : ka;
  const managersT = code === 'en' ? enManagers : code === 'ru' ? ruManagers : kaManagers;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openSections, setOpenSections] = useState(() => new Set(['founders']));
  // Keep content mounted after first open to avoid re-mount flashes
  const [loadedSections, setLoadedSections] = useState(() => new Set(['founders']));

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 720); // threshold
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Allow multiple sections open even on mobile (removed previous single-open mobile behavior)
  const toggleSection = useCallback((key) => {
    setOpenSections(prev => {
      const next = new Set(prev);
      const isOpen = next.has(key);
      if (isOpen) {
        next.delete(key);
        return next;
      }
      setLoadedSections(ls => (ls.has(key) ? ls : new Set([...ls, key])));
      next.add(key);
      return next;
    });
  }, []);

  const handleOpenModal = useCallback((manager) => {
    setSelectedManager(manager);
    setModalOpen(true);
  }, []);
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedManager(null);
  };

  // მენეჯერების სია მობილურზე
  // თითო სექციისთვის ცალკე ვაჩვენებთ სათაურს და ბარათებს
  const renderSection = (sectionKey, arr) => {
    const open = openSections.has(sectionKey);
    const panelId = `lm-${sectionKey}-panel`;
    const btnId = `lm-${sectionKey}-btn`;
    const headerVariant = styles.variantGlass; // chosen modern variant
    return (
      <section className={styles.section} key={sectionKey}>
        <button
          id={btnId}
            type="button"
            className={[
              styles.sectionTitle,
              headerVariant,
              open ? styles.sectionOpen : styles.sectionClosed
            ].join(' ')}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => toggleSection(sectionKey)}
        >
          <span className={styles.sectionLabel}>
            <span className={styles.sectionIconWrap}>{SECTION_ICONS[sectionKey]}</span>
            {t[sectionKey]}
          </span>
          <span className={styles.sectionChevron} aria-hidden="true" />
        </button>
        <div
          id={panelId}
          role="region"
          aria-labelledby={btnId}
          aria-hidden={!open}
          className={styles.sectionPanel + ' ' + (open ? styles.panelOpen : styles.panelClosed)}
        >
          <div className={styles.grid}>
            {loadedSections.has(sectionKey) && arr.map((m, i) => {
              const mt = managersT[sectionKey][i];
              return (
                <figure className={styles.card} key={m.phone} tabIndex={0} aria-label={`${mt.name} ${mt.role}`}>
                  <div className={styles.mediaWrap}>
                    <img
                      src={m.img}
                      alt={`${mt.name} - ${mt.role}`}
                      className={styles.img}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className={styles.ring} aria-hidden="true" />
                  </div>
                  <figcaption className={styles.body}>
                    <div className={styles.name}>{mt.name}</div>
                    <div className={styles.role}>{mt.role}</div>
                    <p className={styles.desc}>{mt.desc}</p>
                    <button
                      className={styles.btn}
                      onClick={() => handleOpenModal({ ...m, ...mt })}
                      aria-label={`${mt.name} ${t.more}`}
                    >
                      <span>{t.more}</span>
                    </button>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className={styles.wrapper} data-component="location-managers">
      <h2 className={styles.title}>{t.teamTitle}</h2>
      {renderSection('founders', founders)}
      {renderSection('mainPartners', mainPartners)}
      {renderSection('eventManagers', eventManagers)}
      {renderSection('mainManagers', mainManagers)}
      {renderSection('locationManagers', locationManagers)}
      {modalOpen && selectedManager && (
        <Modal manager={selectedManager} t={t} onClose={handleCloseModal} styles={styles} />
      )}
    </div>
  );
};

export default LocationManagers;
