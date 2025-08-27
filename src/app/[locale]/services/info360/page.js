import ServicePage from '../../../services/info360/page';
import { buildPageMetadata } from '../../../../lib/seo/metaHelper';

export const dynamic = 'force-static';
export async function generateMetadata(props){
  const params = await props?.params; 
  const locale = params?.locale || 'ka';
  return buildPageMetadata(locale,'services/info360','/services/info360','article');
}

export default function Info360LocaleWrapper(){
  return <ServicePage />;
}
