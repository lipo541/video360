import sitemapData from "./sitemapData";

const languages = [
  { code: 'ka', path: '' },
  { code: 'en', path: '/en' },
  { code: 'ru', path: '/ru' },
];

function getLocalizedUrls(url) {
  // Remove domain, get path
  const base = 'https://video360photo.ge';
  const path = url.replace(base, '');
  return languages.map(lang => ({
    hreflang: lang.code,
    url: base + (lang.path + path || '/')
  }));
}

export default function sitemap() {
  return sitemapData.flatMap(item => {
    const alternates = getLocalizedUrls(item.url);
    return languages.map(lang => {
      // Compose localized url
      const base = 'https://video360photo.ge';
      const path = item.url.replace(base, '');
      const localizedUrl = base + (lang.path + path || '/');
      return {
        url: localizedUrl,
        lastModified: item.lastModified instanceof Date ? item.lastModified.toISOString().split('T')[0] : item.lastModified,
        changefreq: item.changeFrequency,
        priority: item.priority,
        alternates: alternates
      };
    });
  });
}
