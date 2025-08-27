// Nested locale layout must NOT render <html> or <body>; root layout already does that.
// Keep it minimal to avoid duplicate structure.
export default function LocaleLayout({ children }) {
  return <>{children}</>;
}