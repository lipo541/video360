import React from 'react';
import './SafetySection.css';

const SafetySection = () => {
    const safetyPoints = [
        {
            title: "გაქირავება ივენთებისთვის და წვეულებებისთვის",
            description: "ვიყენებთ სრულად ავტომატიზებულ 360° კამერის სისტემას დასინქრონებული მოტორით.",
        },
        {
            title: "360° ფოტო-ვიდეო სელფის გაყიდვა",
            description: "ჩვენი ოპერატორები 360° ვიდეო ეფექტების სპეციალისტები არიან დიდი გამოცდილებით.",
        },
        {
            title: "ლოკაციებისა და ივენთების მენეჯმენტი",
            description: "ღონისძიებისთვის სხვადასხვა საათის ოპციები — ერთი საათიდან მთელი დღის პაკეტებამდე.",
        },
    ];

    return (
        <section className="safety-section">
            <div className="safety-card">
                <h2 className="safety-title">360° ფოტო-ვიდეო სელფის გაქირავება და გაყიდვა</h2>
                <div className="safety-desc">
                    ჩვენი სერვისი იდეალურია როგორც ივენთებისთვის, ასევე ინდივიდუალური მომხმარებლებისთვის. მიიღეთ პროფესიონალური მომსახურება, ინოვაციური ტექნოლოგიები და მოქნილი პაკეტები.
                </div>
                <ul className="safety-list">
                    {safetyPoints.map((point, index) => (
                        <li className="safety-list-item" key={index}>
                            <span className="safety-list-title">{point.title}</span>
                            <span className="safety-list-desc">{point.description}</span>
                        </li>
                    ))}
                </ul>
                <a href="/services/info360" className="safety-more-btn">იხილეთ სრული ინფორმაცია</a>
            </div>
        </section>
    );
};

export default SafetySection;
