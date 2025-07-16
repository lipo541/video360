
'use client';
import React, { createContext, useContext, useState } from 'react';

const defaultLang = { code: 'GE', country: 'GE', label: 'GE' };

const LanguageContext = createContext({
  currentLang: defaultLang,
  setCurrentLang: () => {},
});


export const LanguageProvider = ({ children }) => {
  const [currentLang, setCurrentLang] = useState(defaultLang);
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('lang');
      if (stored) {
        setCurrentLang(JSON.parse(stored));
      }
      setLoading(false);
    }
  }, []);

  const updateLang = (langObj) => {
    setCurrentLang(langObj);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', JSON.stringify(langObj));
    }
  };

  if (loading) return null;

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang: updateLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
