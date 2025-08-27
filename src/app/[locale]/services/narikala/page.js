import ServicePage from '../../../services/narikala/page';
import { buildPageMetadata } from '../../../../lib/seo/metaHelper';

export const dynamic = 'force-static';
export async function generateMetadata(props) {
	const params = await props?.params;
	const locale = params?.locale || 'ka';
	return buildPageMetadata(locale,'services/narikala','/services/narikala','article');
}

export default function NarikalaLocaleWrapper() {
	return <ServicePage />;
}
