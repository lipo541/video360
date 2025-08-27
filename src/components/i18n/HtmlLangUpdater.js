"use client";
import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function HtmlLangUpdater() {
  const { currentLang } = useLanguage();
  useEffect(() => {
    if (currentLang?.code) {
      document.documentElement.lang = currentLang.code;
    }
  }, [currentLang]);
  return null;
}
