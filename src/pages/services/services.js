import React from 'react';
import './services.css';

const Services = () => {
  return (
    <div className="services-container">
      <h1>360° ვიდეო სერვისები</h1>
      <p>ჩვენი ინოვაციური მომსახურება მოიცავს:</p>
      
      <div className="services-content">
        <div className="service-item">
          <h2>360° Matrix Shot ეფექტი</h2>
          <p>ჰოლივუდური bullet-time ეფექტი - კამერა წრიულად ტრიალებს და იღებს უნიკალურ slow-motion ვიდეოს</p>
        </div>
        
        <div className="service-item">
          <h2>ღონისძიების ფოტო-ზონა</h2>
          <p>სპეციალური 360° სტუდია თქვენი ღონისძიებისთვის - სტუმრები მიიღებენ უნიკალურ კონტენტს</p>
        </div>
        
        <div className="service-item">
          <h2>მოქნილი პაკეტები</h2>
          <p>ერთი საათიდან მთელი დღის ღონისძიებამდე - შექმენით წარუშლელი მოგონებები</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
