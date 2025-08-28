import { buildPageMetadata } from '../../lib/seo/metaHelper';
import Services from '../../pages/services/services';
import { buildBreadcrumbLd, buildWebPageLd } from '../../lib/seo/structuredData';


export const dynamic = 'force-static';
export async function generateMetadata(props) {
  const params = await props?.params;
  const locale = params?.locale || 'ka';
  return buildPageMetadata(locale,'services','/services');
}

export default async function ServicesPage(props) {
  const rawParams = props?.params;
  const resolved = typeof rawParams?.then === 'function' ? await rawParams : rawParams;
  const locale = resolved?.locale || 'ka';
  const breadcrumb = buildBreadcrumbLd(locale,[
    { key:'home', href:'/' },
    { key:'services', href:'/services' }
  ]);
  const title = locale === 'ka' ? 'სერვისები' : locale === 'ru' ? 'Услуги' : 'Services';
  const webPage = buildWebPageLd(locale,title,'/services');
  return <>
    <Services />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
  </>;
}
