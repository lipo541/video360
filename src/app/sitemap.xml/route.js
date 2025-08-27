// This file creates a proper XML sitemap for Next.js App Router
import { NextResponse } from 'next/server'
import sitemapData from '../sitemapData'

const languages = [
  { code: 'ka', prefix: '/ka' },
  { code: 'en', prefix: '/en' },
  { code: 'ru', prefix: '/ru' },
];

// Input item.url currently in sitemapData is canonical Georgian (no locale prefix) or full absolute.
function getLocalizedUrls(pathNoLocale) {
  const base = 'https://video360photo.ge';
  // Ensure leading slash
  const clean = pathNoLocale.startsWith('/') ? pathNoLocale : '/' + pathNoLocale;
  const list = languages.map(lang => ({
    hreflang: lang.code,
    url: lang.code === 'ka' ? `${base}${clean}` : `${base}${lang.prefix}${clean}`
  }));
  // Add x-default (Georgian canonical as default)
  list.push({ hreflang: 'x-default', url: `${base}${clean}` });
  return list;
}

export async function GET() {
  const base = 'https://video360photo.ge';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapData
    .flatMap(item => {
      // Derive path without domain
      const raw = item.url.startsWith(base) ? item.url.slice(base.length) || '/' : item.url;
      const alternates = getLocalizedUrls(raw === '/' ? '/' : raw);
      return alternates.map(locEntry => {
  return `  <url>\n    <loc>${locEntry.url}</loc>\n    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString().split('T')[0] : item.lastModified}</lastmod>\n    <changefreq>${item.changeFrequency}</changefreq>\n    <priority>${item.priority}</priority>\n${alternates.map(a => `    <xhtml:link rel=\"alternate\" hreflang=\"${a.hreflang}\" href=\"${a.url}\" />`).join('\n')}\n  </url>`;
      });
    })
    .join('\n')}\n</urlset>`;
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
