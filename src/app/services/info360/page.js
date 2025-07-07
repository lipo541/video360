import styles from './info360.module.css';
import Image from 'next/image';

export default function Info360Page() {
  return (
    <div className={styles.info360Wrapper}>
      <h1 className={styles.info360Title}>360° ფოტო-ვიდეო სელფის სრული სერვისები</h1>
      <p className={styles.info360Desc}>
        აღმოაჩინე ინოვაციური 360° ფოტო-ვიდეო სერვისები ნებისმიერი ღონისძიებისთვის — გააოცე სტუმრები, გაზარდე ჩართულობა და შექმენი დაუვიწყარი ემოციები!
      </p>
      <div className={styles.info360Gallery}>
        <Image src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80" width={400} height={270} alt="360° კამერა ივენთზე" className={styles.info360Img} />
        <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" width={400} height={270} alt="360° ვიდეო გადაღება" className={styles.info360Img} />
        <Image src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" width={400} height={270} alt="360° კამერის ტექნოლოგია" className={styles.info360Img} />
      </div>
      <section className={styles.info360Section}>
        <h2>სერვისები და ფასები</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.priceCard}>
            <div className={styles.priceTitle}>გაქირავება ივენთისთვის</div>
            <div className={styles.priceValue}>250₾ <span>/ საათი</span></div>
            <div className={styles.priceDesc}>სრულად ავტომატიზებული 360° კამერის სისტემა, ოპერატორით ან ოპერატორის გარეშე. იდეალურია ნებისმიერი მასშტაბის ღონისძიებისთვის.</div>
          </div>
          <div className={styles.priceCard}>
            <div className={styles.priceTitle}>360° კამერის გაყიდვა</div>
            <div className={styles.priceValue}>3200₾ <span>/ კომპლექტი</span></div>
            <div className={styles.priceDesc}>პროფესიონალური 360° კამერა, სრული ტექნიკური მხარდაჭერით და ტრენინგით. მიიღე შენი საკუთარი ინოვაციური ფოტო-ვიდეო სისტემა.</div>
          </div>
          <div className={styles.priceCard}>
            <div className={styles.priceTitle}>ტექნიკური მომსახურება</div>
            <div className={styles.priceValue}>100₾ <span>/ სერვისი</span></div>
            <div className={styles.priceDesc}>მონტაჟი, კონფიგურაცია და ადგილზე მხარდაჭერა. სწრაფი რეაგირება და პროფესიონალური მომსახურება.</div>
          </div>
          <div className={styles.priceCard}>
            <div className={styles.priceTitle}>ივენთების მენეჯმენტი</div>
            <div className={styles.priceValue}>150₾ <span>დან</span></div>
            <div className={styles.priceDesc}>მოქნილი პაკეტები, დროის არჩევის შესაძლებლობა და ინდივიდუალური მიდგომა თითოეული კლიენტისთვის.</div>
          </div>
        </div>
      </section>
      <section className={styles.info360Section}>
        <h2 className={styles.whyUsTitle}>რატომ ჩვენ?</h2>
        <div className={styles.whyUsGrid}>
          <div className={styles.whyUsCard}>
            <span className={styles.whyUsIcon}>💡</span>
            <div className={styles.whyUsText}>გამოცდილი ოპერატორები და ინოვაციური ტექნოლოგიები</div>
          </div>
          <div className={styles.whyUsCard}>
            <span className={styles.whyUsIcon}>⚡</span>
            <div className={styles.whyUsText}>სწრაფი მონტაჟი და ადგილზე მხარდაჭერა</div>
          </div>
          <div className={styles.whyUsCard}>
            <span className={styles.whyUsIcon}>💸</span>
            <div className={styles.whyUsText}>მოქნილი და გამჭვირვალე ფასები</div>
          </div>
          <div className={styles.whyUsCard}>
            <span className={styles.whyUsIcon}>🎓</span>
            <div className={styles.whyUsText}>სრული ტექნიკური კონსულტაცია და ტრენინგი</div>
          </div>
        </div>
      </section>
      <section className={styles.info360Section}>
        <h2 className={styles.contactTitle}>დაგვიკავშირდით ან ეწვიეთ ლოკაციას</h2>
        <div className={styles.contactGrid}>
          <a href="https://wa.me/+995593516842" target="_blank" rel="noopener noreferrer" className={styles.whatsappSimpleBtn}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className={styles.whatsappSimpleLogo} />
            <span>WhatsApp: <b>+995 593 51 68 42</b></span>
          </a>
          <div className={styles.mapCard}>
            <div className={styles.mapTitle}>რიყის პარკის ლოკაცია</div>
            <div className={styles.mapFrameWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372.41730438255314!2d44.810815321720334!3d41.69162914178262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440dcdfd14a749%3A0x593f00660da6f3e4!2sXcaucasus%20-%20Paragliding%20in%20Tbilisi!5e0!3m2!1sru!2sge!4v1751884646629!5m2!1sru!2sge"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="რიყის პარკი რუკა"
              ></iframe>
            </div>
            <div className={styles.mapAddress}><b>მისამართი:</b> რიყის პარკი, თბილისი</div>
          </div>
        </div>
      </section>
    </div>
  );
}
