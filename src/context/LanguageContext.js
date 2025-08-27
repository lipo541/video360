
"use client";
import React, { createContext, useContext, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

// Internal locale codes are lowercase (path segment). Country/label kept for UI.
const defaultLang = { code: 'ka', country: 'GE', label: 'KA' };
const SUPPORTED_LOCALES = ['ka','en','ru'];

const LanguageContext = createContext({
  currentLang: defaultLang,
  setCurrentLang: () => {},
});


export const LanguageProvider = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState(defaultLang);
  const [ready, setReady] = useState(false);

  // Derive from URL: /ka /en /ru (case-insensitive for robustness)
  React.useEffect(() => {
    if (!pathname) return; 
    const segRaw = pathname.split('/').filter(Boolean)[0];
    const seg = segRaw ? segRaw.toLowerCase() : '';
    if (SUPPORTED_LOCALES.includes(seg)) {
      setCurrentLang({ code: seg, country: seg === 'en' ? 'GB' : seg === 'ka' ? 'GE' : 'RU', label: seg.toUpperCase() });
    } else {
      // fallback to ka
      setCurrentLang(defaultLang);
    }
    setReady(true);
  }, [pathname]);

  const updateLang = (langObj) => {
    const code = (langObj.code || '').toLowerCase();
    if (!SUPPORTED_LOCALES.includes(code)) return; // ignore invalid
    const normalized = {
      code,
      country: code === 'en' ? 'GB' : code === 'ka' ? 'GE' : 'RU',
      label: code.toUpperCase()
    };
    setCurrentLang(normalized);

    if (!pathname) return;
    // Remove any leading chained locale segments (case-insensitive) e.g. /EN/RU/ka/about
    const parts = pathname.split('/').filter(Boolean);
    while (parts.length && SUPPORTED_LOCALES.includes(parts[0].toLowerCase())) {
      parts.shift();
    }
    const newPath = '/' + [code, ...parts].join('/');
    if (newPath !== pathname) router.push(newPath);
  };

  if (!ready) return null;

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang: updateLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
