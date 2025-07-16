import SeoHead from '../components/SeoHead';
import kaSEO from './seo/ka';
import enSEO from './seo/en';
import ruSEO from './seo/ru';
import Main from '../components/main/main';

export default function HomePage() {
  return (
    <>
      <SeoHead seoKA={kaSEO} seoEN={enSEO} seoRU={ruSEO} />
      <Main />
    </>
  );
}
