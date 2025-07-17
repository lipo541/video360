// This file creates a proper XML sitemap for Next.js App Router
import { NextResponse } from 'next/server'
import sitemapData from '../sitemapData'

const languages = [
  { code: 'ka', path: '' },
  { code: 'en', path: '/en' },
  { code: 'ru', path: '/ru' },
];

function getLocalizedUrls(url) {
  const base = 'https://video360photo.ge';
  const path = url.replace(base, '');
  return languages.map(lang => ({
    hreflang: lang.code,
    url: base + (lang.path + path || '/')
  }));
}

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapData
    .flatMap(item => {
      const alternates = getLocalizedUrls(item.url);
      return languages.map(lang => {
        const base = 'https://video360photo.ge';
        const path = item.url.replace(base, '');
        const localizedUrl = base + (lang.path + path || '/');
        return `  <url>\n    <loc>${localizedUrl}</loc>\n    <lastmod>${item.lastModified instanceof Date ? item.lastModified.toISOString().split('T')[0] : item.lastModified}</lastmod>\n    <changefreq>${item.changeFrequency}</changefreq>\n    <priority>${item.priority}</priority>\n${alternates.map(a => `    <xhtml:link rel=\"alternate\" hreflang=\"${a.hreflang}\" href=\"${a.url}\" />`).join('\n')}\n  </url>`;
      });
    })
    .join('\n')}\n</urlset>`;
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
