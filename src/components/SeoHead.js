import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function SeoHead({ seoKA, seoEN, seoRU }) {
  let currentLang = "KA";
  if (typeof window !== "undefined") {
    const lang = window.localStorage.getItem("lang");
    if (lang && ["KA", "EN", "RU"].includes(lang)) currentLang = lang;
  }
  const seo = { KA: seoKA, EN: seoEN, RU: seoRU };
  const meta = seo[currentLang] || seoKA;
  const url = typeof window !== "undefined" ? window.location.href : "";
  return (
    <>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      {meta.keywords && <meta name="keywords" content={meta.keywords} />}
      {/* Open Graph */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      {/* Canonical */}
      {url && <link rel="canonical" href={url} />}
      {/* Basic structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: meta.title,
            description: meta.description,
            url: url,
          }),
        }}
      />
    </>
  );
}
