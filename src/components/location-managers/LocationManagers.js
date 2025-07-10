'use client';
import React, { useState, useEffect } from 'react';
import './LocationManagers.css';

// დამფუძნებლები
const founders = [
  {
    name: 'ლაშა ჯაფავა',
    role: 'პროექტის ავტორი, დამფუძნებელი. ',
    img: '/images/locationmanagers/lashajapava.jpg',
    desc: '360° ინდუსტრიის პიონერი საქართველოში, ინოვაციური ხედვითა და მრავალწლიანი გამოცდილებით.',
    age: 44,
    experience: '15 წელი 360° ტექნოლოგიებში',
    bio: 'ლაშა ჯაფავა არის Video360 Studio-ს დამფუძნებელი და ტექნოლოგიური ლიდერი. მისი ინოვაციური მიდგომა და მრავალწლიანი გამოცდილება უზრუნველყოფს კომპანიის მუდმივ განვითარებას და ხარისხიან მომსახურებას.',
    phone: '+995 593 51 68 42'
  },
  {
    name: 'მალხაზ გიუზალოვი',
    role: 'დამფუძნებელი და პროექტის პარტნიორი.',
    img: '/images/locationmanagers/malxazgiuzalov.jpeg',
    desc: 'კრეატიული ლიდერი და გუნდის სულისჩამდგმელი, პასუხისმგებელი გუნდზე და განვითარებაზე.',
    age: 38,
    experience: '15 წელი მენეჯმენტსა და კრეატიულ ინდუსტრიაში',
    bio: 'მალხაზ გიუზალოვი უზრუნველყოფს Video360 Studio-ს კრეატიულ მიმართულებას და ხარისხის კონტროლს. მისი ლიდერობით კომპანია მუდმივად ავითარებს ახალ პროდუქტებს.',
    phone: '+995 592 13 56 56'
  }
];

// მთავარი პარტნიორები
const mainPartners = [
  {
    name: 'ანასტას დელიანოვი',
    role: 'პარტნიორი და პროექტის მხარდამჭერი',
    img: '/images/locationmanagers/anastasdelianov.jpeg',
    desc: 'ოპერაციული პროცესების კოორდინატორი და გუნდის მოტივატორი.',
    age: 21,
    experience: '8 წელი ოპერაციულ მენეჯმენტში',
    bio: 'ანასტას დელიანოვი ოპერაციული პროცესების ეფექტურობაზე და გუნდის მოტივაციაზე.',
    phone: '+995 557 75 87 23'
  },
  {
    name: 'თამაზ ოქროპირიძე',
    role: 'პარტნიორი და პროექტის მხარდამჭერი',
    img: '/images/locationmanagers/tamazokropiridze1.jpeg',
    desc: 'ტექნიკური ჯგუფის ხელმძღვანელი და პასუხისმგებელი ინვენტარის გამართულობასა და სწორად ფუნქციონირებაზე.',
    age: 30,
    experience: '11 წელი პროექტების მართვაში',
    bio: 'თამაზ ოქროპირიძე არის Video360 Studio-ს ტექნიკური ჯგუფის ხელმძღვანელი. ის პასუხისმგებელია ინვენტარის გამართულობასა და ტექნიკური პროცესების ეფექტურობაზე, რაც უზრუნველყოფს პროექტების წარმატებით განხორციელებას.',
    phone: '+995 597 07 11 94'
  },
  {
    name: 'გარო ისააკიანი',
    role: 'პარტნიორი და პროექტის მხარდამჭერი',
    img: '/images/locationmanagers/garo.jpeg',
    desc: 'სტაფთან ურთიერთობისა და კადრების მართვის სპეციალისტი.',
    age: 29,
    experience: '11 წელი პროექტების მართვაში',
    bio: 'გარო ისააკიანი უზრუნველყოფს კლიენტებთან ეფექტურ კომუნიკაციას და პროექტების დროულად შესრულებას.',
    phone: '+995 557 53 24 63'
  },
  {
    name: 'გიორგი თედიაშვილი',
    role: 'პარტნიორი და პროექტის მხარდამჭერი',
    img: '/images/locationmanagers/gio.jpeg',
    desc: 'ახალი ლოკაციების მოძიებისა და ლოკაციების უზრუნველყოფის სპეციალისტი.',
    age: 35,  
    experience: '6 წელი ლოკაციების მართვაში',
    bio: 'გიორგი თედიაშვილი არის Video360 Studio-ს ახალი ლოკაციების მოძიებისა და უზრუნველყოფის სპეციალისტი. ის პასუხისმგებელია ახალი შესაძლებლობების აღმოჩენასა და ლოკაციების ეფექტურ მართვაზე, რაც უზრუნველყოფს კომპანიის განვითარებას.',
    phone: '+995 599 12 11 85'
  }
];

// ივენთების მენეჯერები
const eventManagers = [
  {
    name: 'გიორგი მურადიანი',
    role: 'ივენთების მენეჯერი',
    img: '/images/locationmanagers/muradiani1.jpeg', 
    desc: 'Glass Bridge ლოკაციის ოპერაციული მენეჯერი.',
    age: 20,
    experience: '4 წელი ღონისძიებების ორგანიზებაში',
    bio: 'გიორგი მურადიანი არის Video360 Studio-ს ივენთების მენეჯერი და ანიმატორი. ის პასუხისმგებელია Glass Bridge ლოკაციის ოპერაციულ მართვაზე, სტუმრების განწყობაზე და ღონისძიებების გასართობ და ინოვაციურ ატმოსფეროზე.',
    phone: '+995 571 17 13 15'
  }
];

// მთავარი მენეჯერები
const mainManagers = [
  {
    name: 'ერო ისააკიანი',
    role: 'მთავარი მენეჯერი',
    img: '/images/locationmanagers/isakiani.jpeg',
    desc: ' ლოკაციების მთავარი მენეჯერი და ტურიზმის სფეროს სპეციალისტი.',
    age: 19,
    experience: ' 5 წელი გამოცდილება ტურიზმის სფეროში და ლოკაციების მართვაში',
    bio: 'ერო ისააკიანი არის Video360 Studio-ს მთავარი მენეჯერი და ლოკაციების ხელმძღვანელი. მას აქვს ტურიზმის სფეროში მუშაობის გამოცდილება და პასუხისმგებელია სტუმრების საუკეთესო გამოცდილებაზე, ლოკაციის ოპერაციულ მართვაზე და გუნდის კოორდინაციაზე.',
    phone: '+995 557 34 75 94'
  },
  {
    name: 'დანიელ სადოიანი',
    role: 'მთავარი მენეჯერი',
    img: '/images/locationmanagers/sadoyan.jpg',
    desc: 'ლოკაციების მთავარი მენეჯერი და ტურიზმის სფეროს სპეციალისტი.',
    age: 20,
    experience: '5 წელი გამოცდილება ტურიზმის სფეროში და ლოკაციების მართვაში',
    bio: 'დანიელ სადოიანი არის Video360 Studio-ს მთავარი მენეჯერი და ლოკაციების ხელმძღვანელი. მას აქვს ტურიზმის სფეროში მუშაობის გამოცდილება და პასუხისმგებელია სტუმრების საუკეთესო გამოცდილებაზე, ლოკაციის ოპერაციულ მართვაზე და გუნდის კოორდინაციაზე.',
    phone: '+995 555 18 16 83'
  }
];

// ლოკაციის მენეჯერები
const locationManagers = [
  {
    name: 'ლუკა ლალიაშვილი',
    role: 'ლოკაციის მენეჯერი',
    img: '/images/locationmanagers/laliashvili.jpeg',
    desc: 'Video360 Studio ლოკაციის მენეჯერი.',
    age: 18,
    experience: '4 წელი მარკეტინგში',
    bio: 'ლუკა ლალიაშვილი არის Video360 Studio-ს ლოკაციის მენეჯერი და გაყიდვების სპეციალისტი. ის პასუხისმგებელია კომპანიის პროდუქტის ადგილზე გაყიდვებზე, კლიენტების მოზიდვაზე და მათ მომსახურებაზე. ნიკოლოზი უზრუნველყოფს სტუმრების საუკეთესო გამოცდილებას და აქტიურად მონაწილეობს ლოკაციის პოპულარიზაციაში.',
    phone: '+995 557 56 16 08'
  },
  {
    name: 'ნიკოლოზ ლალიაშვილი',
    role: 'ლოკაციის მენეჯერი',
    img: '/images/locationmanagers/nikolozlaliashvili.jpeg',
    desc: 'Video360 Studio ლოკაციის მენეჯერი.',
    age: 18,
    experience: '4 წელი მარკეტინგში',
    bio: 'ნიკოლოზ ლალიაშვილი არის Video360 Studio-ს ლოკაციის მენეჯერი და გაყიდვების სპეციალისტი. ის პასუხისმგებელია კომპანიის პროდუქტის ადგილზე გაყიდვებზე, კლიენტების მოზიდვაზე და მათ მომსახურებაზე. ნიკოლოზი უზრუნველყოფს სტუმრების საუკეთესო გამოცდილებას და აქტიურად მონაწილეობს ლოკაციის პოპულარიზაციაში.',
    phone: '+995 500 11 73 04'
  },
  {
    name: 'ირაკლი დევდარიანი',
    role: 'ლოკაციის მენეჯერი',
    img: '/images/locationmanagers/devdariani.jpeg',
    desc: 'Video360 Studio ლოკაციის მენეჯერი.',
    age: 20,
    experience: '5 წელი მარკეტინგში',
    bio: 'ირაკლი დევდარიანი არის Video360 Studio-ს ლოკაციის მენეჯერი და გაყიდვების სპეციალისტი. ის პასუხისმგებელია კომპანიის პროდუქტის ადგილზე გაყიდვებზე, კლიენტების მოზიდვაზე და მათ მომსახურებაზე. ნიკოლოზი უზრუნველყოფს სტუმრების საუკეთესო გამოცდილებას და აქტიურად მონაწილეობს ლოკაციის პოპულარიზაციაში.',
    phone: '+995 591 15 17 02'
  },
  {
    name: 'ანდრეა ლალიაშვილი',
    role: 'ლოკაციის მენეჯერი',
    img: '/images/locationmanagers/andrealaliashvili.jpeg',
    desc: 'Video360 Studio ლოკაციის მენეჯერი.',
    age: 20,
    experience: '5 წელი მარკეტინგში',
    bio: 'ანდრეა ლალიაშვილი არის Video360 Studio-ს ლოკაციის მენეჯერი და გაყიდვების სპეციალისტი. ის პასუხისმგებელია კომპანიის პროდუქტის ადგილზე გაყიდვებზე, კლიენტების მოზიდვაზე და მათ მომსახურებაზე. ნიკოლოზი უზრუნველყოფს სტუმრების საუკეთესო გამოცდილებას და აქტიურად მონაწილეობს ლოკაციის პოპულარიზაციაში.',
    phone: '+995 557 25 52 03'
  },
  {
    name: 'ბადურიკა გასოევი',
    role: 'ლოკაციის მენეჯერი',
    img: '/images/locationmanagers/badurika.jpeg',
    desc: 'Video360 Studio ლოკაციის მენეჯერი.',
    age: 20,
    experience: '5 წელი მარკეტინგში',
    bio: 'ბადურიკა გასოევი არის Video360 Studio-ს ლოკაციის მენეჯერი და გაყიდვების სპეციალისტი. ის პასუხისმგებელია კომპანიის პროდუქტის ადგილზე გაყიდვებზე, კლიენტების მოზიდვაზე და მათ მომსახურებაზე. ნიკოლოზი უზრუნველყოფს სტუმრების საუკეთესო გამოცდილებას და აქტიურად მონაწილეობს ლოკაციის პოპულარიზაციაში.',
    phone: '+995 597 77 37 63'
  }
];

// ყველა ერთად ერთ მასივში საჭიროების შემთხვევაში
const managers = [
  ...founders,
  ...mainPartners,
  ...eventManagers,
  ...mainManagers,
  ...locationManagers
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
  // თითო სექციისთვის ცალკე ვაჩვენებთ სათაურს და ბარათებს
  const renderSection = (title, arr) => (
    <div className="manager-section" key={title}>
      <h3 className="manager-section-title">{title}</h3>
      <div className="managers-grid">
        {arr.map((m, i) => (
          <div className="manager-card" key={m.name + i}>
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
    </div>
  );

  return (
    <div className="location-managers-wrapper">
      <h2 className="location-managers-title">ჩვენი გუნდი</h2>
      {renderSection('დამფუძნებლები', founders)}
      {renderSection('მთავარი პარტნიორები', mainPartners)}
      {renderSection('ივენთების მენეჯერები', eventManagers)}
      {renderSection('მთავარი მენეჯერები', mainManagers)}
      {renderSection('ლოკაციის მენეჯერები', locationManagers)}
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
