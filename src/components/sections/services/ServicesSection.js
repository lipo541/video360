import React from 'react';
import './ServicesSection.css';
import Link from 'next/link';
import Image from 'next/image';

const ServicesSection = () => {
    const services = [
        {
            title: "360° ფოტო-ვიდეო სელფი შუშის ხიდზე",
            description: "პროფესიონალური bullet-time ეფექტი - თქვენ დგახართ სცენაზე, ხოლო კამერა მბრუნავ ღეროზე წრიულად გიღებთ.",
            slug: "glass-bridge",
            image: "/asset/glassbridge.jpg"
        },
        {
            title: "360° ფოტო-ვიდეო სელფი ნარიყალაზე",
            description: "სპეციალური 360° ფოტო-ზონა თქვენი ღონისძიებისთვის - სტუმრები მიიღებენ უნიკალურ ვიდეოებს.",
            slug: "narikala",
            image: "/asset/kartlisdeda.jpg"
        },
        {
            title: "360° ფოტო-ვიდეო სელფი რიყის პარკში",
            description: "ნელი მოძრაობის 360° ეფექტი - ვიდეო, რომელიც ეპიკურად ტრიალებს გარშემო და გიღებთ.",
            slug: "rike-park",
            image: "/asset/rikepark.jpg"
        },
    ];

    return (
        <section className="services-section">
            <h2 className="section-title">360° ფოტო-ვიდეო სელფი</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        {service.image && (
                            <div className="service-image">
                                <Image 
                                    src={service.image} 
                                    alt={service.title}
                                    width={300}
                                    height={200}
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <Link href={`/services/${service.slug}`} className="learn-more">დეტალურად</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
