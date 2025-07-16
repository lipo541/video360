import SeoHead from '../../components/SeoHead';
import kaSEO from '../seo/contact.ka';
import enSEO from '../seo/contact.en';
import ruSEO from '../seo/contact.ru';
import Contact from '../../pages/contact/contact';

export default function ContactPage() {
  return (
    <>
      <SeoHead seoKA={kaSEO} seoEN={enSEO} seoRU={ruSEO} />
      <Contact />
    </>
  );
}
