'use client';
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import ka from '../../locales/locationManagers/ka.locationManagers';
import en from '../../locales/locationManagers/en.locationManagers';
import ru from '../../locales/locationManagers/ru.locationManagers';
import kaManagers from '../../locales/locationManagers/ka.managers';
import enManagers from '../../locales/locationManagers/en.managers';
import ruManagers from '../../locales/locationManagers/ru.managers';
import './LocationManagers.css';

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

const LocationManagers = () => {
  const { currentLang } = useLanguage();
  const t = currentLang.code === 'EN' ? en : currentLang.code === 'RU' ? ru : ka;
  const managersT = currentLang.code === 'EN' ? enManagers : currentLang.code === 'RU' ? ruManagers : kaManagers;
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);
  const [showAllManagers, setShowAllManagers] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenModal = (manager) => {
    setSelectedManager(manager);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedManager(null);
  };

  // მენეჯერების სია მობილურზე
  // თითო სექციისთვის ცალკე ვაჩვენებთ სათაურს და ბარათებს
  const renderSection = (sectionKey, arr) => (
    <div className="manager-section" key={sectionKey}>
      <h3 className="manager-section-title">{t[sectionKey]}</h3>
      <div className="managers-grid">
        {arr.map((m, i) => {
          const mt = managersT[sectionKey][i];
          return (
            <div className="manager-card" key={m.phone}>
              <img 
                src={m.img} 
                alt={`${mt.name} - ${mt.role} | ${t.teamTitle}`} 
                className="manager-img" 
                loading="lazy"
              />
              <div className="manager-info">
                <div className="manager-name">{mt.name}</div>
                <div className="manager-role">{mt.role}</div>
                <div className="manager-desc">{mt.desc}</div>
                <button 
                  className="manager-more-btn" 
                  onClick={() => handleOpenModal({...m, ...mt})}
                  aria-label={`${mt.name} ${t.more}`}
                >
                  {t.more}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="location-managers-wrapper">
      <h2 className="location-managers-title">{t.teamTitle}</h2>
      {renderSection('founders', founders)}
      {renderSection('mainPartners', mainPartners)}
      {renderSection('eventManagers', eventManagers)}
      {renderSection('mainManagers', mainManagers)}
      {renderSection('locationManagers', locationManagers)}
      {modalOpen && selectedManager && (
        <div className="manager-modal-overlay" onClick={handleCloseModal}>
          <div className="manager-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
            <img 
              src={selectedManager.img} 
              alt={`${selectedManager.name} - ${selectedManager.role} | ${t.teamTitle}`} 
              className="manager-modal-img" 
              loading="lazy"
            />
            <div className="manager-modal-name">{selectedManager.name}</div>
            <div className="manager-modal-role">{selectedManager.role}</div>
            <div className="manager-modal-field">
              <span className="manager-modal-icon" title={t.age}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#888" strokeWidth="2"/></svg>
              </span>
              <span>{t.age}: {selectedManager.age}</span>
            </div>
            <div className="manager-modal-field">
              <span className="manager-modal-icon" title={t.experience}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#888" strokeWidth="2"/><circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2"/></svg>
              </span>
              <span>{t.experience}: {selectedManager.experience}</span>
            </div>
            <div className="manager-modal-bio">{selectedManager.bio}</div>
            <div className="manager-modal-field">
              <span className="manager-modal-icon" title={t.phone}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3" stroke="#888" strokeWidth="2"/><circle cx="12" cy="18" r="1" fill="#888"/></svg>
              </span>
              <a href={`tel:${selectedManager.phone.replace(/\s+/g, '')}`} className="manager-modal-phone-link">{t.phone}: {selectedManager.phone}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationManagers;
