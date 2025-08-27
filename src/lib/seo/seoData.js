// Aggregated SEO data (phase 1). Non-destructive: original files remain.
// Later pages will import from here via generateMetadata.

export const seoData = {
  ka: {
    home: {
      title: "360° ვიდეო და ფოტო სერვისი | Video360 Studio",
      description: "სრულფასოვანი 360° ვიდეო და ფოტო გადაღება, ვირტუალური ტურები, ინტერაქტიული გამოცდილება, ქირავდება და იყიდება 360° ვიდეო ბუტკა.",
    },
    about: {
      title: "ჩვენ შესახებ | Video360 Studio",
      description: "გაიცანით Video360 Studio გუნდი და ჩვენი 360° ინოვაციური სერვისები.",
    },
    services: {
      title: "სერვისები | Video360 Studio",
      description: "360° Bullet-time, Virtual Tours, Interactive Booth და სხვა სერვისები.",
    },
    contact: {
      title: "კონტაქტი | Video360 Studio",
      description: "დაგვიკავშირდით 360° ვიდეო და ფოტო სერვისებისთვის საქართველოში.",
    },
    'services/narikala': {
      title: "ნარიყალას პანორამა 360° | Video360 Studio",
      description: "ნარიყალას ლოკაციაზე 360° bullet-time და დინამიკური ვიზუალური გამოცდილება.",
    },
    'services/glass-bridge': {
      title: "Glass Bridge 360° გამოცდილება | Video360 Studio",
      description: "გამჭვირვალე ხიდის ეპიკური 360° ვიდეო და ფოტო გადაღება.",
    },
    'services/rike-park': {
      title: "რიყის პარკი 360° | Video360 Studio",
      description: "რიყის პარკის დინამიკური 360° ვიდეო და ფოტოკონტენტი ღონისძიებებისთვის.",
    },
    'services/info360': {
      title: "Info360 360° პაკეტები | Video360 Studio",
      description: "Info360 მომსახურება - ფასები, პაკეტები და რატომ ჩვენ 360° გამოცდილებისთვის.",
    },
  },
  en: {
    home: {
      title: "360° Video & Photo Service | Video360 Studio",
      description: "Full 360° video and photo shooting, virtual tours, interactive experience, 360° video booth for rent and sale.",
    },
    about: {
      title: "About Us | Video360 Studio",
      description: "Meet the Video360 Studio team and our innovative 360° services.",
    },
    services: {
      title: "Services | Video360 Studio",
      description: "360° Bullet-time, Virtual Tours, Interactive Booth and more services.",
    },
    contact: {
      title: "Contact | Video360 Studio",
      description: "Get in touch for 360° video and photo services in Georgia.",
    },
    'services/narikala': {
      title: "Narikala Panorama 360° | Video360 Studio",
      description: "Immersive 360° bullet-time and dynamic capture at Narikala location.",
    },
    'services/glass-bridge': {
      title: "Glass Bridge 360° Experience | Video360 Studio",
      description: "Epic transparent bridge 360° video and photo capture.",
    },
    'services/rike-park': {
      title: "Rike Park 360° | Video360 Studio",
      description: "Dynamic 360° video and photo content in Rike Park for events.",
    },
    'services/info360': {
      title: "Info360 Packages | Video360 Studio",
      description: "Info360 service - pricing, packages and why choose us for 360° experiences.",
    },
  },
  ru: {
    home: {
      title: "360° Видео и Фото Сервис | Video360 Studio",
      description: "Полноценная 360° видеосъемка и фотосъемка, виртуальные туры, интерактивный опыт, 360° видеобудка в аренду и на продажу.",
    },
    about: {
      title: "О нас | Video360 Studio",
      description: "Познакомьтесь с командой Video360 Studio и нашими инновационными 360° сервисами.",
    },
    services: {
      title: "Услуги | Video360 Studio",
      description: "360° Bullet-time, виртуальные туры, интерактивная будка и другие услуги.",
    },
    contact: {
      title: "Контакты | Video360 Studio",
      description: "Свяжитесь с нами для 360° видео и фото услуг в Грузии.",
    },
    'services/narikala': {
      title: "Нарикала Панорама 360° | Video360 Studio",
      description: "Иммерсивная 360° bullet-time и динамическая съемка на локации Нарикала.",
    },
    'services/glass-bridge': {
      title: "Стеклянный Мост 360° | Video360 Studio",
      description: "Эпическая 360° видео и фотосъемка на прозрачном мосту.",
    },
    'services/rike-park': {
      title: "Рике Парк 360° | Video360 Studio",
      description: "Динамический 360° видео и фотоконтент в парке Рике для мероприятий.",
    },
    'services/info360': {
      title: "Info360 Пакеты | Video360 Studio",
      description: "Сервис Info360 — цены, пакеты и почему выбрать нас для 360° опыта.",
    },
  },
};

export function getSeo(locale, page) {
  const loc = (locale || 'ka').toLowerCase();
  return seoData[loc]?.[page] || seoData.ka?.[page] || {};
}
