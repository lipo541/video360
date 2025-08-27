import { buildPageMetadata } from '../../lib/seo/metaHelper';
import About from '../../pages/about/about';
import { buildBreadcrumbLd, buildWebPageLd } from '../../lib/seo/structuredData';

export const dynamic = 'force-static';

export async function generateMetadata(props) {
  const params = await props?.params;
  const locale = params?.locale || 'ka';
  return buildPageMetadata(locale, 'about', '/about');
}

export default function AboutPage({ params }) {
  const locale = params?.locale || 'ka';
  const breadcrumb = buildBreadcrumbLd(locale,[
    { key:'home', href:'/' },
    { key:'about', href:'/about' }
  ]);
  const title = locale === 'ka' ? 'ჩვენ შესახებ' : locale === 'ru' ? 'О нас' : 'About';
  const webPage = buildWebPageLd(locale,title,'/about');
  return <>
    <About />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
  </>;
}
