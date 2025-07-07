import styles from './narikala.module.css';
import '../ServiceLocation.css';

export default function NarikalaService() {
  return (
    <div className="container">
      <div className={styles.narikalaWrapper}>
        <div className={styles.narikalaHeader}>
          <h1 className={styles.narikalaTitle}>360° ფოტო-ვიდეო სელფი ნარიყალაზე</h1>
          <p className={styles.narikalaDesc}>სპეციალური 360° ფოტო-ზონა თქვენი ღონისძიებისთვის — სტუმრები იღებენ უნიკალური ვიდეოებს ნარიყალას ულამაზეს ფონზე.</p>
        </div>
        <div className={styles.narikalaGallery}>
          <img className={styles.narikalaImg} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="ნარიყალა თბილისი" />
          <img className={styles.narikalaImg} src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="360° ფოტო სელფი" />
          <img className={styles.narikalaImg} src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" alt="თბილისის პანორამა" />
        </div>
        <div className={styles.narikalaBenefits}>
          <div className={styles.narikalaBenefit}>
            <div className={styles.narikalaBenefitTitle}>360° უნიკალური გამოცდილება</div>
            <div className={styles.narikalaBenefitDesc}>გადაიღე თავი და მეგობრები ნარიყალაზე, სადაც კამერა გარშემო ტრიალებს და ქმნის ჰოლივუდურ ეფექტს.</div>
          </div>
          <div className={styles.narikalaBenefit}>
            <div className={styles.narikalaBenefitTitle}>პანორამული ხედები</div>
            <div className={styles.narikalaBenefitDesc}>ნარიყალადან იხილავ თბილისს სრულიად ახალი პერსპექტივით — შენი ფოტო-ვიდეო იქნება ქალაქის ფონზე.</div>
          </div>
          <div className={styles.narikalaBenefit}>
            <div className={styles.narikalaBenefitTitle}>მომენტალური გაზიარება</div>
            <div className={styles.narikalaBenefitDesc}>ვიდეო და ფოტოები მიიღე ადგილზე, მზად სოციალური ქსელებისთვის და მეგობრებთან გასაზიარებლად.</div>
          </div>
          <div className={styles.narikalaBenefit}>
            <div className={styles.narikalaBenefitTitle}>პროფესიონალური ხარისხი</div>
            <div className={styles.narikalaBenefitDesc}>გამოიყენე უახლესი ტექნოლოგია და პროფესიონალი ოპერატორები შენი საუკეთესო კადრებისთვის.</div>
          </div>
        </div>
        <div className={styles.whatsappContact}>
          <a href="https://wa.me/995555123456" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
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
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ნარიყალა რუკა"
            ></iframe>
          </div>
          <div><b>მისამართი:</b> ნარიყალა, თბილისი</div>
        </div>
      </div>
    </div>
  );
}
