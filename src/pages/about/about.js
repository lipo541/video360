import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>ჩვენ შესახებ</h1>
      <p>Video360 Studio არის პიონერი 360° bullet-time ვიდეო ეფექტების სფეროში საქართველოში.</p>
      
      <div className="about-content">
        <h2>ჩვენი სპეციალობა</h2>
        <p>ვქმნით ეპიკურ 360° ვიდეო ეფექტებს, სადაც კამერა წრიულად ტრიალებს თქვენ გარშემო და იღებს უნიკალურ slow-motion ვიდეოს.</p>
        
        <h2>რატომ აირჩიოთ ჩვენ</h2>
        <ul>
          <li>ერთადერთი 360° Matrix Shot სტუდია საქართველოში</li>
          <li>პროფესიონალური აღჭურვილობა</li>
          <li>ღონისძიებებისა და მარკეტინგული კამპანიებისთვის</li>
        </ul>
        
        <div className="location-section">
          <h2>ჩვენი მდებარეობა</h2>
          <p>Video360 Studio მდებარეობს თბილისის ცენტრში, სადაც მყუდროდ და კომფორტულად შეგიძლიათ ჩაიწეროთ თქვენი 360° ვიდეო.</p>
          
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
