import React from 'react';
import './SafetySection.css';

const SafetySection = () => {
    const safetyPoints = [
        {
            title: "360° ფოტო-ვიდეო სელფის გაქირავება ივენთებისთვის და წველებისთვის",
            description: "ვიყენებთ სრულად ავტომატიზებულ 360° კამერის სისტემას დასინქრონებული მოტორით.",
        },
        {
            title: "360° ფოტო-ვიდეო სელფის გაყიდვა",
            description: "ჩვენი ოპერატორები 360° ვიდეო ეფექტების სპეციალისტები არიან დიდი გამოცდილებით.",
        },
        {
            title: "360° ფოტო-ვიდეო სელფის ლოკაციებისა და ივენთების მენეჯერები",
            description: "ღონისძიებისთვის სხვადასხვა საათის ოპციები - ერთი საათიდან მთელი დღის პაკეტებამდე.",
        },
    ];

    return (
        <section className="safety-section">
            <div className="safety-content">
                <h2 className="section-title">360° ფოტო-ვიდეო სელფის გაქირავება-გაყიდვა</h2>
                <div className="safety-points">
                    {safetyPoints.map((point, index) => (
                        <div className="safety-point" key={index}>
                            <h3>{point.title}</h3>
                            <p>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SafetySection;
