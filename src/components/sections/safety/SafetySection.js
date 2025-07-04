import React from 'react';
import './SafetySection.css';

const SafetySection = () => {
    const safetyPoints = [
        {
            title: "პროფესიონალური აღჭურვილობა",
            description: "ვიყენებთ სრულად ავტომატიზებულ 360° კამერის სისტემას დასინქრონებული მოტორით.",
        },
        {
            title: "გამოცდილი ოპერატორები",
            description: "ჩვენი ოპერატორები 360° ვიდეო ეფექტების სპეციალისტები არიან დიდი გამოცდილებით.",
        },
        {
            title: "მოქნილი პაკეტები",
            description: "ღონისძიებისთვის სხვადასხვა საათის ოპციები - ერთი საათიდან მთელი დღის პაკეტებამდე.",
        },
    ];

    return (
        <section className="safety-section">
            <div className="safety-content">
                <h2 className="section-title">ტექნოლოგია და ხარისხი</h2>
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
