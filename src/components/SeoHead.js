import React from "react";
import { useLanguage } from "../context/LanguageContext";

// Slimmed SEO head: removes <title> & canonical to avoid duplication with Next metadata API.
export default function SeoHead({ seoKA, seoEN, seoRU }) {
  const { currentLang } = useLanguage?.() || { currentLang: { code: 'ka' } };
  const map = { ka: seoKA, en: seoEN, ru: seoRU };
  const meta = map[currentLang.code] || seoKA;
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: meta.title,
            description: meta.description,
            url: url || undefined,
          }),
        }}
      />
    </>
  );
}
