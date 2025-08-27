import ServicePage from '../../../services/glass-bridge/page';
import { buildPageMetadata } from '../../../../lib/seo/metaHelper';

export const dynamic = 'force-static';
export async function generateMetadata(props) {
	const params = await props?.params;
	const locale = params?.locale || 'ka';
	return buildPageMetadata(locale,'services/glass-bridge','/services/glass-bridge','article');
}

export default function GlassBridgeLocaleWrapper() {
	return <ServicePage />;
}
