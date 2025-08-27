// Utility to build consistent Next.js metadata objects with hreflang alternates.
import { getSeo } from './seoData';

const BASE = 'https://video360photo.ge';
const SUPPORTED = ['ka','en','ru'];

export function buildPageMetadata(locale, pageKey, path, type='website') {
  const loc = (locale || 'ka').toLowerCase();
  const meta = getSeo(loc, pageKey);
  const cleanPath = path.startsWith('/') ? path : '/' + path; // e.g. '/', '/about'
  // For home path canonical should omit trailing slash (root) for ka
  const isHome = cleanPath === '/';
  const canonical = loc === 'ka'
    ? (isHome ? BASE : BASE + cleanPath)
    : BASE + '/' + loc + (isHome ? '' : cleanPath);
  const languages = SUPPORTED.reduce((acc, code) => {
    const isHomePath = isHome;
    acc[code] = code === 'ka'
      ? (isHomePath ? BASE : BASE + cleanPath)
      : BASE + '/' + code + (isHomePath ? '' : cleanPath);
    return acc;
  }, {});
  languages['x-default'] = languages['ka'];
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical, languages },
    openGraph: { title: meta.title, description: meta.description, url: canonical, type },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description }
  };
}
