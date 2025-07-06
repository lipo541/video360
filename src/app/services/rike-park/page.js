import styles from './rike-park.module.css';
import '../ServiceLocation.css';

export default function RikeParkService() {
  return (
    <div className="container">
      <div className={styles.rikeParkWrapper}>
        <div className={styles.rikeParkHeader}>
          <h1 className={styles.rikeParkTitle}>360° ფოტო-ვიდეო სელფი რიყის პარკში</h1>
          <p className={styles.rikeParkDesc}>ნელი მოძრაობის 360° ეფექტი — ვიდეო, რომელიც ეპიკურად ტრიალებს გარშემო და გიგებთ რიყის პარკის პანორამულ გარემოში.</p>
        </div>
        <div className={styles.rikeParkGallery}>
          <img className={styles.rikeParkImg} src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="რიყის პარკი თბილისი" />
          <img className={styles.rikeParkImg} src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" alt="360° ფოტო სელფი" />
          <img className={styles.rikeParkImg} src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" alt="თბილისის პანორამა" />
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
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className={styles.whatsappLogo}
            />
            <span className={styles.whatsappText}>
              დაგვიკავშირდით WhatsApp-ზე: <b>+995 555 12 34 56</b>
            </span>
          </a>
        </div>
        <div className="service-location">
          <h2>ლოკაცია რუკაზე</h2>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.555555555!2d44.813333!3d41.693888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cfd5555555%3A0xabcdefabcdef9999!2sRike%20Park!5e0!3m2!1sen!2sge!4v1691111111111!5m2!1sen!2sge"
              width="100%"
              height="100%"
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
