import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import './SocialSection.css';

const SocialSection = () => {
    const socialLinks = [
        { icon: <FaFacebook />, label: "Facebook", link: "#" },
        { icon: <FaInstagram />, label: "Instagram", link: "#" },
        { icon: <FaTiktok />, label: "TikTok", link: "#" },
    ];

    return (
        <section className="social-section">
            <h2 className="section-title">ნახეთ ჩვენი 360° ვიდეოები</h2>
            <p>გაეცანით ჩვენს 360° bullet-time ვიდეოებს, ნახეთ რეალური კლიენტების გადაღებები და მიიღეთ ინსპირაცია თქვენი ღონისძიებისთვის</p>
            <div className="social-icons">
                {socialLinks.map((social, index) => (
                    <a href={social.link} className={`social-link ${social.label.toLowerCase()}`} key={index}>
                        {social.icon} {social.label}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialSection;
