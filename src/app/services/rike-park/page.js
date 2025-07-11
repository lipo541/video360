import styles from './rike-park.module.css';
import '../ServiceLocation.css';

export default function RikeParkService() {
  return (
    <div className={styles.container}>
      <div className={styles.rikeParkWrapper}>
        <div className={styles.rikeParkHeader}>
          <h1 className={styles.rikeParkTitle}>360° ფოტო-ვიდეო სელფი რიყის პარკში</h1>
          <p className={styles.rikeParkDesc}>ნელი მოძრაობის 360° ეფექტი — ვიდეო, რომელიც ეპიკურად ტრიალებს გარშემო და გიგებთ რიყის პარკის პანორამულ გარემოში.</p>
        </div>
        {/* ვიდეო და ფოტო სექციები column და ცენტრში, h1 სათაურით */}
        <div className={styles.rikeParkMediaSection}>
          <div className={styles.rikeParkMediaBlock}>
            <div className={styles.rikeParkGallery}>
              <div className={styles.rikeParkMediaLabel}>ვიდეო</div>
              <video className={styles.rikeParkImg} controls poster="/images/locations/rike-park.jpg">
                <source src="/images/locations/rikevideo.mp4" type="video/mp4" />
                თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ჩვენებას.
              </video>
            </div>
          </div>
          <div className={styles.rikeParkMediaBlock}>
            <div className={styles.rikeParkGallery}>
              <div className={styles.rikeParkMediaLabel}>ფოტო</div>
              <img className={styles.rikeParkImg} src="/images/locations/Rikepic.jpeg" alt="რიყის პარკი თბილისი" />
            </div>
          </div>
        </div>
        <div className={styles.rikeParkBenefits}>
          <div className={styles.rikeParkBenefit}>
            <div className={styles.rikeParkBenefitTitle}>360° უნიკალური გამოცდილება</div>
            <div className={styles.rikeParkBenefitDesc}>გადაიღე თავი და მეგობრები რიყის პარკში, სადაც კამერა გარშემო ტრიალებს და ქმნის ჰოლივუდურ ეფექტს.</div>
          </div>
          <div className={styles.rikeParkBenefit}>
            <div className={styles.rikeParkBenefitTitle}>პანორამული ხედები</div>
            <div className={styles.rikeParkBenefitDesc}>რიყის პარკიდან იხილავ თბილისს სრულიად ახალი პერსპექტივით — შენი ფოტო-ვიდეო იქნება ქალაქის ფონზე.</div>
          </div>
          <div className={styles.rikeParkBenefit}>
            <div className={styles.rikeParkBenefitTitle}>მომენტალური გაზიარება</div>
            <div className={styles.rikeParkBenefitDesc}>ვიდეო და ფოტოები მიიღე ადგილზე, მზად სოციალური ქსელებისთვის და მეგობრებთან გასაზიარებლად.</div>
          </div>
          <div className={styles.rikeParkBenefit}>
            <div className={styles.rikeParkBenefitTitle}>პროფესიონალური ხარისხი</div>
            <div className={styles.rikeParkBenefitDesc}>გამოიყენე უახლესი ტექნოლოგია და პროფესიონალი ოპერატორები შენი საუკეთესო კადრებისთვის.</div>
          </div>
        </div>
        <div className={styles.whatsappContact}>
          <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
            <img
              src="/images/locations/rikepark1.jpeg"
              alt="WhatsApp"
              className={styles.whatsappLogo}
            />
            <span className={styles.whatsappText}>
              დაგვიკავშირდით WhatsApp-ზე: <b>+995 593 51 68 42</b>
            </span>
          </a>
        </div>
        {/* ფასების სექცია */}
        <section className={styles.pricesSection}>
          <div className={styles.pricesHeader}>
            <h1 className={styles.pricesTitle}>ფასები</h1>
            <div className={styles.pricesSlogan}>გააზიარე შენი ემოცია!</div>
            <div className={styles.pricesDesc}>აირჩიე ინდივიდუალური ან ჯგუფური გადაღება საუკეთესო ხარისხით.</div>
          </div>
          <div className={styles.pricesList}>
            <div className={styles.priceCard}>
              <span className={styles.priceType}>ინდივიდუალური სელფი</span>
              <span className={styles.priceValue}>10 ლარი</span>
            </div>
            <div className={styles.priceCard}>
              <span className={styles.priceType}>ჯგუფური სელფი</span>
              <span className={styles.priceValue}>20 ლარი</span>
            </div>
          </div>
        </section>
        <div className="service-location">
          <h2>ლოკაცია რუკაზე</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.41730438255314!2d44.810815321720334!3d41.69162914178262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcdfd14a749%3A0x593f00660da6f3e4!2sXcaucasus%20-%20Paragliding%20in%20Tbilisi!5e0!3m2!1sru!2sge!4v1751884646629!5m2!1sru!2sge"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="რიყის პარკი რუკა"
            ></iframe>
          </div>
          <div><b>მისამართი:</b> რიყის პარკი, თბილისი</div>
        </div>
      </div>
    </div>
  );
}
