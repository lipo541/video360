// This file creates a proper XML sitemap for Next.js App Router
import { NextResponse } from 'next/server'
import sitemapData from '../sitemap'

export async function GET() {
  const items = sitemapData()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items
    .map(item => `  <url>\n    <loc>${item.url}</loc>\n    <lastmod>${new Date(item.lastModified).toISOString().split('T')[0]}</lastmod>\n    <changefreq>${item.changeFrequency}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`)
    .join('\n')}\n</urlset>`
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
