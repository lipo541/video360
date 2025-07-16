import SeoHead from '../../components/SeoHead';
import kaSEO from '../seo/about.ka';
import enSEO from '../seo/about.en';
import ruSEO from '../seo/about.ru';
import About from '../../pages/about/about';

export default function AboutPage() {
  return (
    <>
      <SeoHead seoKA={kaSEO} seoEN={enSEO} seoRU={ruSEO} />
      <About />
    </>
  );
}
