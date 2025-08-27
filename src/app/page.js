import { buildPageMetadata } from '../lib/seo/metaHelper';
import { buildBreadcrumbLd, buildWebPageLd } from '../lib/seo/structuredData';
import Main from '../components/main/main';

export const dynamic = 'force-static';
export async function generateMetadata(props) {
  const params = await props?.params;
  const locale = params?.locale || 'ka';
  return buildPageMetadata(locale, 'home', '/');
}

export default function HomePage({ params }) {
  const locale = params?.locale || 'ka';
  const breadcrumb = buildBreadcrumbLd(locale, [
    { key: 'home', href: '/' }
  ]);
  const webPage = buildWebPageLd(locale, locale === 'ka' ? 'მთავარი' : locale === 'ru' ? 'Главная' : 'Home', '/');
  return (
    <>
      <Main />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
    </>
  );
}
