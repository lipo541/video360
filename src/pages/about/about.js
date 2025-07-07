import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-title">ჩვენ შესახებ</h1>
        <p className="about-lead">
          Video360 Studio არის ინოვაციური კომპანია, რომელიც საქართველოში 360° ფოტო-ვიდეო სერვისების სფეროში ლიდერია. ჩვენ ვქმნით დაუვიწყარ ემოციებს როგორც კერძო, ისე კორპორატიული ღონისძიებებისთვის, ვთავაზობთ სრულ ტექნიკურ მხარდაჭერას და ვნერგავთ თანამედროვე ტექნოლოგიებს.
        </p>
      </div>
      <div className="about-content">
        <div className="about-section about-team">
          <div className="section-icon">👥</div>
          <h2>ვინ ვართ ჩვენ?</h2>
          <p>
            ჩვენი გუნდი შედგება გამოცდილი ოპერატორებისგან და კრეატიული პროფესიონალებისგან, რომლებიც მუდმივად ავითარებენ 360° ვიდეო ეფექტებს, bullet-time ტექნოლოგიას და ინოვაციურ ფოტო-ვიდეო პროდუქტებს. ჩვენთვის მთავარი ღირებულებაა ხარისხი, კლიენტზე ორიენტირებული სერვისი და ინდივიდუალური მიდგომა.
          </p>
        </div>
        <div className="about-section about-services">
          <div className="section-icon">🎯</div>
          <h2>რას გთავაზობთ?</h2>
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon">📹</div>
              <h3>360° ვიდეო/ფოტო სერვისები</h3>
              <p>უნიკალური bullet-time ეფექტი ნებისმიერი ღონისძიებისთვის</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🛒</div>
              <h3>გაქირავება და გაყიდვა</h3>
              <p>პროფესიონალური აპარატურა და სრული ტექნიკური მხარდაჭერა</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🎪</div>
              <h3>ივენთების მენეჯმენტი</h3>
              <p>მოქნილი პაკეტები, სწრაფი მონტაჟი და ადგილზე მომსახურება</p>
            </div>
            <div className="service-item">
              <div className="service-icon">🎓</div>
              <h3>კონსულტაცია და ტრენინგი</h3>
              <p>დაგეხმარებით სწორი გადაწყვეტილების მიღებაში და ტექნოლოგიის ათვისებაში</p>
            </div>
          </div>
        </div>
        <div className="about-section about-whyus">
          <div className="section-icon">⭐</div>
          <h2>რატომ Video360 Studio?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <span>ერთადერთი 360° Matrix Shot სტუდია საქართველოში</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤖</div>
              <span>სრულიად ავტომატიზებული და ინოვაციური ტექნოლოგია</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <span>პროფესიონალური აღჭურვილობა და გამოცდილი გუნდი</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💰</div>
              <span>მომხმარებელზე მორგებული, გამჭვირვალე ფასები</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <span>სწრაფი რეაგირება და ინდივიდუალური მიდგომა</span>
            </div>
          </div>
        </div>
        <div className="about-section about-contact">
          <div className="section-icon">📞</div>
          <h2>დაგვიკავშირდით</h2>
          <div className="whatsapp-row">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="about-whatsapp-logo" />
            <a href="https://wa.me/+995593516842" target="_blank" rel="noopener noreferrer" className="about-whatsapp-btn">
              <span className="whatsapp-number">+995 593 51 68 42</span>
            </a>
          </div>
        </div>
        <div className="location-section">
          <div className="section-icon">📍</div>
          <h2>ჩვენი მდებარეობა</h2>
          <p>სტუდია მდებარეობს თბილისის ცენტრში — მოსახერხებელი მისასვლელით და მყუდრო გარემოთი. გელოდებით, რომ ერთად შევქმნათ თქვენი უნიკალური 360° გამოცდილება!</p>
          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2844289548346!2d44.7826924!3d41.7151377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzU0LjUiTiA0NMKwNDYnNTcuNyJF!5e0!3m2!1sen!2sge!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Video360 Studio Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
