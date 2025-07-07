'use client';
import React, { useState, useEffect } from 'react';
import './LocationManagers.css';

const managers = [
  // დამფუძნებლები
  {
    name: 'გიორგი ბერიძე',
    role: 'დამფუძნებელი',
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    desc: '360° ინდუსტრიის პიონერი საქართველოში, ინოვაციური ხედვითა და მრავალწლიანი გამოცდილებით.',
    age: 38,
    experience: '15 წელი 360° ტექნოლოგიებში',
    bio: 'გიორგი ბერიძე არის Video360 Studio-ს დამფუძნებელი და ტექნოლოგიური ლიდერი. მისი ინოვაციური მიდგომა და მრავალწლიანი გამოცდილება უზრუნველყოფს კომპანიის მუდმივ განვითარებას და ხარისხიან მომსახურებას.',
    phone: '+995 599 11 22 33'
  },
  {
    name: 'ნინო ქავთარაძე',
    role: 'დამფუძნებელი',
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    desc: 'კრეატიული ლიდერი და გუნდის სულისჩამდგმელი, პასუხისმგებელი ხარისხსა და განვითარებაზე.',
    age: 35,
    experience: '12 წელი მენეჯმენტსა და კრეატიულ ინდუსტრიაში',
    bio: 'ნინო ქავთარაძე უზრუნველყოფს Video360 Studio-ს კრეატიულ მიმართულებას და ხარისხის კონტროლს. მისი ლიდერობით კომპანია მუდმივად ავითარებს ახალ პროდუქტებს.',
    phone: '+995 599 22 33 44'
  },
  // მთავარი მენეჯერები
  {
    name: 'ლევან მელიქიძე',
    role: 'მთავარი მენეჯერი',
    img: 'https://randomuser.me/api/portraits/men/13.jpg',
    desc: 'ოპერაციული პროცესების კოორდინატორი და გუნდის მოტივატორი.',
    age: 32,
    experience: '8 წელი ოპერაციულ მენეჯმენტში',
    bio: 'ლევანი პასუხისმგებელია ოპერაციული პროცესების ეფექტურობაზე და გუნდის მოტივაციაზე.',
    phone: '+995 599 33 44 55'
  },
  {
    name: 'თამარ კობახიძე',
    role: 'მთავარი მენეჯერი',
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    desc: 'კლიენტებთან ურთიერთობისა და პროექტების მართვის სპეციალისტი.',
    age: 29,
    experience: '6 წელი პროექტების მართვაში',
    bio: 'თამარი უზრუნველყოფს კლიენტებთან ეფექტურ კომუნიკაციას და პროექტების დროულად შესრულებას.',
    phone: '+995 599 44 55 66'
  },
  // ლოკაციის მენეჯერები
  {
    name: 'გიორგი აბაშიძე',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/men/15.jpg',
    desc: 'Glass Bridge ლოკაციის ოპერაციული მენეჯერი.',
    age: 27,
    experience: '4 წელი ღონისძიებების ორგანიზებაში',
    bio: 'გიორგი პასუხისმგებელია Glass Bridge ლოკაციის ოპერაციულ მართვაზე და სტუმრების კომფორტზე.',
    phone: '+995 599 55 66 77'
  },
  {
    name: 'მარიამ ბერიძე',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/women/16.jpg',
    desc: 'Narikala ლოკაციის მენეჯერი.',
    age: 25,
    experience: '3 წელი ტურიზმის სფეროში',
    bio: 'მარიამი უზრუნველყოფს Narikala ლოკაციის სტუმრების საუკეთესო გამოცდილებას.',
    phone: '+995 599 66 77 88'
  },
  {
    name: 'დავით ქობულაძე',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/men/17.jpg',
    desc: 'Rike Park ლოკაციის მენეჯერი.',
    age: 30,
    experience: '5 წელი ღონისძიებების მართვაში',
    bio: 'დავითს აქვს მდიდარი გამოცდილება ღონისძიებების ორგანიზებაში და სტუმრების მომსახურებაში.',
    phone: '+995 599 77 88 99'
  },
  {
    name: 'სოფო მელიქიშვილი',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/women/18.jpg',
    desc: 'Info360 ლოკაციის მენეჯერი.',
    age: 28,
    experience: '4 წელი მარკეტინგში',
    bio: 'სოფო უზრუნველყოფს Info360 ლოკაციის პოპულარიზაციას და სტუმრების კმაყოფილებას.',
    phone: '+995 599 88 99 00'
  },
  {
    name: 'გიგა კაპანაძე',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/men/19.jpg',
    desc: '360° Studio ლოკაციის მენეჯერი.',
    age: 31,
    experience: '7 წელი ვიდეო-პროდუქციაში',
    bio: 'გიგა პასუხისმგებელია 360° Studio-ს ტექნიკურ და კრეატიულ მართვაზე.',
    phone: '+995 599 99 00 11'
  },
  {
    name: 'თეკლა ბერიძე',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/women/20.jpg',
    desc: '360° Kids ლოკაციის მენეჯერი.',
    age: 24,
    experience: '2 წელი ბავშვთა ღონისძიებებში',
    bio: 'თეკლა უზრუნველყოფს ბავშვთა ღონისძიებების მაღალ ხარისხს და უსაფრთხოებას.',
    phone: '+995 599 00 11 22'
  },
  {
    name: 'ლაშა კობახიძე',
    role: 'ლოკაციის მენეჯერი',
    img: 'https://randomuser.me/api/portraits/men/21.jpg',
    desc: '360° Events ლოკაციის მენეჯერი.',
    age: 33,
    experience: '9 წელი ღონისძიებების მართვაში',
    bio: 'ლაშა კობახიძე არის 360° Events ლოკაციის მთავარი ორგანიზატორი და სტუმრების სერვისის სპეციალისტი.',
    phone: '+995 599 11 22 44'
  }
];

const LocationManagers = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedManager, setSelectedManager] = useState(null);
  const [showAllManagers, setShowAllManagers] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOpenModal = (manager) => {
    setSelectedManager(manager);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedManager(null);
  };

  // მენეჯერების სია მობილურზე
  const visibleManagers = isMobile && !showAllManagers ? managers.slice(0, 3) : managers;

  return (
    <div className="location-managers-wrapper">
      <h2 className="location-managers-title">ლოკაციის მენეჯერები</h2>
      <div className="managers-grid">
        {visibleManagers.map((m, i) => (
          <div className="manager-card" key={i}>
            <img src={m.img} alt={m.name} className="manager-img" />
            <div className="manager-info">
              <div className="manager-name">{m.name}</div>
              <div className="manager-role">{m.role}</div>
              <div className="manager-desc">{m.desc}</div>
              <button className="manager-more-btn" onClick={() => handleOpenModal(m)}>ვრცლად</button>
            </div>
          </div>
        ))}
      </div>
      {isMobile && !showAllManagers && (
        <button className="all-managers-btn" onClick={() => setShowAllManagers(true)}>
          იხილეთ ყველა მენეჯერი
        </button>
      )}
      {modalOpen && selectedManager && (
        <div className="manager-modal-overlay" onClick={handleCloseModal}>
          <div className="manager-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
            <img src={selectedManager.img} alt={selectedManager.name} className="manager-modal-img" />
            <div className="manager-modal-name">{selectedManager.name}</div>
            <div className="manager-modal-role">{selectedManager.role}</div>
            <div className="manager-modal-field">
              <span className="manager-modal-icon" title="ასაკი">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#888" strokeWidth="2"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="#888" strokeWidth="2"/></svg>
              </span>
              <span>ასაკი: {selectedManager.age}</span>
            </div>
            <div className="manager-modal-field">
              <span className="manager-modal-icon" title="გამოცდილება">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M12 8v4l3 3" stroke="#888" strokeWidth="2"/><circle cx="12" cy="12" r="10" stroke="#888" strokeWidth="2"/></svg>
              </span>
              <span>გამოცდილება: {selectedManager.experience}</span>
            </div>
            <div className="manager-modal-bio">{selectedManager.bio}</div>
            <div className="manager-modal-field">
              <span className="manager-modal-icon" title="მობილური">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="3" stroke="#888" strokeWidth="2"/><circle cx="12" cy="18" r="1" fill="#888"/></svg>
              </span>
              <a href={`tel:${selectedManager.phone.replace(/\s+/g, '')}`} className="manager-modal-phone-link">მობილური: {selectedManager.phone}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationManagers;
