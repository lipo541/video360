import { buildPageMetadata } from '../../lib/seo/metaHelper';
import ContactSection from '../../components/sections/contact/ContactSection';
import { buildBreadcrumbLd, buildWebPageLd } from '../../lib/seo/structuredData';

export const dynamic = 'force-static';
export async function generateMetadata(props) {
  const params = await props?.params;
  const locale = params?.locale || 'ka';
  return buildPageMetadata(locale,'contact','/contact');
}

export default async function ContactPage({ params }) {
  const { locale = 'ka' } = await params || {};
  const breadcrumb = buildBreadcrumbLd(locale,[
    { key:'home', href:'/' },
    { key:'contact', href:'/contact' }
  ]);
  const title = locale === 'ka' ? 'კონტაქტი' : locale === 'ru' ? 'Контакты' : 'Contact';
  const webPage = buildWebPageLd(locale,title,'/contact');
  return <>
    <ContactSection />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
  </>;
}
