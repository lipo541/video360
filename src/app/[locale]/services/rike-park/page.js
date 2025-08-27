import ServicePage from '../../../services/rike-park/page';
import { buildPageMetadata } from '../../../../lib/seo/metaHelper';

export const dynamic = 'force-static';
export async function generateMetadata(props) {
	const params = await props?.params;
	const locale = params?.locale || 'ka';
	return buildPageMetadata(locale,'services/rike-park','/services/rike-park','article');
}

export default function RikeParkLocaleWrapper() {
	return <ServicePage />;
}
