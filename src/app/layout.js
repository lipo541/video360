import { Inter, Roboto, Open_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
// Path-based hooks avoided here to keep this a server component for metadata export.

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: "--font-roboto"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
});

// Heading font with Georgian support
// Georgian subset isn't available in next/font for Noto Sans; rely on system fallback for Georgian glyphs
const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ['400','500','600','700'],
  variable: "--font-heading"
});

export const metadata = {
  title: {
    default: "Video360 Studio - 360° Bullet-Time ვიდეო ეფექტები საქართველოში",
    template: "%s | Video360 Studio"
  },
  description: "Video360 Studio - საქართველოს ერთადერთი 360° bullet-time ვიდეო სტუდია. ეპიკური Matrix Shot ეფექტები, პროფესიონალური აღჭურვილობა, ღონისძიებებისა და მარკეტინგული კამპანიებისთვის.",
  keywords: [
    "360 ვიდეო",
    "bullet time ეფექტი",
    "Matrix Shot",
    "ვიდეო სტუდია საქართველო",
    "360 კამერა",
    "slow motion ვიდეო",
    "ღონისძიებები",
    "მარკეტინგული ვიდეო",
    "Video360 Studio",
    "360 degree video",
    "bullet time Georgia"
  ],
  authors: [{ name: "Video360 Studio" }],
  creator: "Video360 Studio",
  publisher: "Video360 Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ka_GE",
    url: "https://video360photo.ge",
    title: "Video360 Studio - 360° Bullet-Time ვიდეო ეფექტები",
    description: "საქართველოს ერთადერთი 360° bullet-time ვიდეო სტუდია. ეპიკური Matrix Shot ეფექტები პროფესიონალური აღჭურვილობით.",
    siteName: "Video360 Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video360 Studio - 360° Bullet-Time ვიდეო ეფექტები",
    description: "საქართველოს ერთადერთი 360° bullet-time ვიდეო სტუდია",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://video360photo.ge",
  },
};

// Import components (we'll create these next)

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { LanguageProvider } from "../context/LanguageContext";
import { getSeo } from "../lib/seo/seoData";

// Derive locale from request path server-side (App Router passes segment in children tree). We inspect headers only as fallback.
import { headers } from 'next/headers';

async function detectInitialLocale() {
  const h = await headers();
  const injected = h.get('x-site-locale');
  if (injected) return injected;
  const accept = h.get('accept-language') || '';
  if (/^en/i.test(accept)) return 'en';
  if (/^ru/i.test(accept)) return 'ru';
  return 'ka';
}

export default async function RootLayout({ children }) {
  const initialLocale = await detectInitialLocale();
  const localizedHome = getSeo(initialLocale,'home');
  const serviceKeys = ['services/narikala','services/glass-bridge','services/rike-park','services/info360'];
  const offers = serviceKeys.map(k => {
    const m = getSeo(initialLocale, k);
    return {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: m.title,
        description: m.description,
        inLanguage: initialLocale
      }
    };
  });
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Video360 Studio',
    description: localizedHome.description || '360° video studio',
    url: 'https://video360photo.ge',
    '@id': 'https://video360photo.ge/#organization',
    logo: 'https://video360photo.ge/images/slider/logomain.jpeg',
    inLanguage: initialLocale,
    telephone: '+995555360360',
    email: 'info@video360photo.ge',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'თბილისი',
      addressLocality: 'თბილისი',
      addressCountry: 'Georgia'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '41.7151377',
      longitude: '44.7826924'
    },
    openingHours: 'Mo-Su 10:00-22:00',
    priceRange: '$$',
    serviceArea: { '@type': 'Country', name: 'Georgia' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: initialLocale === 'ka' ? '360° სერვისები' : initialLocale === 'ru' ? '360° сервисы' : '360° Services',
      itemListElement: offers
    }
  };

  return (
    <html lang={initialLocale}>
  <body className={`${inter.variable} ${roboto.variable} ${openSans.variable} ${noto.variable}`}>
        <LanguageProvider>
          <div className="layout-container">
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </LanguageProvider>
      </body>
    </html>
  );
}
