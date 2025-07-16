import SeoHead from '../../components/SeoHead';
import kaSEO from '../seo/services.ka';
import enSEO from '../seo/services.en';
import ruSEO from '../seo/services.ru';
import { useLanguage } from '../../context/LanguageContext';
import Services from '../../pages/services/services';


export default function ServicesPage() {
  return (
    <>
      <SeoHead seoKA={kaSEO} seoEN={enSEO} seoRU={ruSEO} />
      <Services />
    </>
  );
}
