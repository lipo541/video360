
import { Inter, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import kaSEO from "./seo/ka";
import enSEO from "./seo/en";
import ruSEO from "./seo/ru";
import { useLanguage } from "../context/LanguageContext";

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
    url: "https://video360studio.ge",
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
    canonical: "https://video360studio.ge",
  },
};

// Import components (we'll create these next)

import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { LanguageProvider } from "../context/LanguageContext";

export default function RootLayout({ children }) {
  // Language-aware SEO
  let currentLang = 'KA';
  if (typeof window !== 'undefined') {
    const lang = window.localStorage.getItem('lang');
    if (lang) currentLang = lang;
  }
  const seo = { KA: kaSEO, EN: enSEO, RU: ruSEO };
  const meta = seo[currentLang] || kaSEO;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Video360 Studio',
    description: 'საქართველოს ერთადერთი 360° bullet-time ვიდეო სტუდია',
    url: 'https://video360studio.ge',
    telephone: '+995555360360',
    email: 'info@video360studio.ge',
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
    serviceArea: {
      '@type': 'Country',
      name: 'Georgia'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '360° Video Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '360° Bullet-Time Video',
            description: 'Matrix Shot ეფექტები პროფესიონალური აღჭურვილობით'
          }
        }
      ]
    }
  };

  return (
    <html lang={currentLang.toLowerCase()}>
      <head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${roboto.variable} ${openSans.variable}`}>
        <LanguageProvider>
          <div className="layout-container">
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
