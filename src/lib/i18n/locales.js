// Central locale configuration (phase 1)
// Non-destructive: only data, no runtime logic yet.

export const SUPPORTED_LOCALES = ['ka', 'en', 'ru'];
export const DEFAULT_LOCALE = 'ka';

// Placeholder SEO map (will be populated/migrated incrementally)
export const seoMap = {
  ka: {
    home: { key: 'home' },
    about: { key: 'about' },
    services: { key: 'services' },
    contact: { key: 'contact' },
  },
  en: {
    home: { key: 'home' },
    about: { key: 'about' },
    services: { key: 'services' },
    contact: { key: 'contact' },
  },
  ru: {
    home: { key: 'home' },
    about: { key: 'about' },
    services: { key: 'services' },
    contact: { key: 'contact' },
  }
};

// Utility (later can be expanded) – safe no-op for now
export function normalizeLocale(l) {
  if (!l) return DEFAULT_LOCALE;
  const low = l.toLowerCase();
  return SUPPORTED_LOCALES.includes(low) ? low : DEFAULT_LOCALE;
}
