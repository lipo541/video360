import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
    const services = [
        {
            title: "360° ფოტო-ვიდეო სელფი შუშის ხიდზე",
            description: "პროფესიონალური bullet-time ეფექტი - თქვენ დგახართ სცენაზე, ხოლო კამერა მბრუნავ ღეროზე წრიულად გიღებთ.",
        },
        {
            title: "360° ფოტო-ვიდეო სელფი ნარიყალაზე",
            description: "სპეციალური 360° ფოტო-ზონა თქვენი ღონისძიებისთვის - სტუმრები მიიღებენ უნიკალურ ვიდეოებს.",
        },
        {
            title: "360° ფოტო-ვიდეო სელფი რიყის პარკში",
            description: "ნელი მოძრაობის 360° ეფექტი - ვიდეო, რომელიც ეპიკურად ტრიალებს გარშემო და გიღებთ.",
        },
    ];

    return (
        <section className="services-section">
            <h2 className="section-title">360° ფოტო-ვიდეო სელფი</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <button className="learn-more">დეტალურად</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
