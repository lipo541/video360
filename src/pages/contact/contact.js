import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>კონტაქტი</h1>
      <p>დაგვიკავშირდით და შეუკვეთეთ თქვენი 360° ვიდეო ეფექტი!</p>
      
      <div className="contact-content">
        <div className="contact-info">
          <h2>საკონტაქტო ინფორმაცია</h2>
          <ul>
            <li>📞 ტელ: +995 555 360 360</li>
            <li>📧 ელ.ფოსტა: info@video360studio.ge</li>
            <li>📍 მისამართი: თბილისი, საქართველო</li>
          </ul>
          
          <h2>360° სტუდიოს სამუშაო რეჟიმი</h2>
          <p>ორშაბათი - კვირა: 10:00 - 22:00 (ღონისძიებები შესაძლებელია ღამით)</p>
        </div>
        
        <div className="map-container">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2736735469876!2d44.78339631559843!3d41.7151377792235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472cfb82f7c87%3A0x8b4d24e2b1d1d6e9!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sge!4v1646123456789!5m2!1sen!2sge"
              width="100%"
              height="400"
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
  );
};

export default Contact;
