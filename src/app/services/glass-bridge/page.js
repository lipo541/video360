import styles from './glass-bridge.module.css';
import '../ServiceLocation.css';

export default function GlassBridgeService() {
  return (
    <div className="container">
      <div className={styles.glassBridgeWrapper}>
        <div className={styles.glassBridgeHeader}>
          <h1 className={styles.glassBridgeTitle}>360° ფოტო-ვიდეო სელფი შუშის ხიდზე</h1>
          <p className={styles.glassBridgeDesc}>
            აღმოაჩინე თბილისის ერთ-ერთი ყველაზე შთამბეჭდავი ლოკაცია სრულიად ახალი კუთხით! ჩვენი 360° ფოტო-ვიდეო სელფი შუშის ხიდზე გაძლევს უნიკალურ შესაძლებლობას, გადაიღო თავი და მეგობრები პროფესიონალური bullet-time ეფექტით, პანორამული ხედებითა და დაუვიწყარი ემოციებით.
          </p>
        </div>

        {/* ვიდეოს ბლოკი */}
        <div className={styles.glassBridgeGallery}>
          <div className={styles.glassBridgeMediaLabel}>ვიდეო</div>
          <video className={styles.glassBridgeImg} controls poster="/images/locations/most-mira1.jpg" style={{ aspectRatio: 'unset', objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '600px', background: '#f8fafc' }}>
            <source src="/images/locations/glassvideo.mp4" type="video/mp4" />
            თქვენი ბრაუზერი არ უჭერს მხარს ვიდეოს ჩვენებას.
          </video>
        </div>
        {/* სურათის ბლოკი */}
        <div className={styles.glassBridgeGallery}>
          <div className={styles.glassBridgeMediaLabel}>ფოტო</div>
          <img className={styles.glassBridgeImg} src="/images/locations/glass.jpeg" alt="შუშის ხიდი თბილისი" />
        </div>

        <div className={styles.glassBridgeBenefits}>
          <div className={styles.glassBridgeBenefit}>
            <div className={styles.glassBridgeBenefitTitle}>360° უნიკალური გამოცდილება</div>
            <div className={styles.glassBridgeBenefitDesc}>გადაიღე თავი და მეგობრები შუშის ხიდზე, სადაც კამერა გარშემო ტრიალებს და ქმნის ჰოლივუდურ ეფექტს.</div>
          </div>
          <div className={styles.glassBridgeBenefit}>
            <div className={styles.glassBridgeBenefitTitle}>პანორამული ხედები</div>
            <div className={styles.glassBridgeBenefitDesc}>შუშის ხიდიდან იხილავ თბილისს სრულიად ახალი პერსპექტივით — შენი ფოტო-ვიდეო იქნება ქალაქის ფონზე.</div>
          </div>
          <div className={styles.glassBridgeBenefit}>
            <div className={styles.glassBridgeBenefitTitle}>მომენტალური გაზიარება</div>
            <div className={styles.glassBridgeBenefitDesc}>ვიდეო და ფოტოები მიიღე ადგილზე, მზად სოციალური ქსელებისთვის და მეგობრებთან გასაზიარებლად.</div>
          </div>
          <div className={styles.glassBridgeBenefit}>
            <div className={styles.glassBridgeBenefitTitle}>პროფესიონალური ხარისხი</div>
            <div className={styles.glassBridgeBenefitDesc}>გამოიყენე უახლესი ტექნოლოგია და პროფესიონალი ოპერატორები შენი საუკეთესო კადრებისთვის.</div>
          </div>
        </div>

        <div className={styles.whatsappContact}>
          <a href="https://wa.me/+995593516842" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.987654321!2d44.809876!3d41.693210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cfd9876543%3A0xabcdefabcdef5678!2sBridge%20of%20Peace!5e0!3m2!1sen!2sge!4v1689999999999!5m2!1sen!2sge"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="შუშის ხიდი რუკა"
            ></iframe>
          </div>
          <div><b>მისამართი:</b> შუშის ხიდი, თბილისი</div>
        </div>
      </div>
    </div>
  );
}
