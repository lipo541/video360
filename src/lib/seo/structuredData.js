const BASE = 'https://video360photo.ge';

const navNames = {
  ka: { home: 'მთავარი', services: 'სერვისები', about: 'ჩვენ შესახებ', contact: 'კონტაქტი' },
  en: { home: 'Home', services: 'Services', about: 'About', contact: 'Contact' },
  ru: { home: 'Главная', services: 'Услуги', about: 'О нас', contact: 'Контакты' }
};

export function buildBreadcrumbLd(locale, segments) {
  const loc = (locale || 'ka').toLowerCase();
  const names = navNames[loc] || navNames.ka;
  // segments is array of objects: { key, href, name? }
  const itemListElement = segments.map((seg, idx) => {
    const baseHref = seg.href === '/' ? '/' : seg.href; // assume leading slash
    const localizedHref = loc === 'ka' ? baseHref : `/${loc}${baseHref === '/' ? '' : baseHref}`;
    return {
      '@type': 'ListItem',
      position: idx + 1,
      name: seg.name || names[seg.key] || seg.key,
      item: BASE + localizedHref
    };
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };
}

export function buildWebPageLd(locale, title, path) {
  const loc = (locale || 'ka').toLowerCase();
  const url = loc === 'ka' ? (BASE + path) : `${BASE}/${loc}${path === '/' ? '' : path}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: loc,
    name: title,
    url
  };
}
